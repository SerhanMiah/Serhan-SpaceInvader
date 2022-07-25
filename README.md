# Serhan-SpaceInvader

General Assembly – 



Project 1 - Space-Invaders

Create a Space Invader game is a fixed shooter in which the player moves a laser cannon horizontally across the bottom of the screen and fires at aliens overhead. The player can only move left or right. The aliens also move from left to right, and also down each time they reach the side of the screen. Once the player has destroyed a wave of aliens, the game starts again. The aim is to achieve the highest score possible before either being destroyed by the aliens or allowing them to reach the planet's surface.

Game link

Insert here : 

https://syztemerror.github.io/Serhan-SpaceInvader/

Overview and Concept:

I had one week to build a grid-based game using JavaScript, HTML and CSS. My own
version of Space-Invaders. I have used the skill-set I learned through the last 3-4 weeks to make the game.

Technologies used

HTML 

•    Header with logo.
•    Grid with Cells 99 cells.
•    Intro, game over and Win overlays with 'start' buttons.
•    Audio element for my background music and sound effects.
•    Favicon to display in the browser tab.





CSS
● Grid using flex-box and grid.
● CSS Animation for the destruction of the space invaders, start and restart buttons and "you win"
● position and absolute

JavaScript
● KeyCode arrow left, arrow right and arrow Up events to move the characters and fire the missiles.
● setInterval to move obstacles.
● Play and pause sounds.
● Click events to start the game and reset the game.

GitHub
•    Deploying the website and using various git’s protocols for the project.

The Approach Taken: 

Day 1 – Psedocode and basic structures 
– As this was my first GA project, I first started planning a quick design using excalidraw. I then input all the key elements, execution and events needed to make the game. 

 

I blocked this out as a visual guide ON what the game will look like. On the first day, my main aim was to have the instructional team leader check me off. I did no coding and stuck to pseudo coding for game. The Key Elements of the game – Moving the player left and right. Moving the Space invaders left and right and get the shooter with the KeyCode UP. 
 

Drawing a template of what the design will eventually look like. This will be the initial step in creating a Space-invader game. Started with the drawing app excalidraw to have a rough idea of what needs to be done. 

Starting the pseudo coding. 

 
Grid Creation 
 

Movement of the player with the keyCode

 


Moving the Aliens 
This was a basic concept on how to move the alien Left and Right using the knowledge I have gained in the player Movement. 




Firing the Gun 

 




•    Create the size - 10 x 10 
•    Make all the shapes inside the image 
•    Add demo enemies to the HTML class list for using for loop to select all the space invaders 
•    The basic template of the key characters (space invaders - aka aliens, shooter, laser, destruction, music)


Day 2 – Div creation and blocking the character’s movement     
•    Character movement and challenges – How to stop the image from going off the Grid 
•    Assigning keycode so that the player can use the arrow keys Left and Right to move the player 

Blocking the grid using a Document EventListener to make a function to move the player 

 






 

Using the array position of 90 will set the character at the bottom of the grid.
Day two plan – moving the tank left and right. 

Creating the function for left and right and setting the event keyCode to access
The player. 

Extra resourses – 

https://www.toptal.com/developers/keycode/table-of-all-keycodes

list all the keyCode 


    

Day 3 - creating the space invaders movement –     
•    Blocking the alien characters with an Array – This was so that I have a start position of the array 
•    Use of CSS and ClassList to loop all the alien characters with a red colour.
•    Moving the character right and left and go down the grid until it reaches the End
•    Methods used – Removing the player and Adding the player one cell at a time 
•    Boolean operative this is so that the player moving right will be true and when it moves to the left it will be known as a negative. It was easier to move the player Right than left but ran into some glitches when the player was at the edge of the grid/cells
•    Go the movement of the Character to the end but ran into trouble on set intervals as the Alien characters were going off the grid. 
•    The solution on how to fix this was paused on day three due to it was something I could figure out straight away. 



Day 4 - creating the shooting mechanic and clearing the intervals
•    Making the shooter mechanic
•    This to consider when making the shooter
•    keycode UP to trigger the shooter to go up 
•    first thing is to look at the grid/cells and remove/add classList shooter to the Game 
•    I started by creating two functions–
o    The move missile function will hold the main and have an event within the parameter to fire
o    Set another keycode to hole the function up! If the user shoots up then the missile will fire.
o    Inside the move Missile function, another function will be the fire Missile. 
o    Add more! 





Day 5 – Get the shooter to disappear the alien! 

● This was tricky as I had problems clearing the intervals of the shooter and spent a great deal of time trying to clear the interval from disappearing going through notes and asking the lecturer for hints and help.
 

Day 6 – Add the buttons, Start, reset and music to the game and more design 
        
-    This was an easy process as it only required three buttons start, reset and play space invader soundtrack. I also added CSS animation and keystroke music for when the invader gets destroyed and player shoots  











Key learnings:
● Learned how to use Flex-box.
● Learned how to use CSS animation.
● Learned how to create a pop-up using JavaScript, HTML and CSS.
● Learned how to use play() and pause() functions to control the audio.

Challenges:
● Moving the space invaders left and right and then going back towards the end of the game.
● Getting the right sound effect 
● Making the obstacles move at a higher speed after each round.

Future improvements:
● Make it more presentable, caught covid during the first project week and was unable to work 100% on the task. 
•    Make it more presentable
•    Get the space invader to shoot was unable to complete this
•    Get the high score 

Bugs:
● There are some obvious bugs, I would like to address and will be revisiting the game as soon as I am better. 

