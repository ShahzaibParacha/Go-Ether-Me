const knex = require("../knex");

var newID = 2000000000;
const getAllProjects = () => {
    return knex("projects").select("*").limit(100);
}

const getAllTechProjects = () => {
    return knex("projects").select("*").where("main_category", "Technology").where("state", "failed").limit(20);
}

const getAProject = (id) => {
    return knex("projects").select("*").where("ID", id);
}

const postAProject = (newName, newCategory, new_main_category, newGoal) => {
    newID+=1;
    var date = new Date();
    var deadlineDate = new Date(date.setMonth(date.getMonth()+1));
    return knex("projects").insert(
        {
            ID: newID,
            name: newName,
            category: newCategory, 
            main_category: new_main_category,
            deadline: deadlineDate.toISOString(),
            currency: "USD",
            goal: newGoal,
            launched: date,
            pledged: 0,
            state: "active",
            backers: 0,
            country: "US",
            usd_pledged: 0
        });
}

const postFunds = (id, amount) => {
    var prevFunds = knex("projects").select("pledged").where("ID", id);
    var updatedFunds = prevFunds + amount;
    return knex("projects").where("ID", id).update('pledged', updatedFunds);
}

const updateBeleivers = (id, amount) => {
    var prevBeleivers = knex("projects").select("backers").where("ID", id);
    var updatedBeleivers = prevBeleivers + 1;
    return knex("projects").where("ID", id).update('backers', updatedBeleivers);
}

module.exports =  {
    getAllProjects,
    getAllTechProjects,
    getAProject,
    postAProject,
    postFunds,
    updateBeleivers
};
