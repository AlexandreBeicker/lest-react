import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState ([
    'Estudar React com TypeScript',
    'Estudar Bun',
    'Estudar FireBase'
  ])

  return (

      <div>
          <h1> Aprendendo a mexer com Listas</h1>
          <hr />
          {tasks.map((item, index) => 
          <section>
            <span>{item}</span>
          </section>
          )}
      </div>
)
}

export default App
