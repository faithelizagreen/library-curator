const Sequelize = require('sequelize');
const { Book,Reader,Favorite } = require('../../models');
const router = require('express').Router();
const Op = Sequelize.Op

router.get