import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import styles from "./card.module.css";
import { orderCards, filterCards } from "../redux/actions";
import { useState } from "react";


const Favorites = () => {
  const dispatch = useDispatch(); // Hook useDispatch para despachar acciones
  const favorites = useSelector((state) => state.myFavorites);

  // Función para manejar el cambio de orden
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value))
    setAux(!aux);
    // Despacha la acción orderCards con el valor seleccionado
  };
  // Función para manejar el cambio de filtro
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));;
  };
  const [aux, setAux] = useState(false)




  return (
    <>
      <label htmlFor="orden">Orden:</label>
      <select id="orden" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <label htmlFor="genero">Género:</label>
      <select id="genero" onChange={handleFilter}>
        <option value="Male">Masculino</option>
        <option value="Female">Masculino</option>
        <option value="Genderless">Sin genero</option>
        <option value="unknown">Desconocido</option>
        <option value="allCharacters">Todos los favoritos</option>
      </select>

      <div className={styles.container}>
        {favorites.map(({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              id={id}
              key={name}
              name={name}
              species={species}
              gender={gender}
              origin={origin.name}
              image={image}
              status={status}
            />
          );
        })}
      </div>
    </>
  );
};

export default Favorites
