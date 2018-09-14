class RoutingEvents {
    router = null;
    currentLocation = null;

    constructor(r) {
        this.router = r;

        this.getUrl = this.getUrl.bind(this);
        this.createClassName = this.createClassName.bind(this);
        this.updateContentClassByLocation = this.updateContentClassByLocation.bind(
            this
        );
    }

    getUrl() {
        return (
            window.location.pathname +
            "/" +
            window.location.hash.replace(/\#/gi, "")
        );
    }

    register() {
        let self = this;
        this.currentLocation = this.getUrl();
        this.updateContentClassByLocation();

        setInterval(function() {
            if (self.currentLocation == self.getUrl()) return;

            self.currentLocation = self.getUrl();
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
