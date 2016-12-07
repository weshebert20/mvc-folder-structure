# MVC App Organization

Remeber [How HTTP/MVC is like a plane](https://github.com/den-wdi-2/mvc-intro)? We're going to take this one step further and build a cargo plane MVC app from scratch! 

## Fork this repo

The Starter Code in this repo is a modified version of the Solution Code from the Intro to MVC class. If you test it, you'll see that it works almost identically. To replicate:

1.) Open terminal and `cd` to the root of `starter code`.
2.) Run `Mongod` to start your Mongo Test DV.
3.) Open a new terminal tab and run `nodemon server.js` to start your localhost sever.
4.) Open ANOTHER new terminal tab and run `mongo` - this will open the Mongo CLI.

You can now go to [http://localhost:3000/cargo/new](http://localhost:3000/cargo/new) to add new cargo to "ship" to your database. When you hit submit, you are directed to a page that lists that item.

This is cool, but its NOT the way to set up an MVC app. All of our main functions are grouped in the server.js file! In a perfect world, a server.js file has only server information. In fact, every piece of code in our app has a special place to live, based on best practices. These are a standardized set of name conventions adopted by developers in order to make it easier to jump into a project without much spinup time.

This is akin to every car having the same basic deisgn - steering is conducted with a wheel, shifting gears are next to the steering wheel or in the center console, pedals are on the floor. Because these relatively large functions remain exactly the same across all cars, we can better focus our attention on the nuances of each make and model - like accelartion, handling, and so forth. 

![Do not attempt to drive this car](https://www.wired.com/wp-content/uploads/2014/12/IMG_21731.jpg)

## Reconstruction

Throughout this lab we are now going to reconstruct our cargo app based on MVC best practices. By the end, we should have a functional MVC app that delivers are retrieves cargo via our metaphorical cargo plane.

