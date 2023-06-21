import { useState } from "react";

import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  function closeModalHandler() {
    setShowModal(false);
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
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
          <Backdrop onClick={closeModalHandler} />
        </>
      )}
    </>
  );
}

export default Todo;
