import React, { useEffect, useState } from "react";
import axios from "axios";
import AuthorList from "../components/AuthorList";
export default () => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/all-authors").then((res) => {
      setAuthors(res.data.author);
      setLoaded(true);
      console.log(authors);
    });
  }, []);
  const removeFromDom = (authorId) => {
    setAuthors(authors.filter((author) => author._id !== authorId));
  };
  return (
    <div>
      {errors.map((err, index) => (
        <p className="p-3 mb-2 bg-danger text-white col-4 m-auto" key={index}>
          {err}
        </p>
      ))}
      {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom} />}
    </div>
  );
};
