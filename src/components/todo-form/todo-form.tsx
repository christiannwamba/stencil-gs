import { Component, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'todo-form',
  styleUrl: 'todo-form.scss'
})
export class TodoForm {

  @Event() newTodo: EventEmitter;
  @State() todo: string;


  handleChange(e) {
    this.todo = (e.target as HTMLTextAreaElement).value;
  }

  handleNewTodo() {
    this.newTodo.emit(this.todo);
    this.todo = '';
  }

  render() {
    return (
      <div class="todo-form">
        <input type="text" class="form-control" placeholder="New Task" value={this.todo} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleNewTodo.bind(this)}>Add</button>
      </div>
    );
  }
}
