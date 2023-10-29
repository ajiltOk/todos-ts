import { useState, useRef, useEffect } from 'react'
import { ButtonControl } from '../ButtonControl/ButtonControl'
import { ITodo } from '../../types/data'

interface ITodoItem extends ITodo {
  removeTodo: (idTodo: string) => void
  renameTodo: (id: string, newTitle: string | number) => void
  checkedTodo: (id: string) => void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
  const [todoTitle, setTodoTitle] = useState(props.title)

  const [isEdit, setIsEdit] = useState(false)

  const [isChecked, setIsChecked] = useState(props.complete)

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (isEdit) {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }
  }, [isEdit])

  const onButtonEditClick = () => {
    setIsEdit(true)
  }

  const onButtonSaveClick = () => {
    props.renameTodo(props.id, todoTitle)
  }

  const onButtonDelClick = () => {
    props.removeTodo(props.id)
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodoTitle(event.target.value)
  }

  const handleCheckboxChange = () => {
    props.checkedTodo(props.id)
    setIsChecked(!isChecked)
  }

  return (
    <div>
      <input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
      <input ref={inputRef} type="text" value={todoTitle} onChange={handleChange} />
      {!isEdit && <ButtonControl children={'Edit'} onClick={onButtonEditClick} />}
      {isEdit && <ButtonControl children={'Save'} onClick={onButtonSaveClick} />}
      <ButtonControl children={'Delete'} onClick={onButtonDelClick} />
    </div>
  )
}

export { TodoItem }
