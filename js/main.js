const app = new Vue ({
    el:'#app',

    data: {
        indexObj: 0,
        objectives: [
            'Fare la spesa',
            'Chiamare nonna',
            'Controllare offerte Black Friday',
        ],
        message: '',
        full: 'true',
    },

    methods: {
        addTodo() {
            if (this.message != '') {
                if (this.objectives.length < 11) {
                    console.log(this.message);
                    this.objectives.push(this.message);
                    this.message = '';
                }
                else {
                    alert('Forse dovresti pensare anche a riposare ;)');
                }
            }
        },
        
        removeTodo(index) {
            this.objectives.splice(index, 1);
            if (this.objectives.length < 2) {
                this.full = 'false';
            }
        },
    },


});