//delayed execution
class DelayedExecution {
    list = [];
    add(name, cb, time) {
        if(typeof this.list[name] !== "undefined") {
            if(this.list[name] !== null) {
                clearTimeout(this.list[name]);
                this.list[name] = null;
            }
        }

        let self = this;
        this.list[name] = setTimeout(function() {
            cb();
            self.list[name] = null;
        }, time);
    }
}

export default DelayedExecution;
