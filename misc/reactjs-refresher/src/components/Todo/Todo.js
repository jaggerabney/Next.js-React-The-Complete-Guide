import { useState } from "react";

import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && (
        <>
          <Modal />
          <Backdrop />
        </>
      )}
    </>
  );
}

export default Todo;
