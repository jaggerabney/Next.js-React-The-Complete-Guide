import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout/Layout";
import MeetupsPage from "./pages/Meetups/Meetups";
import NewMeetupPage from "./pages/NewMeetup/NewMeetup";
import FavoritesPage from "./pages/Favorites/Favorites";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
