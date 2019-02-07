/*class RoutingEvents {
    router = null;
    currentClass = null;

    updateRouter(r) {
        this.router = r;
    }

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
        this.currentClass = this.createClassName();
        this.updateContentClassByLocation();

        let action = function() {
            if (this.currentClass == self.createClassName()) return;

            this.currentClass = self.createClassName();
            self.updateContentClassByLocation();
        };

        setInterval(action, 500);
    }

    createClassName() {
        var currentLocation = this.getUrl();

        try {
            if (
                currentLocation == "/" ||
                currentLocation == "//" ||
                currentLocation == ""
            )
                return "homepage";

            if (this.isMarket()) {
                if (
                    document.getElementsByClassName("vertical-orderbook-up")
                        .length > 0
                ) {
                    return "market left-cell-active";
                }
                return "market";
            }

            if (typeof this.router.params.account_name === "undefined")
                return currentLocation.match(/[a-zA-Z]+/g).join("-");

            return currentLocation
                .replace("/" + this.router.params.account_name + "/", "/")
                .match(/[a-zA-Z]+/g)
                .join("-");
        } catch (e) {}

        return "";
    }

    isMarket() {
        let url = window.location.pathname;
        if (url.match(/\/market\/\w+_\w+/gi)) return true;

        return false;
    }

    updateContentClassByLocation() {
        document.getElementsByTagName("main")[0].className =
            "main " + this.createClassName();
    }
}

export default RoutingEvents;
*/