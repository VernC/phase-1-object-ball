function gameObject(){
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          'number': 0, 'shoe': 16, 'points': 22, 'rebounds': 12, 'assists': 12, 'steals': 3, 'blocks': 1, 'slamDunks': 1
        },
        'Reggie Evans': {
          'number': 30, 'shoe': 14, 'points': 12, 'rebounds': 12, 'assists': 12, 'steals': 12, 'blocks': 12, 'slamDunks': 7
        },
        'Brook Lopez': {
          'number': 11, 'shoe': 17, 'points': 17, 'rebounds': 19, 'assists': 10, 'steals': 3, 'blocks': 1, 'slamDunks': 15
        },
        'Mason Plumlee': {
          'number': 1, 'shoe': 19, 'points': 26, 'rebounds': 12, 'assists': 6, 'steals': 3, 'blocks': 8, 'slamDunks': 5
        },
        'Jason Terry': {
          'number': 31, 'shoe': 15, 'points': 19, 'rebounds': 2, 'assists': 2, 'steals': 4, 'blocks': 11, 'slamDunks': 1
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise','Purple'],
      players: {
        'Jeff Adrien': {
          'number': 4, 'shoe': 18, 'points': 10, 'rebounds': 1, 'assists': 1, 'steals': 2, 'blocks': 7, 'slamDunks': 2
        },
        'Bismak Biyombo': {
          'number': 0, 'shoe': 16, 'points': 12, 'rebounds': 4, 'assists': 7, 'steals': 7, 'blocks': 15, 'slamDunks': 10
        },
        'DeSagna Diop': {
          'number': 2, 'shoe': 14, 'points': 24, 'rebounds': 12, 'assists': 12, 'steals': 4, 'blocks': 5, 'slamDunks': 5
        },
        'Ben Gordon': {
          'number': 8, 'shoe': 15, 'points': 33, 'rebounds': 3, 'assists': 2, 'steals': 1, 'blocks': 1, 'slamDunks': 0
        },
        'Brendan Haywood': {
          'number': 33, 'shoe': 15, 'points': 6, 'rebounds': 12, 'assists': 12, 'steals': 22, 'blocks': 5, 'slamDunks': 12
        },
      }            
    }
  }
}
// Calling gameObject on the global scale
const game = gameObject()
// Calling players on the global scale 
const players = playersObject()
//Calling both teams on a global scale
const teams = Object.values(game)

const allShoes = allShoeSizes()

const allPoints = allPlayerPoints()

function playersObject() {
  return {...game.home.players, ...game.away.players}
}

function allPlayerPoints(){
  const stats = Object.values(players)
  return stats.map(stat => stat.points)
}
console.log('all points', allPlayerPoints())

//console.log('players from both teams', playersObject())
//-----------------------------------
//Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
function numPointsScored (playerInput) {
  return players[playerInput].points
}
console.log('Jeff Adrien points scored', numPointsScored('Jeff Adrien'))
//----------------------------------------
//Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player. 
function shoeSize (playerInput) {
  return players[playerInput].shoe
}
console.log('Ben Gordon shoe size', shoeSize('Ben Gordon'))
//How would we build an array of all the players shoe sizes
function allShoeSizes(){
  const stats = Object.values(players)
  return stats.map(stat => stat.shoe)
}
console.log('all shoe sizes', allShoeSizes())
//------------------------------------
//Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
function teamColors (teamName) {
  return findByTeamName(teamName).colors
}
function findByTeamName(teamName){
  return teams.find(team => team.teamName === teamName)
}
console.log('Hornets team colors', teamColors("Charlotte Hornets"))
//----------------------------------------------
//Build a function, teamNames, that operates on the game object to return an array of the team names.
// function teamNames() {
//   const bothTeams = Object.values(teams)
//   return bothTeams.map(both => both.teamName)
// } 
// both work
function teamNames() {
  return teams.map(team => team.teamName)
}
console.log('both team names', teamNames())
//--------------------------------------------------
//Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
function playerNumbers(teamName) {
  for(const team of teams){
    if (team.teamName === teamName){
      let stats = Object.values(team.players)
      return stats.map(stat => stat.number) 
    }
  }
}
console.log('Brooklyn Nets jersey numbers', playerNumbers('Brooklyn Nets'))
//-------------------------------------------------
//Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats.
function playerStats(playerName){
  return players[playerName]
}
console.log('Brendan Haywood stats', playerStats("Brendan Haywood"))
//---------------------------------------------
//Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
    //First, find the player with the largest shoe size
    //Then, return that player's number of rebounds
    //Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

