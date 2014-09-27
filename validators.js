var validators = (function () {
    var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return {
        nameValidator: function (val, index) {
            this.validation.content = !!val
            this.validation.index = index
            return val
        },
        emailValidator: function (val) {
            this.validation.email = emailRE.test(val)
            this.validation.index = index
            return val
        }
    }
})()