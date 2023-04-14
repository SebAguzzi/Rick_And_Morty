import { useState } from "react"
import styles from './card.module.css'


export default function SearchBar({onSearch}) {

  const [id, setId] = useState("")

  const handleChange = (event) => {
    setId(event.target.value)
  }

  return (
      <div>
        <input type='search' value={id} onChange={handleChange} />
        <button className={styles.boton} onClick={() =>{onSearch(id)}}>Agregar</button>
      </div>
    )
  }
