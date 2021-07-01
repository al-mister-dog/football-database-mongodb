const getDb = require('../database').getDb

exports.getData = () => {
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

exports.filter = (query) => {
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

exports.sort = (field, direction) => {
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

exports.sortFiltered = (query, direction, fieldToSort) => {
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



exports.getDataByTeam = (teamName) => {
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

exports.filterByTeam = (query) => {
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

exports.sortByTeam = (teamName, field, direction) => {
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

exports.sortFilteredByTeam = (query, direction, fieldToSort) => {
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

exports.getAverageAge = () => {
  const db = getDb();
  return db.collection('players')
  .aggregate([
    {
      $group: {
        _id: "$team",
        "average age": { $avg: "$age" }
      }
    }
  ])
  .sort({"average age": -1})
  .toArray()
  .then(result => {
    return result
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getCombinedAge = () => {
  const db = getDb();
  return db.collection('players')
  .aggregate([
    {
      $group: {
        _id: "$team",
        "total age": { $sum: "$age" }
      }
    }
  ])
  .sort({"total age": -1})
  .toArray()
  .then(result => {
    console.log(result);
    return result
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getTotalTeamValue = () => {
  const db = getDb();
  return db.collection('players')
  .aggregate([
    {
      $group: {
        _id: "$team",
        "value": { $sum: "$value"}
      }
    }
  ])
  .sort({value: -1})
  .toArray()
  .then(result => {
    console.log(result);
    return result
  })
  .catch(err => {
    console.log(err);
  });
}