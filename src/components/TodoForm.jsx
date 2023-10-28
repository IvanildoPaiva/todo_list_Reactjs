import { useState } from "react";

//aqui crio meus useStates e inicializo eles vazio
const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  //aqui crio minha handleSubmit que é uma ffunção para enviar o formulário
  //o passo a função no formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    //add toto
    setValue("");

    //limpar os campos
    setCategory("");
  };
  return (
    <div className="todo-form">
      <h2>Criar Tarefas:</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefas</button>
      </form>
    </div>
  );
};

export default TodoForm;
