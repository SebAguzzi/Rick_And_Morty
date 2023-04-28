import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards, removeFav } from '../../redux/actions';
import { useState } from "react";

const Favorites = () => {
  const dispatch = useDispatch(); // Hook useDispatch para despachar acciones
  const favorites = useSelector((state) => state.myFavorites);

  // Función para manejar el cambio de orden
  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
    // Despacha la acción orderCards con el valor seleccionado
  };
  // Función para manejar el cambio de filtro
  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };
  const handleRemoveFav = (id) => {
    dispatch(removeFav(id))
  }
  const [aux, setAux] = useState(false);

  return (
    <div>
      <label htmlFor="orden">Orden:</label>
      <select id="orden" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <label htmlFor="genero">Género:</label>
      <select id="genero" onChange={handleFilter}>
        <option value="Male">Masculino</option>
        <option value="Female">Femenino</option>
        <option value="Genderless">Sin genero</option>
        <option value="unknown">Desconocido</option>
        <option value="allCharacters">Todos los favoritos</option>
      </select>

      {favorites.length === 0 ?
      <h1>No hay favoritos</h1>
      :
      favorites.map((fav, i) => {
        return (
          <Card
            id={fav.id}
            key={i}
            name={fav.name}
            status={fav.status}
            species={fav.species}
            gender={fav.gender}
            origin={fav.origin}
            image={fav.image}
            onClose={handleRemoveFav}
          />
        );
      })}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     myFavorites: state.myFavorites
//   }
// }

// export default connect(mapStateToProps, null)(Favorites);
export default Favorites;
