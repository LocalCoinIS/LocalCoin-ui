import ReactTooltip from "react-tooltip";

class DynamicDataTip {
    register() {
        let self = this;
        document.body.addEventListener(
            "mouseover",
            function(e) {
                e = e || window.event;
                let targetElem = e.target || e.srcElement;
                let dataTip = targetElem.getAttribute("data-tip");

                if (dataTip !== null) {
                    self.appendToolip(targetElem, dataTip);
                }
            },
            false
        );
    }

    appendToolip(dom, text) {
        if (dom.getElementsByClassName("dynamic-tooltiptext").length < 1) {
            let span = document.createElement("span");
            span.innerHTML = text;
            span.className = "dynamic-tooltiptext";

            dom.appendChild(span);
        }
    }
}

export default DynamicDataTip;
