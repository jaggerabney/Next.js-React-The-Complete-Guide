import { Route, Switch } from "react-router-dom";

import MeetupsPage from "./pages/Meetups/Meetups";
import NewMeetupPage from "./pages/NewMeetup/NewMeetup";
import FavoritesPage from "./pages/Favorites/Favorites";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Switch>
        <Route path="/" exact>
          <MeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
