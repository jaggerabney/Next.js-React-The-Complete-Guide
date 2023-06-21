import Backdrop from "./components/Backdrop/Backdrop";
import Modal from "./components/Modal/Modal";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React!" />
      <Todo text="Master React!" />
      <Todo text="Explore the full React course" />
      <Backdrop />
      <Modal />
    </div>
  );
}

export default App;
