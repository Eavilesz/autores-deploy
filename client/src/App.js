import "./App.css";
import Main from "./views/Main";

import Update from "./views/Update";
import AddAuthor from "./views/AddAuthor";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="text-white bg-dark col-5  m-auto">Favourite Authors</h1>
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="product/:id" element={<Detail />} /> */}
          <Route path="author/:id/edit" element={<Update />} />
          <Route path="author/add" element={<AddAuthor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
