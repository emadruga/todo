import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the EditTodoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
// @IonicPage()
@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
})
export class EditTodoPage {

    todo: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public dataService: DataProvider) {
	this.todo = {
	    title: '',
	    description: ''
	};
  }

    ionViewDidLoad() {
	console.log('ionViewDidLoad EditTodoPage');
	let todo = this.navParams.get('todo');
	if(typeof(todo) !== "undefined"){
	    this.todo = todo;
	}
    }

    save() {
	console.log('save button pressed!');
	this.dataService.save(this.todo);
	this.navCtrl.pop();
    }

}
