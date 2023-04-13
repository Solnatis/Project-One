# Project-One
Project-One
ENTER THE TEMPLE

PROJECT DESCRIPTION

welcome to our game! The name of our game is called "Enter the temple" its a game based on the adventure that the user picks. Here the user will be able to choose multiple options and play the game according to how the user picks the adventure. The user that wil choose the correct adventure will be able to win the game. The application was created with HTML, CSS and JavaScript. The CSS framework we used was from RPGUI. While using the framework from RPGUI we had multiple challanges icluding not being able to scroll, how we fixed that was by going to the HTML and adding overflow to be auto making the justify contents space between and we made everything to flex boxes. we created a main game play template and renderd room objects into it. To render this room objects we had to create connections from one object to the next. the connections we used were entry and option pathways. If the option from one object matched the entry of anoter object then the page would render the entry object. we used click events to handle option selection. some options brought you to a trap room that would display a riddle fetch from the riddle API. one of the challanges that we faced was selecting the right objects from a list using the click event. To solve this we stored all the objects into an array and iterated over the array. Once we found the correct match we saved the object into  a room variable and passed that room variable into our render function. Another challange we faced was loading the end game screen with its proper explanation. Since the end game screen had multiple entry pathways each gameover scenario had to be unique. This challange was espacially difficult due to the fact that the main game play screen and end game screen werre separate HTML documents with their own script files. Our solution was to create an array of current and previous objects and store the array into local storage. By utilizing local storage, both script files were able to communicate with one another. Each member of our group was able to take on specific taskscreated within our kanban board. Towards the end on our de-bugging phase much of the code was created through pair programming.

HOW TO USE

TO use the game, the user can start the adventure button which will start the game and from there scroll down to the option to enter the game, if so the USER will be prompted to an option of the room they want their adventure to begin from. Each room has an option that can either take the USER to the next room which is the safe room in which the USER gets asked another question , the trap room in which the USER gets asked a riddle and if they get the riddle right they get to the safe room and continue to choose the next adventure and will be a step closer to victory.

Credits

This game was a team effort and was built by TEAM 7 built and developed by: Edward-john Muna = https://github.com/bear-muna Birhanu Mengistu = https://github.com/linotmike Ashtin Betts = https://github.com/Solnatis


Links Deployed page: https://solnatis.github.io/Project-One/