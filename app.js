var vm = new Vue({
    el: '#todo',
    data: {
        todos: [
            {
                done: true,
                content: 'Learn JavaScript',
                editing: false
            },
            {
                done: false,
                content: 'Learn Vue.js',
                editing: false
            }
        ]
    },
    methods: {
        // ToDo ÇÃï“èWäJén
        editTodo : function(item) {
          item.editing = true;
        }
        
    }
})



