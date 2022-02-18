import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useParams, useNavigate } from "react-router-dom";

export default (props) => {
  const { id } = props;
  let params = useParams();
  let navigate = useNavigate();

  const [author, setAuthor] = useState();
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);
  //   console.log(params.id);
  useEffect(() => {
    axios.get("http://localhost:8000/api/author/" + params.id).then((res) => {
      setAuthor(res.data);
      setLoaded(true);
    });
  }, []);
  const updateAuthor = (author) => {
    // e.preventDefault();
    axios
      .put("http://localhost:8000/api/author/" + params.id, author)
      .then((res) => console.log(res))
      .then((res) => navigate("/author/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };
  return (
    <div>
      <h2>Edit the author</h2>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-3 m-auto" key={index}>
          {err}
        </p>
      ))}
      {loaded && (
        <div>
          <AuthorForm onSubmitProp={updateAuthor} initialName={author.name} />
        </div>
      )}
    </div>
  );
};
