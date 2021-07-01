const getDb = require('../database').getDb

exports.getStats = (req, res, next) => {
  const queries = {
    teamAge () {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $group: {
            _id: "$team",
            "total age": { $sum: "$age" }
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          "total age": "$total age"
          }
        }
      ])
      .sort({"total age": -1})
      .toArray()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err);
      });
    },

    averageAge() {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $group: {
            _id: "$team",
            "average age": { $avg: "$age" }
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          "average age": { $round: ["$average age", 1]}
          }
        }
      ])
      .sort({"average age": -1})
      .toArray()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err);
      });
    },

    combinedMarketValue() {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $group: {
            _id: "$team",
            "value": { $sum: "$value"}
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          value: { $round: [ "$value", 1 ] }
          }
        }
      ])
      .sort({value: -1})
      .toArray()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err);
      });     
    },

    averageValue() {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $group: {
            _id: "$team",
            "average value": { $avg: "$value" }
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          "average value": { $round: [ "$average value", 1 ] }
          }
        }
      ])
      .sort({"average value": -1})
      .toArray()
      .then(result => {
        res.send(result) 
      })
      .catch(err => {
        console.log(err);
      });
    },

    mostDefenders() {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $match: {
            position: "DF"
          }
        },
        {
          $group: {
            _id: "$team",
            "defenders": { $sum: 1}
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          defenders: "$defenders"
          }
        }
      ])
      .sort({defenders: -1})
      .toArray()
      .then(result => {
        res.send(result)
      })
      .catch(err => {
        console.log(err);
      }); 
    },

    mostForwards() {
      const db = getDb();
      db.collection('players')
      .aggregate([
        {
          $match: {
            position: "FW"
          }
        },
        {
          $group: {
            _id: "$team",
            "forwards": { $sum: 1}
          }
        },
        { 
          $project: {  
          _id: 0,
          team: "$_id",
          forwards: "$forwards"
          }
        }
      ])
      .sort({forwards: -1})
      .toArray()
      .then(result => {

        res.send(result)
      })
      .catch(err => {
        console.log(err);
      });
    }
  }
  
  queries[req.body.stat]();
} 