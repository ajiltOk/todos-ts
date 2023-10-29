import { useState } from 'react'
import { ButtonControl } from '../ButtonControl/ButtonControl'

interface IAddTodo {
  onCreate: (value: string | number) => void
}

const AddTodo: React.FC<IAddTodo> = (props) => {
  const [value, setValue] = useState('')

  const submitHendler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (value.trim()) {
      props.onCreate(value)
      setValue('')
    }
  }

  return (
    <form onSubmit={submitHendler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <ButtonControl children={'Add todo'} type="submit" />
    </form>
  )
}

export { AddTodo }
