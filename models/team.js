/**
 * TODOS
 * figure out whether to use a new class
 * or Player class for teams table
 */

getDb = require('../database').getDb
const mongodb = require('mongodb');

class Team {
  constructor (name, imageUrl, league, manager) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.league = league;
    this.manager = manager;
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('teams')
    .find({ }, {projection:{ _id: 0 }})
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }


  static getTeam(selectedTeam) {
    const db = getDb();
    return db.collection('teams')
    .find({name: selectedTeam})
    .toArray()
    .then(result => {
      console.log(result);
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static getTeams(selectedLeague) {
    const db = getDb();
    return db.collection('teams')
    .find({ league: selectedLeague }, {projection:{ _id: 0 }})
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static insertMany(arr) {
    const db = getDb();
    return db.collection('teams')
    .insertMany(arr)
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static getData(teamName) {
    const db = getDb();
    return db.collection('players')
    .find(
      { team: teamName }, 
      {projection:{ _id: 0, team: 0 }})
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static sort(field, direction) {
    const db = getDb();
    return db.collection('players')
    .find({ }, {projection:{ _id: 0 }})
    .sort({ [field]: direction })
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });    
  }

  static sortFiltered(query, direction, fieldToSort) {
    const db = getDb();
    return db.collection('players')
    .find(query, {projection:{ _id: 0 }})
    .sort({ [fieldToSort]: direction })
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }
}

module.exports = Team;