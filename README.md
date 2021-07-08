# Dungeons & Dragons - Character Starter Kit
## Overall flow of the application
### Landing Page:
<img src="https://drive.google.com/uc?export=view&id=1lQGsXtQTRXjcGG9DY4iYq_ecevmYIWDh" width="700" height="350">

* The side panel serves as the navigation pane for the application.
* User will be able to see which page he is currently viewing based on the highlight in the side panel.

### Information Pages:
<img src="https://drive.google.com/uc?export=view&id=12zvnO5PqPdCSDnh-EbiMc1ymJ35gl1Be" width="700" height="350">

* There are currently 2 types of information pages available; Classes and Races. 
* On clicking on any of these items, it will lead to a list of races/ classes available to the user which are handled in different components. 
* Selecting any of the races/ classes will navigate to the details page which would display some of the key information for that respective class/ race.  
  1.  Race details are displayed in Card component from Material UI, clicking on the downward arrow would expand the Card to display additional information which are deemed as non-crucial.
  2.  Class details are displayed in Paper components from Material UI by which each Paper would contain several pieces of information of that group of details.

### Character Simulation Page:
<img src="https://drive.google.com/uc?export=view&id=1Eox4QyMQwUhM2-l35-cfcx97R9H3kV67" width="700" height="350">

* On this page, users can generate their characters to see how the compatibility between the selected race and class before commencing on their journey in the game.
* User can adjust the levels of the characters to see how the class would progress in the game and see latent potential of their chosen class.
* This page can also be used as a "Save-point" for the character as the User plays the game and can freely return to their selection by:
  1. After adjusting the expected level, click on the Submit Button to update the URL.
  2. Copy and pasting the URL would return to the applicable page.

## Thoughts on the Project
### Challenges faced during the project:

#### 1. Choosing the Right API:
The initial choice of API for the project was Age of Empires 2 which I had planned to create a resource planning tool. I had already coded for 3 days but realised that the no-cors error was returning an "opaque" type result which meant that the code was invisible to the Public. I had installed a Moesif extension that fixed the issue locally but had not considered that others could not access it without the extension. Alas, the initial choice was scrapped. 

Because I had made up my mind to do a game that I like, I spent half a day's worth of time on week 5 - Friday, testing 8 other APIs before finalising on Dungeons and Dragons.

#### 2. API data structure turned out to be non-homogeneous:
For the breakdown of the data structure were occasionally non-homogeneous; i.e. expected an Array of Objects turned out to be an Array of Objects of Objects in another.

#### 3. Abrupt introduction of a function is a bad idea:
Similar to the first project, I once again made the same mistake of coding whenever an idea comes to my mind. The Character Simulation was a sudden inspiration on Project Week Wednesday noon while cleaning up the CSS design with Material UI, this resulted in a catastrophy of multiple functions and states meshed up on a single component.

## Further Work and Next Steps

1. Basically to unpack and re-do the catastrophic mess of a component. 
2. To introduce a proper "Save Character" Page where Users can add and remove the characters they have on hand and perhaps add more information to this Character Simulation Page. (This bit of information is just a fraction of the character building in DnD)
3. To practise and fully understand the Reactjs language and structures, I had not used many of the other techniques taught in class and I hope to learn and apply those techniques to this project.

Overall, I enjoyed building this project despite the woes in the early stages and the messy component. I spent a good amount of time practising and learning the usage of React and Material UI, as well as, learning more about the rules in DnD which I spent nearly an entire day on it.
