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
        editingTodo: null,
        new_name : ""
    },
    methods: {
        newTodo : function(){
            this.todos.push ({done:false, name: this.new_name, validation : {name:false}});
            this.new_name = "";
        }
    }
});

