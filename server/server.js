const express = require("express");
const cors = require("cors");
const projectFunctions = require("./routes/projects");
const app = express();
require("dotenv").config();
const Web3 = require("web3");
const Project = require("../build/contracts/Project.json");

let web3;
let id;
let contract;
let addresses;
let contractReady;
let accounts;

const setupContract = async () => {
  web3 = new Web3(`http://localhost:9545`);
  id = await web3.eth.net
    .getId()
    .catch((err) => console.log("Error generating ID"));
  const deployedAddress = Project.networks[id].address;
  console.log(`Smart Contract Project eployed at address: ${deployedAddress}`);
  contract = new web3.eth.Contract(Project.abi, deployedAddress);
  addresses = await web3.eth.getAccounts().then((item) => {
    accounts = item;
  });
  contractReady = true;
};

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.status(200).json({ success: true });
});

app.get("/projects", async (_req, res) => {
  const allProjects = await projectFunctions.getAllProjects();
  res.status(200).json({ allProjects });
});

app.get("/:id", async (req, res) => {
  const currentProject = await projectFunctions.getAProject(req.params.id);
  console.log(currentProject);
  res.status(200).json({ currentProject });
});

const port = process.env.PORT || 4000;
app
  .listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  })
  .on("error", (err) => {
    console.log(`Error Code: ${err}`);
  });

app.post("/New", async (req, res) => {
  if (contractReady) {
    contract.methods
      .createNewProject(req.body.goal, accounts[0], req.body.name)
      .send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(
        console.log(
          `New project added to the Blcokchain! Name: ${req.body.name}, Goal: ${req.body.goal}`
        )
      )
      .catch((err) => console.log(err));
  } else {
    await setupContract();
    contract.methods
      .createNewProject(req.body.goal, accounts[0], req.body.name)
      .send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(
        console.log(
          `New project added to the Blcokchain! Name: ${req.body.name}, Goal: ${req.body.goal}`
        )
      )
      .catch((err) => console.log(err));
  }

  const newProject = await projectFunctions.postAProject(
    req.body.name,
    req.body.goal,
    req.body.category
  );

  res.status(201).json({ id: newProject[0] });
});

app.post("/:id/withdraw", async (req, res) => {
  if (contractReady) {
    contract.methods
      .withdrawFunds()
      .send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(console.log(`Processing Withdrawal!`))
      .catch((err) =>
        console.log(
          "Withdrawal unsuccessful! You have not yet reached 50% of the funding."
        )
      );
  } else {
    await setupContract();
    contract.methods
      .withdrawFunds()
      .send({
        from: accounts[0],
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(console.log(`Processing Withdrawal!`))
      .catch((err) =>
        console.log(
          "Withdrawal unsuccessful! You have not yet reached 50% of the funding."
        )
      );
  }
});

app.post("/:id", async (req, res) => {
  if (contractReady) {
    contract.methods
      .addBeleiver()
      .call()
      .then(
        console.log(
          `New beleiver added to the Blockchain for projectID ${req.params.id}!`
        )
      )
      .catch((err) => console.log(err));

    console.log(web3.utils.toWei(req.body.amount, "wei"));
    contract.methods
      .contribute()
      .send({
        from: accounts[Math.floor(Math.random() * accounts.length)],
        value: web3.utils.toWei(req.body.amount, "wei"),
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(
        console.log(
          `Amount ${req.body.amount} contributed recorded on the Blockchain for projectID ${req.params.id}!`
        ),
        contract.methods
          .getDetails()
          .call()
          .then((bel) => console.log(bel))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log(err));
  } else {
    await setupContract();
    contract.methods
      .addBeleiver()
      .call()
      .then(
        console.log(
          `New beleiver added to the Blockchain for projectID ${req.params.id}!`
        )
      )
      .catch((err) => console.log("Invalid amount!"));

    contract.methods
      .contribute()
      .send({
        from: accounts[Math.floor(Math.random() * accounts.length)],
        value: web3.utils.toWei(req.body.amount, "wei"),
        gas: 4712388,
        gasPrice: 100000000000,
      })
      .then(
        console.log(
          `Amount ${req.body.amount} contributed recorded on the Blockchain for projectID ${req.params.id}!`
        ),
        contract.methods
          .getDetails()
          .call()
          .then((bel) => console.log(bel))
          .catch((err) => console.log(err))
      )
      .catch((err) => console.log("Invalid amount!"));
  }

  const currentProject = await projectFunctions.postFunds(
    req.params.id,
    req.body.amount
  );
  const currentBeleivers = await projectFunctions.updateBeleivers(
    req.params.id
  );
  res.status(200).json({ currentProject, currentBeleivers });
});
