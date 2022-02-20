import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorForm from "../components/AuthorForm";
import { useNavigate } from "react-router-dom";

export default () => {
  const [authors, setAuthors] = useState([]);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const createAuthor = (author) => {
    axios
      .post("http://localhost:8000/api/author", author)
      .then((res) => {
        setAuthors([...authors, res.data]);
      })
      .then((res) => navigate("/author/"))
      .catch((err) => {
        const errorResponse = err.response.data.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };
  return (
    <div>
      <h2>Add a new author</h2>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-5 m-auto" key={index}>
          {err}
        </p>
      ))}
      <AuthorForm onSubmitProp={createAuthor} initialName="" />
    </div>
  );
};
