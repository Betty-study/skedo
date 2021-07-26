import { Bridge } from '../../../skedo-core/src'
import styles from './component.module.scss'

interface ButtonProps {
  text : string,
  bridge : Bridge,
  color : string,
  fontFamily : string ,
  fontStyle : Set<string>,
  align : "left" | "right" | "center",
  fontSize : number
}

const Button = ({
  text,
  fontSize,
  fontStyle = new Set<string>(),
  align,
  color,
  fontFamily,
  bridge,
} :ButtonProps) => {
	const style : any = {
    fontFamily : fontFamily,
    fontSize,
    textAlign: align,
    color 
  }

  return (
    <div className={styles.button} style={style}>
      <button>{text}</button>
    </div>
  )
}

export default Button