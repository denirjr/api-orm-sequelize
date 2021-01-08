const { Router } = require("express");
const PeopleController = require("../controllers/PeopleController");

const router = Router();

router.get("/pessoas", PeopleController.getAllPeople);

module.exports = router;
