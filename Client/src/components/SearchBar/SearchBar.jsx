import { useState } from "react"
import styles from '../SearchBar/SearchBar'


export default function SearchBar({onSearch}) {

  const [id, setId] = useState("")

  const handleChange = (event) => {
    setId(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      onSearch(id);
      setId('');
      event.preventDefault();
    }
  }

  return (
      <div>
        <input type='search' value={id} onChange={handleChange} onKeyDown={handleKeyDown}/>
        <button className={styles.boton} onClick={() =>{onSearch(id)}}>Agregar</button>
      </div>
    )
}
