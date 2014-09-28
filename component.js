var todo = Vue.extend({
    template: '#todo-template',
    directives: {
        'todo-focus': function (value) {
            if (!value) {
                return;
            }
            var el = this.el;
            setTimeout(function () {
                el.focus();
            }, 0);
        }
    },
    computed: {
        isValid: function () {
            var valid = true
            for (var key in this.validation) {
                if (!this.validation[key]) {
                    valid = false
                }
            }
            return valid
        }
    },
//    data: {
//        validation : {
//            name : false
//        }
//    },
    filters: validators,
    methods: {
       // ToDo ÇÃï“èWäJén
        editTodo : function(item) {
            if (this.editingTodo == null){
                this.editingTodo = item;
            }
        },
        editedTodo: function(item){

//            if (this.isValid) {
                this.editingTodo = null;
//            }
        }
    }
 
});
Vue.component('todo',todo);
