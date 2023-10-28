import { useState } from "react";
import Todo from "./components/todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";
import Filter from "./components/Filter";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar Funcionalidade X Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addTodo = (text, category) => {
    const newtodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 100000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newtodos);
  };

  //função que remove as tarefas
  const removetodo = (id) => {
    const newtodos = [...todos];
    const filteredtodos = newtodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredtodos);
  };

  //função que marca como completa as tarefas

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  //aqui começa a função onde coloco meus componentes
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
              ? todo.isCompleted
              : !todo.isCompleted
          )
          .filter((todo) =>
            todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removetodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
