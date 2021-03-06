# Simon Game - Javascript

## This project is inspired by the project brief given at FreeCodeCamp.org: 
## https://www.freecodecamp.org/challenges/build-a-simon-game


### Currently resdesigning to make more aesethetically pleasing! 
- I'm wanting to slightly design the interface to make it a little bit more pleasant on the eyes. Especially as its going onto the portfolio. This will most likely come in the form of using SVG. 


### The user stories that were created for the project were as follows:
- I am presented with a random series of button presses.
- Each time I input a series of button presses correctly, I see the same series of button presses but with an additional step.
- I hear a sound that corresponds to each button both when the series of button presses plays, and when I personally press a button.
- If I press the wrong button, I am notified that I have done so, and that series of button presses starts again to remind me of the pattern so I can try again.
- I can see how many steps are in the current series of button presses.
- If I want to restart, I can hit a button to do so, and the game will return to a single step.
- I can play in strict mode where if I get a button press wrong, it notifies me that I have done so, and the game restarts at a new random series of button presses.
- I can win the game by getting a series of 20 steps correct. I am notified of my victory, then the game starts over.

#### This project was originally created in Codepen and has been migrated to Git, original Codepen here: https://codepen.io/SpaceBiscuit/full/BYqmmj/

##### Known bugs:
- Requires changing to be fully responsive with mobile phones as it displays very small. Will work on this on the date: 14/05/2018

- Resetting the game mid-sequence will cause the sequence to still play. Will checkout a branch and attempt to fix this later on

- ~~While there's a check to make sure that the same color isn't added twice in a row, it will sometimes happen and only flash the color once instead of twice (E.g. Yellow Yellow will only flash Yellow once). This confuses users and isn't very user friendly. Will create a branch to fix it.~~  Fixed!


