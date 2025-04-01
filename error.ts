class Error {
    constructor(message: string) {
        this.message = message;
    }
    public message: string = "Unknown error";
    public name: string = "Error"
}

class TypeError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "TypeError";
    }
}

class ReferenceError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "ReferenceError";
    }
}

class SyntaxError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "SyntaxError";
    }
}

class DOMException extends Error {
    constructor(type: string, message: string) {
        super(message);
        this.name = type;
    }
}