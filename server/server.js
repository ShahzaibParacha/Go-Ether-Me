const express = require("express");
const cors = require("cors");
const projectFunctions = require("./routes/projects");
const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ success: true });
});

app.get("/projects", async (_req, res) => {
  const allProjects = await projectFunctions.getAllTechProjects();
  res.status(200).json({ allProjects });
});

app.get("/:id", async (req, res) => {
  const currentProject = await projectFunctions.getAProject(req.params.id);
  res.status(200).json({ currentProject });
});

const port = process.env.PORT || 5000;
app
  .listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  })
  .on("error", (err) => {
    console.log(`Error Code: ${err}`);
  });


app.post("/projects", async (req, res) => {
  const newProject = await projectFunctions.postAProject(
    req.params.name,
    req.params.goal
  );
  //add to blockcahin here
  res.status(201).json({ id: newProject[0] });
});


app.post("/:id", async (req, res) => {
  const currentProject = await projectFunctions.postFunds(req.params.id);
  res.status(200).json({ currentProject });
  //... post contribution here
});

//functions are oppositely nested

/*
make sure that web app can communicate with smart contract today, with test network
do the db integration later, maybe on wednesday

use fixed account addresses, one for contributor and one for creator. that is it.

add option for installments, user pays once but the payment is made in installments. use js if not in ether


alternative idea, onle add/ change items in db here and then confirm to blockahin from front end
*/


