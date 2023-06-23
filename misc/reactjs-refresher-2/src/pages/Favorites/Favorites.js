import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";
import MeetupList from "../../components/meetups/MeetupList/MeetupList";

function FavoritesPage() {
  const favoritesContext = useContext(FavoritesContext);
  let content;

  if (favoritesContext.numFavorites < 1) {
    content = <p>No favorites yet!</p>;
  } else {
    content = <MeetupList meetups={favoritesContext.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
