function init() {
  // The TASK 
  // ? The player should be able to clear at least one wave of aliens
  // ? The player's score should be displayed at the end of the game

  // ?------------------------- for the grid ----------------------------------
  const width = 10
  const cellCount = width * width // the amount of the cells
  const cells = [] // cells as a grid - individual 
  const grid = document.querySelector('.grid')
  // ! -----------Grid ----------------

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      // cell.innerText = i
      // cell.dataset.index = i
      cells.push(cell)
      grid.appendChild(cell)
    }
  }


  //?------------ Variables Sounds---------------------------------------
  // const audioDestory = new Audio('Serhan-SpaceInvader/assets/explosion.wav')


  //?------------ Variable for inplay ---------------------------------------
  let score = 0
  let lives = 3

  //?------------ music Positions --------------------------------------


  let invaderMovement = 1 //! this is so I can move the array elements 

  let invadersId //! indivdiaul invader id used to clear timeout intervals

  let alienInvaderDestoryed = [] //? aliens removed after hit will return an empty array

  let playerLocation = 94

  let laserPosition = playerLocation //? this will make the position of player be the same as laser position global laserPosition

  let laserID //! to clear the interval for the laser 'pew, pew, pew' 

  let rightSide = true // boolean operative for true 
  // let playSound = () => new Audio('Serhan-SpaceInvader/assets/spaceinvaders1.mpeg').play()


  //!-------------------- Elements -----------------------------------------

  const start = document.querySelector('#start')
  const reset = document.querySelector('#reset')
  // const highScoreDisplay = document.querySelector('#high-score')
  const scoreDisplay = document.querySelector('#score-display')
  // const playerLife = document.querySelector('#lives-display')
  const soundBtn = document.querySelector('#soundBtn')


  // ! try and get the sound working now hmmm

  // const arrayAliens = Array.from()
  // ! creates an array that is iterable 


  //!------------ inplay Elements -----------------------------------------
  // highScoreDisplay.innerHTML = getHighScore()


  function resetBtn() { //!? It pauses the game okay.
    // ! reset button 
    clearInterval(invadersId)

    removeInvaders()
    player()
    score = 0
    scoreDisplay.innerHTML = 0

    invadersId = setInterval(() => {
      spaceInvaders()
      player()
    }, 100)

  }


  // ! start game button 
  function startGame() { // Done Start Button
    clearInterval(invadersId)
    removeInvaders()
    // removePlayer()
    score = 0
    scoreDisplay.innerHTML = score
    // lives = 3
    // livesDisplay.innerHTML = "❤️".repeat(lives)
    // start.innerText = 'Restart'

    // ! what does this need! 
    // ! need to clear the game first and then add the game
    invadersId = setInterval(moveInvader, 500) //! DO NOT DELETE it activates the 
  }
  //?------------------ Player Section---------------------------------------

  // Add and remove will be useful later


  function player() {
    cells[playerLocation].classList.add('player')
  }

  function removePlayer() {
    cells[playerLocation].classList.remove('player')
  }

  //?----------------Player End ---------------------------------------------

  //!--------------- Invader Section -----------------------------------------

  // ? Alien Position as an ARRAY 
  let alienArray = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27]
  // allien position start! 
  //  current position 
  // ! allienarray = array.from - new array 

  function spaceInvaders() {
    for (let i = 0; i < alienArray.length; i++) {
      if (!alienInvaderDestoryed.includes(i)) {
        cells[alienArray[i]].classList.add('invader')
      }
    }
  }

  function removeInvaders() {
    for (let i = 0; i < alienArray.length; i++) {
      cells[alienArray[i]].classList.remove('invader')
    }
  }

  function moveInvader() {

    const leftInvader = alienArray[0] % width === 0
    const rightInvader = alienArray[alienArray.length - 1] % width === width - 1

    removeInvaders() // first step remove the invader! 

    // ! right side
    if (rightInvader && rightSide) {
      for (let i = 0; i < alienArray.length; i++) {
        alienArray[i] += width + 1
        invaderMovement = -1
        rightSide = false
      }
    }
    // ! left side of the grid
    if (leftInvader && !rightSide) { // booolean operative either right or left 
      for (let j = 0; j < alienArray.length; j++) {
        alienArray[j] += width - 1
        invaderMovement = 1
        rightSide = true
      }
    }

    // ! then looping it again to go with the direction of the invader movement with 

    for (let i = 0; i < alienArray.length; i++) {
      alienArray[i] += invaderMovement
    }

    spaceInvaders()

    if (cells[laserPosition].classList.contains('invader', 'laser')) {
      cells[laserPosition].classList.add('destruction')
      cells[laserPosition].classList.remove('laser')
      clearInterval(invadersId)
    }

    // !losing condition 
    for (let index = 0; index < alienArray.length; index++) {
      if (alienArray[index] > (cells.length - width)) {
        console.log('game over')
        clearInterval(invadersId)
      }
    }

  }


  //?----------Player controller start ---------------------------------------------

  document.addEventListener('keydown', function playerMovement(event) {
    if (event.keyCode === 39) {
      playerRight()
      // need to stop fully top to the right edge maybe add an if statement
      // if width -1? 
    } else if (event.keyCode === 37) {
      playerLeft()
      // need to stop fully top to the right edge maybe add an if statement
    }
  })

  function playerLeft() {
    removePlayer(playerLocation)
    if (playerLocation % width !== 0) {
      playerLocation -= 1
    }
    player(playerLocation)
  }

  function playerRight() {
    removePlayer(playerLocation)
    if (playerLocation % width < width - 1) {
      playerLocation += 1
    }
    player(playerLocation)
  }

  function missiles(e) { //this will add the laser as a function, remove the laser first and then add. I find it an odd way of doing things remove and then add. §
    let test = playerLocation
    let laserID // clear the invterval 
    // let testInterval

    function moveMissile() {

      // clearInterval(laserID)
      // ! not checking if the width 
      // ! check if the cells exist 
      // ? if statement to check if it is valid stop the interval  - if not 
      // ! Anything that contain invader will remove laser, remove invader and add the destruction 
      // ? if statement to check if it is valid stop the interval  - if not 
      // ! if test -= width 
      // ? 
      // ! that works finally! 
      cells[test].classList.remove('laser')

      if (test >= width) {
        test -= width
        cells[test].classList.add('laser')

      }


      // this makes it go up
      // ! add laser sound here I think need to check on how to get this working
      // !? look at making a function to add sound 
      // ? play.audio 


      if (cells[test].classList.contains('invader')) {
        cells[test].classList.remove('laser')
        cells[test].classList.remove('invader')
        cells[test].classList.add('destruction')


        setTimeout(() => cells[test].classList.remove('destruction'), 100)
        // ! add effects here
        laserID = clearTimeout(laserID)

        if (test < width) {

          setInterval(() => cells[test].classList.remove('laser'), 100)
          // clearInterval()
        }

        const alienGone = alienArray.indexOf(test)
        alienInvaderDestoryed.push(alienGone)
        hitPoints()


        // ! clear laser ID  inside the if statement 
        // it works seperate function yippie
        clearInterval(laserID)
      }
    }
    // clearInterval(laserID)
    if (e.keyCode === 38) {
      laserID = setInterval(moveMissile, 100)

    }
  }
  // clearInterval(laserID

  document.addEventListener('keydown', missiles) // event Listener for missiles hahahhahahh


  //?-----Player controller completed  -------------------------------------------


  function hitPoints() {
    score += 1
    scoreDisplay.innerHTML = score
    // getHighScore(hitPoints)
  }

  start.addEventListener('click', startGame)
  reset.addEventListener('click', resetBtn)

  // player function.  ! got to be ordered! 
  createGrid()

  player()
  // spaceInvaders()
  // missiles()
  moveInvader()

}

window.addEventListener('DOMContentLoaded', init)