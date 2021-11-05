const router = require("express").Router()
const apiRoutes = require("./api")
const homeRoute = require ("./homeRoute")
const profileRoutes = require("./readerProfile")
const librarian = require("./librarian")



router.use("/", homeRoute)
router.use("/api", apiRoutes);
router.use("/profile", profileRoutes);
router.use("/librarian", librarian)


module.exports = router