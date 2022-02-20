// const cors = require("cors");
// const express = require("express");
// require("./server/config/mongoose.config"); // This is new
// const app = express();
// require("./server/routes/author.routes")(app);
// app.use(cors());
// app.use(express.json()); // This is new
// app.use(express.urlencoded({ extended: true })); // This is new
// app.listen(8000, () => {
//   console.log("Listening at Port 8000");
// });

const express = require("express");
const cors = require("cors");
const app = express();
require("./server/config/mongoose.config"); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require("./server/routes/author.routes")(app);
app.listen(8000, () => {
  console.log("Listening at Port 8000");
});
