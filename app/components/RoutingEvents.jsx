class RoutingEvents {
    currentLocation = null;

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
        return this.currentLocation.match(/[a-zA-Z]+/g).join("-");
    }

    updateContentClassByLocation() {
        document.getElementsByTagName("main")[0].className =
            "main " + this.createClassName();
    }
}

export default RoutingEvents;
