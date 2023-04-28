import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const URL = "http://localhost:3001/rickandmorty/character";
  // const API_KEY = '99148198607c.3a0dd5cdb1283d5d5ed6'
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  async function onSearch(id) {
    try {
      const { data } = await axios(`${URL}/${id}`);
      if (data.name) setCharacters((oldChars) => [...oldChars, data]);
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  }

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert("Usuario inválido");
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  return (
    <div className="App">
      <Nav onSearch={onSearch} />{" "}
      {/* Nav siempre aparecerá en todas las rutas */}
      <Routes>
        <Route path="/" element={<Form login={login} />}></Route>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />{" "}
        {/* Cards solo aparecerá en la ruta /home */}
        <Route path="/about" element={<About />} />{" "}
        {/* About solo aparecerá en la ruta /about */}
        <Route path="/detail/:id" element={<Detail />} />{" "}
        {/* Detail aparecerá en la ruta /detail/:id, donde :id es un parámetro dinámico */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
