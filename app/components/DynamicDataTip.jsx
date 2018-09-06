class DynamicDataTip {
    register() {
        let self = this;
        self.update();

        setInterval(function() {
            self.update();
        }, 2000);
    }

    update() {
        let list = this.getAllElementsWithAttribute("data-tip");

        for (var i = 0, n = list.length; i < n; i++) {
            let dataTip = list[i].getAttribute("data-tip");
            this.appendToolip(list[i], dataTip);
        }
    }

    getAllElementsWithAttribute(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName("*");
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null)
                matchingElements.push(allElements[i]);
        }

        return matchingElements;
    }

    appendToolip(dom, text) {
        if (dom.getElementsByClassName("dynamic-tooltiptext").length < 1) {
            dom.innerHTML +=
                '<span class="dynamic-tooltiptext">' + text + "</span>";
        }
    }
}

export default DynamicDataTip;
