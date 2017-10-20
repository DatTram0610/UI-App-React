class Response {
    constructor() {
        this.isSuccess = false;
        this.alert= {
            message: null,
            type: null
        }
    }
};

class ErrorResponse extends Response {
    constructor(error) {
        this.isSuccess = false
        this.error = error
        this.alert.type = "Error"
        this.alert.message = "Data Handling Error"
    }
};

class SuccessResponse extends Response {
    constructor(response) {
        this.isSuccess = true
        this.data = response
        this.alert.type = "Success"
        this.alert.message = "Data Handling Success"
    }
};

module.exports = {
    SuccessResponse: SuccessResponse,
    ErrorResponse: ErrorResponse
}