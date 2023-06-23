import { useState, createContext } from "react";

const FavoritesContext = createContext({
  favorites: [],
  numFavorites: 0,
  add: (favorite) => {},
  remove: (id) => {},
  isFavorite: (id) => {},
});

export function FavoritesContextProvider(props) {
  const [favorites, setFavorites] = useState([]);
  const context = {
    favorites,
    numFavorites: favorites.length,
    add: addFavoriteHandler,
    remove: removeFavoriteHandler,
    isFavorite: itemIsFavoriteHandler,
  };

  function addFavoriteHandler(favorite) {
    setFavorites((prevFavorites) => prevFavorites.concat(favorite));
  }

  function removeFavoriteHandler(id) {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  }

  function itemIsFavoriteHandler(id) {
    return favorites.some((meetup) => meetup.id === id);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
