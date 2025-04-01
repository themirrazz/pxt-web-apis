class Promise {
    constructor(func: Function) {
        let self = this;
        func(function (arg: any) {
            if (self.status != 'pending') {
                return;
            }
            self.args = arg;
            self.status = 'fufilled';
            self.OnThen.forEach(x => {
                x()
            });
        }, function (arg: any) {
            if (self.status != 'pending') {
                return;
            }
            self.args = arg;
            self.status = 'rejected';
            self.OnCatch.forEach(x => {
                x()
            });
        })
    }
    private OnThen: Function[] = [];
    private OnCatch: Function[] = [];
    private args:any;
    public status:'pending'|'fufilled'|'rejected' = "pending";
    public then(func: Function): Promise {
        let self = this;
        let promise = new Promise(function (ack: any, err: any) {
            if (self.status === 'rejected') {
                err(self.args);
            } else if (self.status === 'fufilled') {
                let z = func(self.args);
                if (z instanceof Promise) {
                    z.then(function (a: any) {
                        ack(a)
                    }).catch(function (n: any) {
                        err(n)
                    });
                } else {
                    ack(z);
                }
            } else {
                self.OnCatch.push(function () {
                    err(self.args)
                });
                self.OnThen.push(function () {
                    let z = func(self.args);
                    if (z instanceof Promise) {
                        z.then(function (a: any) {
                            ack(a)
                        }).catch(function (n: any) {
                            err(n)
                        });
                    } else {
                        ack(z);
                    }
                });
            }
        });
        return promise;
    }
    public catch(func: Function):Promise {
        let self = this;
        let promise = new Promise(function (ack: any, err: any) {
            if (self.status === 'fufilled') {
                err(self.args);
            } else if (self.status === 'rejected') {
                let z = func(self.args);
                if (z instanceof Promise) {
                    z.then(function (a: any) {
                        ack(a)
                    }).catch(function (n: any) {
                        err(n)
                    });
                } else {
                    ack(z);
                }
            } else {
                self.OnCatch.push(function (yy: any) {
                    let z = func(self.args);
                    if (z instanceof Promise) {
                        z.then(function (a: any) {
                            ack(a)
                        }).catch(function (n: any) {
                            err(n)
                        });
                    } else {
                        ack(z);
                    }
                });
            }
        });
        return promise;
    }
}