const router = require("express").Router()
const apiRoutes = require("./api")
const homeRoute = require ("./homeRoute")
const profileRoutes = require("./readerProfile")


router.use("/", homeRoute)
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);


module.exports = router