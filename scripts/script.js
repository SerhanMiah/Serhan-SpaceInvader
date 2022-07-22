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
      cells.push(cell)
      grid.appendChild(cell)
    }
  }

  let score = 0


  let invaderMovement = 1 //! increment the array position
  let invadersId //! indivdiaul invader id used to clear timeout intervals
  let alienInvaderDestoryed = [] //? aliens removed after hit will return an empty array
  let playerLocation = 90
  let laserPosition = playerLocation //? this will make the position of player be the same as laser position global laserPosition
  let laserID //! to clear the interval for the laser 'pew, pew, pew' 
  let rightSide = true

  let alienArray = []
  let alienArrayPosition = []
  //!-------------------- Elements -----------------------------------------

  const start = document.querySelector('#start')
  const reset = document.querySelector('#reset')
  const scoreDisplay = document.querySelector('#score-display')
  const whoWins = document.querySelector('.out-come')
  const buttonPlay = document.getElementById('myBtn')
  const audio = document.getElementById('myAudio')
  const explosion = document.getElementById('explosion')
  explosion.volume = 0.2
  const shooterSound = document.getElementById('shooter')
  shooterSound.volume = 0.2

  //!------------ execution Elements -----------------------------------------

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

    invadersId = setInterval(() => {
      player() // add player
      moveInvader()
    }, 1000)

  }

  function resetBtn() {
    removeInvaders()

    whoWins.innerHTML = ''
    score = 0
    scoreDisplay.innerHTML = score
  }


  //?------------------ Player Section---------------------------------------

  function player() {
    cells[playerLocation].classList.add('player')
  }

  function removePlayer() {
    cells[playerLocation].classList.remove('player')
  }

  //?----------------Player End ---------------------------------------------

  function spaceInvaders() {
    for (let i = 0; i < alienArray.length; i++) {
      if (!alienInvaderDestoryed.includes(i)) {
        cells[alienArray[i]].classList.add('invader')
      }

    }
  }

  function removeInvaders() {
    cells.forEach(cell => cell.classList.remove('invader', 'destruction'))
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
      if (alienArray[index] >= (cells.length - (width - 1))) {
        whoWins.innerHTML = 'LOSER! Game OVER'
        // console.log('game over')
        clearInterval(invadersId)
      }
    }
  }

  //?----------Player controller Section ---------------------------------------------

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

      cells[laserPosition].classList.remove('laser')

      if (laserPosition >= width) {
        laserPosition -= width
        cells[laserPosition].classList.add('laser')
      } else {

        clearInterval(laserID)
      }

      if (cells[laserPosition].classList.contains('invader')) {
        cells[laserPosition].classList.remove('laser')
        cells[laserPosition].classList.remove('invader')
        cells[laserPosition].classList.add('destruction')

        setTimeout(() => cells[laserPosition].classList.remove('destruction'), 500)
        // ! explosion sound effects effects 
        explosion.play()


        clearTimeout(laserID)

        const alienGone = alienArray.indexOf(laserPosition)
        alienInvaderDestoryed.push(alienGone)
        if (alienInvaderDestoryed.length === alienArray.length) {
          whoWins.style.color = 'red'
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
      // ! shooter sound effects effects 

      shooterSound.play()


    }
  }
  // clearInterval(laserID

  document.addEventListener('keydown', missiles) // event Listener for missiles hahahhahahh


  //?-----Player controller completed  -------------------------------------------


// ! Music button =================================================================
  buttonPlay.addEventListener('click', function () {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
  })
// ! Hit Points  =================================================================
  function hitPoints() {
    score += 100
    scoreDisplay.innerHTML = score

  }

  start.addEventListener('click', startGame)
  reset.addEventListener('click', resetBtn)

  createGrid()

  player()

  moveInvader()

}

window.addEventListener('DOMContentLoaded', init)