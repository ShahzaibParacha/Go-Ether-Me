const knex = require("../knex");


const getAllProjects = () => {
    return knex("projects").select("*").limit(100);
}

const getAProject = (id) => {
    return knex("projects").select("*").where("id", id);
}

const postAProject = (newName, newGoal, newCategory) => {
    return knex("projects").insert(
        {
            projectName: newName,
            category: newCategory, 
            goal: newGoal,
            pledged: 0,
            beleivers: 0
        });
}

const postFunds = (id, amount) => {
    return knex("projects").where("id", id).increment('pledged', amount);
}

const updateBeleivers = (id) => {
    return knex("projects").where("id", id).increment('beleivers', 1);
}

module.exports =  {
    getAllProjects,
    getAProject,
    postAProject,
    postFunds,
    updateBeleivers
};
