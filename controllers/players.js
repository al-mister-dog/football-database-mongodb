const Player = require('../models/player');

exports.savePlayer = (req, res, next) => {
 const name = req.body.name;
 const team = req.body.team;
 const value = req.body.value;
 const id = req.body.id;
 const player = new Player(
   name,
   team,
   value,
   id,
 );
 player.save()
   .then(result => {
     res.send(result);
   })
   .catch(err => {
     console.log(err);
   });
}

exports.getData = (req, res, next) => {
  if (req.body.teamName === '') {
    Player.getData()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    const teamName = req.body.teamName
    Player.getDataByTeam(teamName)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
  }
}

exports.insertMany = (req, res, next) => {
  Player.insertMany([arr])
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.log(err);
  });
}

exports.filterOne = (req, res, next) => {
  const field = req.body.field
  const value = req.body.value
  const query = {[field]: value}
  
  if (req.body.teamName === '') {
    Player.filter(query)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    const teamName = req.body.teamName
    query.team = teamName
    Player.filterByTeam(query)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });   
  }
}

let queryObject = {}
exports.filterMany = (req, res, next) => {
  const field = req.body.field
  const value = req.body.value
  let query;
  if (req.body.query === '') {
    queryObject = {[field]: value}
    query = {[field]: value}
  } else {
    queryObject[field] = value
    query = queryObject
  }
  
  if (req.body.teamName === '') {
    Player.filter(query)
    .then(result => {
      res.send({
        result: result,
        query: query
      })
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    const teamName = req.body.teamName
    query.team = teamName
    console.log(query)
    Player.filterByTeam(query)
    .then(result => {
      res.send({
        result: result,
        query: query
      })
    })
    .catch(err => {
      console.log(err);
    });
  }
}

exports.sort = (req, res, next) => {
  const field = req.body.field
  const direction = req.body.direction === true ? 1: -1

  if (req.body.teamName === '') {
    Player.sort(field, direction)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    const team = req.body.teamName
    Player.sortByTeam(team, field, direction)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  }
  
} 

exports.sortFiltered = (req, res, next) => {
  const field = req.body.field
  const value = req.body.value
  const query = {[field]: value}
  const direction = req.body.direction === true ? 1: -1
  const fieldToSort = req.body.fieldToOrderBy

  if (req.body.teamName === '') {
    Player.sortFiltered(query, direction, fieldToSort)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    const teamName = req.body.teamName
    query.team = teamName
  
    Player.sortFilteredByTeam(query, direction, fieldToSort)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  }
}

exports.sortManyFiltered = (req, res, next) => {
  const direction = req.body.direction === true ? 1: -1
  const fieldToSort = req.body.fieldToOrderBy
  const query = queryObject

  if (req.body.teamName === '') {
    Player.sortFiltered(query, direction, fieldToSort)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  } else {
    query.team = req.body.teamName;
    Player.sortFilteredByTeam(query, direction, fieldToSort)
    .then(result => {
      console.log(result)
      res.send(result)
    })
    .catch(err => {
      console.log(err);
    });
  }
}

exports.getAverageAge = (req, res, next) => {
  Player.getAverageAge()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getCombinedAge = (req, res, next) => {
  Player.getCombinedAge()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getTotalTeamValue = (req, res, next) => {
  Player.getTotalTeamValue()
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}

exports.getMostDefenders = (req, res, next) => {
  Player.getMostDefenders() 
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    console.log(err);
  });
}