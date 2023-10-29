import { ButtonControl } from '../ButtonControl/ButtonControl'

interface IButtonBlock {
  activeTodos: () => void
  completedTodos: () => void
  allTodos: () => void
}

const ButtonBlock: React.FC<IButtonBlock> = (props) => {
  function activeTodoCounter() {
    props.activeTodos()
  }

  function checkedTodoCounter() {
    props.completedTodos()
  }

  function allTodoCounter() {
    props.allTodos()
  }

  return (
    <>
      <ButtonControl children={'Active'} onClick={activeTodoCounter} />
      <ButtonControl children={'Completed'} onClick={checkedTodoCounter} />
      <ButtonControl children={'All'} onClick={allTodoCounter} />
    </>
  )
}

export { ButtonBlock }
