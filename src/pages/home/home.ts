import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EditTodoPage } from '../edit-todo/edit-todo';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    todos: any = [];
    
    constructor(public navCtrl: NavController, public dataService: DataProvider) {
    }

    ionViewDidLoad() {
	this.dataService.load();
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
