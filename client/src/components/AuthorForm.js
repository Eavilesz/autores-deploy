import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

export default (props) => {
  let navigate = useNavigate();
  const { initialName, onSubmitProp } = props;
  //   const [val, setVal] = useState(initialName);
  //keep track of what is being typed via useState hook
  const [name, setName] = useState(initialName);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    //make a post request to create a new product

    onSubmitProp({ name });
  };
  //onChange to update name
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-floating mb-3 col-5 m-auto">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <label htmlFor="floatingInput">Author Name</label>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={(e) => navigate("/")}
      >
        Cancel
      </button>
      &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
      <button type="submit" className="btn btn-outline-primary">
        Submit
      </button>
    </form>
  );
};
