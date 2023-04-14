//importar styles de Card.module.css
import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from '../redux/actions'
import { useEffect, useState } from "react";


function Card({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id, name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites});
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <div className={styles.carta}>
      <div>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
        <button className="boton" onClick={() => onClose(id)}>
          X
        </button>
      </div>
      <Link to={`/detail/${id}`}>
        <h3 className="card-name">{name}</h3>
      </Link>
      <div>{name}</div>
      <div>{species}</div>
      <div>{gender}</div>
      <div>{status}</div>
      <div>{origin}</div>
      <div>
        <img alt={image} src={image} />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
