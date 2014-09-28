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
    filters: validators,
    methods: {
       // ToDo ÇÃï“èWäJén
        editTodo : function(item) {
            if (this.editingTodo == null){
                this.editingTodo = item;
            }
        },
        editedTodo: function(item){
            if (this.isValid) {
                this.editingTodo = null;
            }
        }
    }
 
});
Vue.component('todo',todo);
var vm = new Vue({
    el: '#todos',
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
        id : "parent",
        todos:  [] ,
        editing : {todo: null},
        new_name : ""
    },
    methods: {
        newTodo : function(){
            if (this.new_name != ""){
                this.todos.push ({done:false, name: this.new_name, validation : {name:false}});
                this.new_name = "";
            }
        }
    }
});

