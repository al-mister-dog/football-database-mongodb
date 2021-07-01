const Team = require('../models/team')

exports.insertTeams = (req, res, next) => {
  Team.insertMany([])
  .then(result => {
    res.send({success: true});
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getTeams = (req, res, next) => {
  Team.getTeams(req.params.selectedLeague)
  .then(result => {
    console.log(result);
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getTeam = (req, res, next) => {
  const team = req.params.selectedTeam
  console.log(team)
  Team.getTeam(team)
  .then(result => {
    console.log(result);
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}