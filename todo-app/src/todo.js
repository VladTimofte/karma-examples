// src/todo.js

export default class TodoApp {
  constructor() {
    this.tasks = [];
  }

  // {text: 'Sa merg la doctor', completed: false},

  addTask(task) {
    if (task && typeof task === "string") {
      this.tasks.push({
        text: task,
        completed: false, //default
      });
      return true;
    }
    return false;
  }

  completeTask(index) {
    if (this.tasks[index]) {
      this.tasks[index].completed = true;
      return true;
    }
    return false;
  }

  deleteTask(index) {
    if (this.tasks[index]) {
      this.tasks.splice(index, 1);
      return true;
    }
    return false;
  }

  getTasks() {
    return this.tasks;
  }
}
