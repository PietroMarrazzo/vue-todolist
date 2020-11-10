const app = new Vue ({
    el:'#app',

    data: {
        indexObj: 0,
        objectives: [
            { obj: 'Fare la spesa' },
            { obj: 'Chiamare nonna' },
            { obj: 'Controllare offerte Black Friday' },
        ],
        message: '',
    },

    methods: {
        addTodo() {
            if (this.message != '') {
                this.objectives.push(this.message);
                this.message = '';
            }
        },
        
        removeTodo() {

        },
    },


});