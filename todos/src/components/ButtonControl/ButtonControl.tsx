interface IButtonControl {
  children: string | number
  onClick?: () => void
  type?: string
}

const ButtonControl: React.FC<IButtonControl> = (props) => {
  return <button onClick={props.onClick}>{props.children}</button>
}

export { ButtonControl }
