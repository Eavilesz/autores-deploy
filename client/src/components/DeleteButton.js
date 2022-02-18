import react from "react";
import axios from "axios";

export default (props) => {
  const { authorId, successCallback } = props;
  const deleteAuthor = (e) => {
    axios.delete("http://localhost:8000/api/author/" + authorId).then((res) => {
      successCallback();
    });
  };
  return (
    <button
      type="button"
      className="btn btn-outline-danger"
      onClick={deleteAuthor}
    >
      Delete
    </button>
  );
};
