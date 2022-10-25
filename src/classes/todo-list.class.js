import { Todo } from "./todo.class";

export class TodoList{
    constructor() {
        //this.todos = [];
        this.caragarLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id){
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }
    marcarCompletado(id){
        for(const todo of this.todos){
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }
    eliminarCompletados(){
        console.log('Mamo');
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        console.log('mamo2');
        localStorage.setItem('todo',JSON.stringify(this.todos));
    }
    caragarLocalStorage(){
        // if(localStorage.getItem('todo')){
        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        // }else{
        //     this.todos = [];
        // }

        this.todos = (localStorage.getItem('todo'))
                        ? this.todos = JSON.parse(localStorage.getItem('todo')) 
                        : [];
        this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }

}