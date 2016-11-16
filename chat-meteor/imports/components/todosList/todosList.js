import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Tasks } from '../../api/tasks.js';
 
import template from './todosList.html';
 
class TodosListCtrl {
  constructor($scope) {
    $scope.viewModel(this);
 
    this.helpers({
      tasks() {
        // Show newest tasks at the top
        return Tasks.find({}, {
          sort: {
            date: -1
          }
        });
      }
    })
  }
  addTask(newTask) {
    // Insert a task into the collection
    Tasks.insert({
      name: this.name,
      text: this.text,
      date: new Date
    });
 
    // Clear form
    this.newTask = '';
  }
}
 
export default angular.module('todosList', [
  angularMeteor
])
  .component('todosList', {
    templateUrl: 'imports/components/todosList/todosList.html',
    controller: TodosListCtrl
  });