const bigFeet = Math.max(...allShoes)
// this is showing me that the person with the biggest shoe size is size 19

function bigShoeRebounds(){
  for (const playerKey in players) {
    const playerObj = players[playerKey] // iterate through all player stats
    // console.log('All Players Stats', playerObj)
    const playerShoe = playerObj.shoe // iterate through all player shoes
    // console.log(playerShoe)
    if (playerShoe === bigFeet){ // checking shoes size with biggest size
      return players[playerKey].rebounds //return that player rebounds
    }
  }
}
console.log('Rebounds of player with biggest feet', bigShoeRebounds())

// //---------------Bonus Questions---------------
// //Define functions to return the answer to the following questions:
//   //Which player has the most points? Call the function mostPointsScored.

// const mostPoints = Math.max(...allPoints)
// console.log(mostPoints)
// //   // this is showing me that the person with the biggest shoe size is size 19
// function mostPointsScored(){
//  for (const )
//   for (const playerKey in players) {
//     const playerObj = players[playerKey] // iterate through all player stats
//     console.log('All Players Stats', playerObj)
//     const playerPoints = playerObj.points // iterate through all player shoes
//     console.log(playerPoints)
//     if (playerPoints === mostPoints){ // checking shoes size with biggest size
//       return players //return that player rebounds
//     }
//   }
// }
// console.log('Player with most points', mostPointsScored())

//   //Which team has the most points? Call the function winningTeam.

//   //Which player has the longest name? Call the function playerWithLongestName.

// //----------------Super Bonus-------------------
//Write a function that returns true if the player with the longest name had the most steals. Call the function doesLongNameStealATon.







// //=======================================================================
// //-----------------------------------------------------------------------
// //=======================================================================


// function gameObject(){
//   return {
//     home: {
//       teamName: 'Brooklyn Nets',
//       colors: ['Black', 'White'],
//       players: {
//         'Alan Anderson': {
//           'number': 0, 'shoe': 16, 'points': 22, 'rebounds': 12, 'assists': 12, 'steals': 3, 'blocks': 1, 'slamDunks': 1
//         },
//         'Reggie Evans': {
//           'number': 30, 'shoe': 14, 'points': 12, 'rebounds': 12, 'assists': 12, 'steals': 12, 'blocks': 12, 'slamDunks': 7
//         },
//         'Brook Lopez': {
//           'number': 11, 'shoe': 17, 'points': 17, 'rebounds': 19, 'assists': 10, 'steals': 3, 'blocks': 1, 'slamDunks': 15
//         },
//         'Mason Plumlee': {
//           'number': 1, 'shoe': 19, 'points': 26, 'rebounds': 12, 'assists': 6, 'steals': 3, 'blocks': 8, 'slamDunks': 5
//         },
//         'Jason Terry': {
//           'number': 31, 'shoe': 15, 'points': 19, 'rebounds': 2, 'assists': 2, 'steals': 4, 'blocks': 11, 'slamDunks': 1
//         },
//       },
//     },
//     away: {
//       teamName: 'Charlotte Hornets',
//       colors: ['Turquoise','Purple'],
//       players: {
//         'Jeff Adrien': {
//           'number': 4, 'shoe': 18, 'points': 10, 'rebounds': 1, 'assists': 1, 'steals': 2, 'blocks': 7, 'slamDunks': 2
//         },
//         'Bismak Biyombo': {
//           'number': 0, 'shoe': 16, 'points': 12, 'rebounds': 4, 'assists': 7, 'steals': 7, 'blocks': 15, 'slamDunks': 10
//         },
//         'DeSagna Diop': {
//           'number': 2, 'shoe': 14, 'points': 24, 'rebounds': 12, 'assists': 12, 'steals': 4, 'blocks': 5, 'slamDunks': 5
//         },
//         'Ben Gordon': {
//           'number': 8, 'shoe': 15, 'points': 33, 'rebounds': 3, 'assists': 2, 'steals': 1, 'blocks': 1, 'slamDunks': 0
//         },
//         'Brendan Haywood': {
//           'number': 33, 'shoe': 15, 'points': 6, 'rebounds': 12, 'assists': 12, 'steals': 22, 'blocks': 5, 'slamDunks': 12
//         },
//       }            
//     }
//   }
// }

// // Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
// // Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function
// //   //------------Original Code-----------
// // function numPointsScored (playerInput) {
// //   const game = gameObject()
// //   for (const gameKey in game) { // iterate through teams (home, away)
// //     const teamObj = game[gameKey]
// //       const playerObj = teamObj.players
// //       for (const playerKey in playerObj) { // iterate through players
// //         if (playerKey === playerInput) { //check to see if player matches function
// //           return playerObj[playerKey].points // return the players points
// //         }
// //       }
// //   }
// // }
// // //----if I kept this code I would have to go through an iteration like this to search for each thing individually. Instead I want to create a way to search through the players without redoing this iteration everytime.

// //
// function homeTeam() {
//   return gameObject().home
// }

// function awayTeam() {
//   return gameObject().away
// }

// function players() {
//   return Object.assign({}, homeTeam().players, awayTeam().players)
// }
// console.log('list of all of the players from both teams', players())

// function bothTeams() {
//   return Object.assign({}, homeTeam(), awayTeam())
// }

// function homeTeamName() {
//    return homeTeam().teamName
// }
// console.log('home team name', homeTeamName())

// function awayTeamName() {
//   return awayTeam().teamName
// }
// console.log('away team name', awayTeamName())

// // console.log('both team names', teamNames())
// //============================================
// // Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
// function numPointsScored (playerInput) {
//   for (const playerName in players())
//     if (playerName === playerInput) {
//       return players()[playerName].points
//     }
// }
// console.log('Gordon number of points', numPointsScored('Ben Gordon'))
// //-----------------------------------------


// //==========================================
// // function players() {
// //   const game = gameObject()
// //   const homePlayers = game.home.players
// //   const awayPlayers = game.away.players
// // }
// //     // can also be written without the two consts as // Object.assign({}, game.home.players, game.away.players)
// //   // can also be written without the empty object // Object.assign(homePlayers, awayPlayers)
// //   // can also be done using a spread operator // const players = {...homePlayers, ...awayPlayers}
// // // This function returns the players points after the player is called.
// // function numPointsScored (playerInput) {
// //   for (const playerName in players()) { //iterate through the players
// //     if (playerName === playerInput) { // check to see if player matches function argument
// //       return players()[playerName].points // return the player's points
// //     }
// //   }
// // }
// //console.log('Gordon number of points', numPointsScored('Ben Gordon'))
// //=============================================
// // Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
// // Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
// function shoeSize (playerInput) {
//   for (const playerName in players()) {
//     if (playerName === playerInput) {
//       return players()[playerName].shoe
//     }
//   }
// }
// console.log('Haywood shoe size', shoeSize('Brendan Haywood'))

// //==============================================
// //  Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
// function teamColors (teamNameGiven) {
//   return bothTeams(teamNameGiven).colors
// }
// console.log('home colors', teamColors('Charlotte Hornets'))
// //==============================================
// // Build a function, teamNames, that operates on the game object to return an array of the team names.
// function teamNames () {
//   return homeTeamName() + ' ' + awayTeamName()
// }

// //===============================================
// // Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
// // function playerNumbers (teamInput) {
// //   return bothTeams(teamInput).number
// // }