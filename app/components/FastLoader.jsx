class FastLoader {
    show() {
        this.hide();
        document.getElementById("content").appendChild(
            this.template()
        );
    }

    hide() {
        let dom = document.getElementById("fastLoader");
        if(dom) dom.remove();
    }

    template() {
        let content = '<div class="loading-panel">'+
        '<div class="spinner"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div><div class="progress-indicator"><span>0</span></div>'+
        '</div>';

        let dom = document.createElement("div");
        dom.id = "fastLoader";
        dom.className = "loading-overlay";
        dom.innerHTML = content;

        return dom;
    }
}

export default FastLoader;