//todos
// change label from _id to desired label

getDb = require('../database').getDb
const mongodb = require('mongodb');

class Player {
  constructor(name, team, position, value, id) {
    this.name = name;  
    this.team = team;
    this.position = position;
    this.squadNumber = squadNumber;
    this.nation = nation
    this.value = value;  
    this._id = id ? new mongodb.ObjectId(id) : null;
  }
  
  save() {
    const db = getDb();
    return db.collection('players')
    .insertOne(this)
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static insertMany(arr) {
    console.log('hello from model')
    const db = getDb();
    return db.collection('players')
    .insertMany(arr)
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static fetchAll() {
    const db = getDb();
    return db.collection('players')
    .find()
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static getData() {
    const db = getDb();
    return db.collection('players')
    .find({ }, {projection:{ _id: 0 }})
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static filter(query) {
    const db = getDb();
    return db.collection('players')
    .find(query, {projection:{ _id: 0 }})
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



  static getDataByTeam(teamName) {
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

  static filterByTeam(query) {
    const db = getDb();
    return db.collection('players')
    .find(query, {projection:{ _id: 0, team: 0 }})
    .toArray()
    .then(result => {
      console.log(result)
      return result
    })
    .catch(err => {
      console.log(err);
    });
  }

  static sortByTeam(teamName, field, direction) {
    const db = getDb();
    return db.collection('players')
    .find({ team: teamName }, {projection:{ _id: 0, team: 0 }})
    .sort({ [field]: direction })
    .toArray()
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err);
    });    
  }

  static sortFilteredByTeam(query, direction, fieldToSort) {
    const db = getDb();
    return db.collection('players')
    .find(query, {projection:{ _id: 0, team: 0 }})
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

module.exports = Player;