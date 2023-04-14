import { useSelector } from "react-redux";
import Card from "../Card";
import { connect, useDispatch } from 'react-redux'
import { filterCards, orderCards } from '../../redux/actions'
import { useState } from "react";



const Favorites = () => {

    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    const favorites = useSelector((state) => state.myFavorites);

    return(
        <div>
          <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>

          <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">All Characters</option>
          </select>

          {
          favorites.map(({id, name, species, gender, image}) => {
            return (
                <Card
                id ={id}
                key={name}
                name={name}
                species={species}
                gender={gender}
                origin={origin.name}
                image={image}
              />
            )
          })}
        </div>
    )
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  }
}

export default connect(mapStateToProps, null)(Favorites);