function init() {
  // ! Project Requirement 
  //! =========================// The TASK ==============================================================
  // ? The player should be able to clear at least one wave of aliens
  // ? The player's score should be displayed at the end of the game
  // ! ======================================================================================================
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
  // ? ==========================Global Variable =============================================================
  let score = 0
  let highScore = 0
  let lives = 3

  let invaderMovement = 1 //! this is so I can move the array elements 
  let invadersId //! indivdiaul invader id used to clear timeout intervals
  let alienInvaderDestoryed = [] //? aliens removed after hit will return an empty array
  let playerLocation = 94
  let laserPosition = playerLocation //? this will make the position of player be the same as laser position global laserPosition
  let laserID //! to clear the interval for the laser 'pew, pew, pew' 
  let rightSide = true // boolean operative for true 
  // let playSound = () => new Audio('Serhan-SpaceInvader/assets/spaceinvaders1.mpeg').play()


  // ? ====================End Variable =============================================================
  // ! ======================================================================================================

  //!==================================Elements==============================================================
  const start = document.querySelector('#start')
  const reset = document.querySelector('#reset')
  const highScoreDisplay = document.querySelector('#high-score')
  console.log(highScoreDisplay)
  const scoreDisplay = document.querySelector('#score-display')
  // const playerLife = document.querySelector('#lives-display')
  const soundBtn = document.querySelector('#soundBtn')


  //!==================================Execution==============================================================




























  createGrid()





}


window.addEventListener('DOMContentLoaded', init)