import { useState, useMemo } from 'react'
import { TodoList } from '../TodoList/TodoList'
import { ButtonBlock } from '../ButtonBlock/ButtonBlock'
import { AddTodo } from '../AddTodo/AddTodo'
import { v4 as uuidv4 } from 'uuid'
import { ITodo } from '../../types/data'

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  const [active, setActive] = useState(false)

  const [completed, setCompleted] = useState(false)

  const filteredTodos = useMemo(() => {
    if (active) {
      return todos.filter((todo) => todo.complete === false)
    } else if (completed) {
      return todos.filter((todo) => todo.complete === true)
    } else {
      return todos
    }
  }, [todos, active, completed])

  let counter = todos.filter((todo) => todo.complete === false).length

  function addTodo(value: string | number): void {
    setTodos(todos.concat([{ title: value, complete: false, id: uuidv4() }]))
  }

  function removeTodo(idTodo: string): void {
    setTodos(todos.filter((todo) => idTodo !== todo.id))
  }

  function renameTodo(id: string, newTitle: string | number): void {
    setTodos((prevState) => {
      let newState = [...prevState]
      newState.map((todo) => {
        if (todo.id === id) {
          todo.title = newTitle
        }
        return todo
      })
      return newState
    })
  }

  function checkedTodo(id: string): void {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete
        }
        return todo
      })
    )
  }

  function activeTodos() {
    setCompleted(false)
    setActive(true)
  }

  function completedTodos() {
    setActive(false)
    setCompleted(true)
  }

  function allTodos() {
    setActive(false)
    setCompleted(false)
  }

  return (
    <div>
      <h1>todos</h1>
      <AddTodo onCreate={addTodo} />
      <TodoList
        todos={filteredTodos}
        removeTodo={removeTodo}
        renameTodo={renameTodo}
        checkedTodo={checkedTodo}
      />
      <div>
        {counter < 2 ? (
          <span>{counter + ' item left'}</span>
        ) : (
          <span>{counter + ' items left'}</span>
        )}
        <ButtonBlock
          activeTodos={activeTodos}
          completedTodos={completedTodos}
          allTodos={allTodos}
        />
      </div>
    </div>
  )
}

export { App }
