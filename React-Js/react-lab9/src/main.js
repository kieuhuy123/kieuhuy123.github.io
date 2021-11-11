import "./style.css";
import store from "./store";
import {
  INCREMENT,
  DECREMENT,
  ADD_TODO,
  REMOVE_TODO,
} from "./actions/actionType";

const countEl = document.getElementById("count");
const btnIncrement = document.getElementById("increment");
const btnDecrement = document.getElementById("decrement");
console.log(store.getState());

store.subscribe(renderCounter);
store.subscribe(renderTodo);

btnIncrement.onclick = () => {
  store.dispatch({ type: INCREMENT });
};

btnDecrement.onclick = () => {
  store.dispatch({ type: DECREMENT });
};

function renderCounter() {
  const { counter } = store.getState();
  console.log(counter);
  countEl.textContent = counter.count;
}

renderCounter();

const todoForm = document.getElementById("todoForm");
const list = document.getElementById("list");

todoForm.onsubmit = (e) => {
  e.preventDefault();
  const task = todoForm.elements.task;
  console.log(task);
  store.dispatch({
    type: ADD_TODO,
    payload: task.value,
  });
  task.value = "";
};

function renderTodo() {
  const { todos } = store.getState();

  list.innerHTML = "";

  for (let t of todos.todos) {
    const li = document.createElement("li");

    li.append(t.title);

    const button = document.createElement("button");

    button.onclick = () => {
      store.dispatch({
        type: REMOVE_TODO,
        payload: t.id,
      });
    };

    button.textContent = "Delete #" + t.id;

    li.append(button);

    list.append(li);
  }
}

renderTodo();
