import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [input, setInput] = useState ("");
  const [editTask, setEditTask] = useState ({
    enabled: false,
    task: ''
  })

  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("@cursoreact")
    if(tarefasSalvas){
      setTasks(JSON.parse(tarefasSalvas));
    }
  },[])

  function handleRegister() {
    if (!input){
      alert("Preencha o campo!");
      return
    }

    if(editTask.enabled){
      handleSaveEdit();
      return;
    }

    setTasks(tarefas => [...tarefas, input]);
    setInput("");
    localStorage.setItem("@cursoreact", JSON.stringify([...tasks, input]));
  }

  function handleSaveEdit () {
    const findIndexTask = tasks.findIndex(task => task === editTask.task);
    const allTasks = [...tasks];
    allTasks[findIndexTask] = input;
    setTasks(allTasks)
    setEditTask({
      enabled: false,
      task: ''
    })
    setInput('');
    localStorage.setItem("@cursoreact", JSON.stringify(allTasks))
  }

  function handleDelete(item: string) {
    const removeTask = tasks.filter(task => task !== item);
    console.log(removeTask)
    setTasks(removeTask);
    localStorage.setItem("@cursoreact", JSON.stringify(removeTask))
  }

  function handleEdit(item: string) {
    setInput(item)
    setEditTask({
      enabled: true,
      task: item
    })
  }

  return (

      <div>
          <h1> Aprendendo a mexer com Listas</h1>
          <input 
          placeholder='Digite o nome da tarefa...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleRegister}>
            {editTask.enabled ? "Atualizar tarefa" : "Adicionar tarefa"}
          </button>
          
          <hr />
          {tasks.map((item, index) => 
          <section key={item}>
            <span>{item}</span>
            <button onClick={() => handleEdit(item)}>Editar</button>
            <button onClick={() => handleDelete(item)}>Excluir</button>
          </section>
          )}
      </div>
)
}

export default App
