import { TodoItem } from '../TodoItem/TodoItem'
import { ITodo } from '../../types/data'

interface ITodoList {
  todos: ITodo[]
  removeTodo: (idTodo: string) => void
  renameTodo: (id: string, newTitle: string | number) => void
  checkedTodo: (id: string) => void
}

const TodoList: React.FC<ITodoList> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.title}>
            <TodoItem
              title={todo.title}
              removeTodo={props.removeTodo}
              renameTodo={props.renameTodo}
              checkedTodo={props.checkedTodo}
              complete={todo.complete}
              id={todo.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export { TodoList }
