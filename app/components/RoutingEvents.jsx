class RoutingEvents {
    router = null;
    currentLocation = null;

    constructor(r) {
        this.router = r;

        this.createClassName = this.createClassName.bind(this);
        this.updateContentClassByLocation = this.updateContentClassByLocation.bind(
            this
        );
    }

    register() {
        let self = this;
        this.currentLocation = window.location.pathname;
        this.updateContentClassByLocation();

        setInterval(function() {
            if (self.currentLocation == window.location.pathname) return;

            self.currentLocation = window.location.pathname;
            self.updateContentClassByLocation();
        }, 500);
    }

    createClassName() {
        if (this.currentLocation == "/") return "homepage";

        if (typeof this.router.params.account_name === "undefined")
            return this.currentLocation.match(/[a-zA-Z]+/g).join("-");

        return this.currentLocation
            .replace("/" + this.router.params.account_name + "/", "/")
            .match(/[a-zA-Z]+/g)
            .join("-");
    }

    updateContentClassByLocation() {
        document.getElementsByTagName("main")[0].className =
            "main " + this.createClassName();
    }
}

export default RoutingEvents;
