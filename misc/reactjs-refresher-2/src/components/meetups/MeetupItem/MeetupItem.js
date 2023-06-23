import { useContext } from "react";

import FavoritesContext from "../../../store/favorites-context";
import Card from "../../UI/Card/Card";

import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const favoritesContext = useContext(FavoritesContext);
  const itemIsFavorited = favoritesContext.isFavorite(props.id);

  function toggleFavoriteHandler() {
    if (itemIsFavorited) {
      favoritesContext.remove(props.id);
    } else {
      const { id, title, image, address, description } = props;

      favoritesContext.add({ id, title, image, address, description });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>{`${
            itemIsFavorited ? "Remove from " : "Add to "
          } favorites`}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
