const router = require("express").Router()
const apiRoutes = require("./api")
const homeRoute = require ("./homeRoute")
const profileRoutes = require("./readerProfile")
const dashboardRoute = require ("./dashboardRoute")



router.use("/", homeRoute)
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/dashboard", dashboardRoute);


module.exports = router