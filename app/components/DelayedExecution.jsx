//delayed execution
class DelayedExecution {
    list = [];
    add(name, cb, time) {
        if(typeof this.list[name] !== "undefined" || typeof this.list[name] !== null) {
            clearTimeout(this.list[name]);
            this.list[name] = null;
        }

        this.list[name] = setTimeout(function() {
            cb();
            this.list[name] = null;
        }, time);
    }
}

export default DelayedExecution;
