const router = require("express").Router()
const apiRoutes = require("./api")
const homeRoute = require ("./homeRoute")
const profileRoutes = require("./readerProfile")
const librarian = require("./librarian")
const dashboardRoute = require ("./dashboardRoute")
const eventRoute = require('./eventsRoute')



router.use("/", homeRoute)
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/librarian", librarian)
router.use("/dashboard", dashboardRoute);
router.use("/events",eventRoute)



module.exports = router