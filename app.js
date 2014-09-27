Vue.component('todo', {
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
    data: {
        validation : {
            content : false
        }
    },
    filters: validators,
    methods: {
       // ToDo ÇÃï“èWäJén
        editTodo : function(item) {
            this.editingTodo = item;
        },
        editedTodo: function(item){

            if (this.isValid) {
                this.editingTodo = null;
            }
        }
    }
 
});

var vm = new Vue({
    el: '#todo',
    created: function (){
        todoStorage.fetch();
    },
    // ready hook, watch todos change for data persistence
    ready: function () {
        this.$watch('todos', function (todos) {
                todoStorage.save(todos);
        });
    },
    data: {
        todos:  [] ,
        editingTodo: null,
        new_content : ""
    },
    methods: {
        newTodo : function(){
            this.todos.push ({done:false, content: this.new_content});
            this.new_content = "";
        }
    }
});

