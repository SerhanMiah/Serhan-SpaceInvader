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


  //?------------ Variable for inplay ---------------------------------------
  let score = 0
  let highScore = 0
  let lives = 3

  //?------------ music Positions --------------------------------------


  let invaderMovement = 1 //! this is so I can move the array elements 

  let invadersId //! indivdiaul invader id used to clear timeout intervals

  let alienInvaderDestoryed = [] //? aliens removed after hit will return an empty array

  let playerLocation = 90

  let laserPosition = playerLocation //? this will make the position of player be the same as laser position global laserPosition

  let laserID //! to clear the interval for the laser 'pew, pew, pew' 

  let rightSide = true // boolean operative for true 
  // let playSound = () => new Audio('Serhan-SpaceInvader/assets/spaceinvaders1.mpeg').play()

  let alienArray = []
  // allien position start! 
  //  current position 
  // ! allienarray = array.from - new array 

  let alienArrayPosition = []

  // ! position of the invaders the positon of the array 




  //!-------------------- Elements -----------------------------------------

  const start = document.querySelector('#start')
  const reset = document.querySelector('#reset')
  const highScoreDisplay = document.querySelector('#high-score')
  console.log(highScoreDisplay)
  const scoreDisplay = document.querySelector('#score-display')
  // const playerLife = document.querySelector('#lives-display')
  const whoWins = document.querySelector('.out-come')
  const buttonPlay = document.getElementById('myBtn')
  const audio = document.getElementById('myAudio')




  //!------------ inplay Elements -----------------------------------------
  // highScoreDisplay.innerHTML = getHighScore()
  // ! start game button 
  function startGame() { // Done Start Button
    alienArray = [1, 2, 3, 4, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 21, 22, 23, 24, 25, 26, 27]
    alienArrayPosition = Array.from(alienArray)
    alienInvaderDestoryed = []

    clearInterval(invadersId)
    removeInvaders()
    removePlayer()
    score = 0
    scoreDisplay.innerHTML = score
    // lives = 3
    // livesDisplay.innerHTML = "❤️".repeat(lives)
    // start.innerText = 'Restart'
    invadersId = setInterval(() => {
      player() // add player
      // spaceInvadersPosition()
      moveInvader()

      // ! an after image of the start game 

    }, 1000)

  }

  function resetBtn() {
    removeInvaders()

    score = 0
    scoreDisplay.innerHTML = score

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


  function spaceInvaders() {
    for (let i = 0; i < alienArray.length; i++) {
      if (!alienInvaderDestoryed.includes(i)) {
        cells[alienArray[i]].classList.add('invader')
      }

    }
  }

  function removeInvaders() {

    cells.forEach(cell => cell.classList.remove('invader'))

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
      if (alienArray[index] >= (cells.length - width)) {
        whoWins.innerHTML = 'LOSER! Game OVER'
        // console.log('game over')
        clearInterval(invadersId)
      }
    }

    // ! need to add this somewhere!?



    // hitPoints()

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
    let laserPosition = playerLocation // laser position 
    let laserID // clear the invterval 
    // let testInterval

    function moveMissile() {

      console.log('moveMissile')

      // clearInterval(laserID)
      // ! not checking if the width 
      // ! check if the cells exist 
      // ? if statement to check if it is valid stop the interval  - if not 
      // ! Anything that contain invader will remove laser, remove invader and add the destruction 
      // ? if statement to check if it is valid stop the interval  - if not 
      // ! if test -= width 
      // ? 
      // ! that works finally! 
      // clearInterval(invadersId)
      cells[laserPosition].classList.remove('laser')

      if (laserPosition >= width) {
        laserPosition -= width
        cells[laserPosition].classList.add('laser')
      } else {
        console.log('stop this laser')
        clearInterval(laserID) // stop animating once its gone out of the game
      }

      if (cells[laserPosition].classList.contains('invader')) {
        cells[laserPosition].classList.remove('laser')
        cells[laserPosition].classList.remove('invader')
        cells[laserPosition].classList.add('destruction')

        setTimeout(() => cells[laserPosition].classList.remove('destruction'), 100)

        // ! add effects here
        clearTimeout(laserID)

        const alienGone = alienArray.indexOf(laserPosition)
        alienInvaderDestoryed.push(alienGone)
        if (alienInvaderDestoryed.length === alienArray.length) {
          whoWins.innerHTML = 'YOU WIN'
          clearInterval(invadersId)
        }
        hitPoints()

        // ! clear laser ID  inside the if statement 
        // it works seperate function yippie
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




  buttonPlay.addEventListener('click', function () {
    if (audio.paused) {
      audio.play()
      // button.innerHTML = "Pause";
    } else {
      audio.pause()
      // button.innerHTML = "Play";
    }


  })

  function hitPoints() {
    score += 100
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