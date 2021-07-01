const express = require('express');
const router = express.Router();

const playersController = require('./controllers/players')
const teamsController = require('./controllers/teams')
const statsController = require('./controllers/stats')

router.post('/save', playersController.savePlayer)
router.get('/insert-lots', playersController.insertMany)

router.post('/get-data', playersController.getData)
router.post('/sort', playersController.sort)
router.post('/sort-filtered', playersController.sortFiltered)
router.post('/sort-many-filtered', playersController.sortManyFiltered)
router.post('/filter-one', playersController.filterOne)
router.post('/filter-many', playersController.filterMany)

router.use('/insert-teams', teamsController.insertTeams)
router.use('/get-teams/:selectedLeague', teamsController.getTeams)
router.use('/get-team/:selectedTeam', teamsController.getTeam)

router.use('/get-stats', statsController.getStats)
module.exports = router