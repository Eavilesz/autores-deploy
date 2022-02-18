import DeleteButton from "./DeleteButton";

import { Link, useParams, useNavigate } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";

export default (props) => {
  const navigate = useNavigate();
  const [author, setAuthor] = useState([]);
  // console.log(props);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/all-authors")
      .then((res) => setAuthor(res.data.author));
  }, []);
  const removeFromDom = (authorId) => {
    setAuthor(author.filter((author) => author._id != authorId));
  };
  return (
    <div className=" mb-3 col-3 m-auto">
      <div style={{ marginLeft: "10rem" }}>
        <Link to="/author/add" className="text-secondary">
          Add an author
        </Link>
      </div>
      <h2>We have quotes by:</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        {author.map((author, idx) => {
          return (
            <tbody>
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{author.name}</td>
                <td>
                  <DeleteButton
                    authorId={author._id}
                    successCallback={() => removeFromDom(author._id)}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-info mr-1"
                    onClick={(e) => navigate("/author/" + author._id + "/edit")}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
