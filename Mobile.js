class Mobile {
    constructor(name) {
        this.name = name;
        this.msg = '';
        this.inbox = [];
        this.outbox = [];
        this.battery = 100;
    }

    writeMsg(msg) {
        this.msg = msg;
    }

    sendMsg(mobile) {
        if (this.battery <= 0) {
            alert('Vui long sac dien thoai');
            return;
        }
        this.outbox.push(this.msg);
        mobile.receiveMsg(this.name, this.msg);
        this.battery -= 10;
    }

    receiveMsg(name, msg) {
        this.inbox.push(msg);
        console.log("You got a message form " + name);
    }
}