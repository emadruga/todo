import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    
    todo: any;
    todos: any = [];
    
    constructor(public navCtrl: NavController) {
	this.todo = {
	    title: '',
	    description: ''
	};
	this.todos = [
	    {title: 'Todo 1', description: 'abc'},
	    {title: 'Todo 2', description: 'abc'},
	    {title: 'Todo 3', description: 'abc'},
	    {title: 'Todo 4', description: 'abc'},
	    {title: 'Todo 5', description: 'abc'},
	    {title: 'Todo 6', description: 'abc'},
	    {title: 'Todo 7', description: 'abc'},
	    {title: 'Todo 8', description: 'abc'},
	];

    }

    ionViewDidLoad() {
	
    }

    save() {
	console.log('TODO: finish save function');
    }

    addTodo(){
	console.log('TODO: finish add function');
	this.navCtrl.push(EditTodoPage);
    }

    editTodo(todo){
	console.log(todo);
	this.navCtrl.push(EditTodoPage, {
	    todo: todo
	});
    }


}
