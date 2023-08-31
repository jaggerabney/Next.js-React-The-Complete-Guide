import { useRef } from "react";

import classes from "./profile-form.module.css";

function ProfileForm({ onChangePassword }) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const oldPassword = oldPasswordRef.current.value;
    const newPassword = newPasswordRef.current.value;

    onChangePassword({ oldPassword, newPassword });
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input ref={newPasswordRef} type="password" id="new-password" />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input ref={oldPasswordRef} type="password" id="old-password" />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
