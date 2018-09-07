class DynamicDataTip {
    register() {
        let self = this;
        self.update();

        setInterval(function() {
            self.update();
        }, 3000);
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
        var list = dom.getElementsByClassName("dynamic-tooltiptext");

        if (list.length > 0) {
            let toRemove = false;
            for (var i in list)
                if (typeof list[i].innerHTML !== "undefined")
                    if (
                        list[i].innerHTML.replace(/"/g, "") !=
                        text.replace(/"/g, "")
                    )
                        toRemove = true;

            if (toRemove) {
                dom.innerHTML = dom.innerHTML.replace(
                    /\<span class=\"dynamic-tooltiptext\"\>[^]*\<\/span\>/g,
                    ""
                );
                dom.innerHTML +=
                    '<span class="dynamic-tooltiptext">' + text + "</span>";
            }
        } else
            dom.innerHTML +=
                '<span class="dynamic-tooltiptext">' + text + "</span>";
    }
}

export default DynamicDataTip;
