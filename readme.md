# Tic Tac Toe.
#### Video Demo:  [YouTube](https://youtu.be/1VTB7sYffOU)
#### Description: A simple tic tac toe game to play with your local friends.
![tictactoe](https://user-images.githubusercontent.com/93187436/179347004-2023b712-f4bd-4d82-9dca-7fac63603fce.JPG)

## Overview
This game is just a basic tic tac toe game where the first player who gets 3 in a row will win the game. I mean you guys must already know how to play this classic game, there’s no need for me to explain it anyway hahaha, but just in case if there’s any of you that don’t know how to play this game, I’ll just put it in there. In this game, you can play a tic tac toe game with your local friends. Disclaimer: you can’t play this game by yourself since I didn’t implement an algorithm / AI for you to play against with. But I might add this feature in the future if I got the time so a lonely people like me can play by just me, myself, and I haha, just kidding. This simple tic tac toe game was build by using pure HTML, CSS, and JavaScript. The reason why I chose to create a simple tic tac toe game as my final project is because I want to dive deep more into the fundamentals before using any frameworks so that I can have a strong grasp of the fundamentals. 

## What I Learned
Here are the things that I learned while creating this project:
### HTML
Create data attribute which is your own custom attribute in HTML. Data attribute always starts with `data-`. Example:
```html
<div id="test" data-first-name="Lindhu" data-last-name="Kusuma" data-cs50></div>
```
If we select this element in JavaScript by saying `const div = document.getElementById(’test’)` and we log the dataset property to our console by saying `console.log(div.dataset)`, the dataset property will return a `DOMStringMap` which is essentially just an object that contains all the custom data attributes of that element such as:
```javascript
{
  cs50: ""
  firstName: "Lindhu"
  lastName: "Kusuma"
}
```
- Notice the property name changed from snake-case to camelCase. This is because in JavaScript object properties are primarily written as camel case. And as Prof. David Malan says, `-` is an arithmetic operator for subtracting in JavaScript.
- `cs50` property has a value of `“”` which is just an empty string since we didn’t specify any value.
In JavaScript, we can access each value of those properties such as:
```javascript
console.log(div.dataset.firstName)
// Lindhu
console.log(div.dataset.lastName)
// Kusuma
```
Then just like in all JavaScript objects, we can add, update and remove properties from an object by using dot (`.`) or bracket (`[]`) notation for adding and updating properties, and  delete keyword for deleting properties from an object which I will not go too in depth here.
This can be useful if you want to separate your CSS selector and your JavaScript selector so you won’t break things up when you altering something in your code. Kyle from Web Dev Simplified has a good [article](https://blog.webdevsimplified.com/2019-10/do-not-use-class-selectors-in-javascript/) on this one.

### CSS
- In animation property, we can set it’s `animation-timing-function` to `steps(n, <jumpterm>)` and the animation will stops `n` times along the animation depends on the `<jumpterm>` used.
- In animation property we can specify the `animation-fill-mode` to `forwards` so the final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes.
- Create animations using `@keyframes`.
- Use pseudo-elements such as `::before` & `::after` to create the typewriter animation.
- Use `linear-gradient` as the value of `background` property to create color gradient.
- Learn how to use CSS Flexbox and CSS Grid.

### JavaScript
- Using multiple DOM traverse methods such as `getElementById()`, `querySelector()`, `querySelectorAll()`.
- Using DOM manipulations to add class, event listener, to an element. We can add a class to element using `.classList.add()`. remove a class from an element using `.classList.remove()`, check if an element has a particular class using `.classList.contains()`, add an event listener to an element using `.addEventListener()`.
- Learned how to use the event object (`e`) to get the element that triggers the event by accessing the `e.target` property.
- Learned how event works in JavaScript. There are 2 phase, capturing and bubbling. So when an event is triggered by a particular element. The capture phase will execute the code from top to bottom through the DOM tree until that element that is triggering the event. After the capturing phase is done, it will switch to a bubbling phase where, it execute the code from bottom to top, bubbles up through the DOM tree. By default, when we use `addEventListener()`, it will set the event to bubbles, so the event will only be triggered in the bubbling phase. We can change this by specifying the third argument in `addEventListeners()` to `{ capture: true }`. So now the event will only be triggered in the capturing phase instead of bubbling phase.
- We can make an event can only be triggered once. We do this by specifying the third argument in `addEventListeners()` to `{ once: true }`. If we want to make an event can be triggered more than once but not all the time, we can just use the `removeEventListener()` method once a certain condition is met. It takes arguments that is the event and the callback function that you want to remove.

Big thanks to Kyle Cook from Web Dev Simplified and Kevin Powell the CSS King for inspiring me to create this project! Also thank you very much for Prof David Malan, Brian Yu, Doug LLoyd, and all of the CS50 stuff for creating such a wonderful course. This course has taught me a lot of lessons. Thank you to Quincy Larson as well for creating a wonderful platform called freeCodeCamp where we can learn a lots of things, I learned a lot from there too, and in fact, I incorporate the penguin project from Responsive Web course into this final project, the penguin at bottom right that you can see there on the page. And yeah, just like how CS50 ends every session, here I'm also going to end it that way. My name is Lindhu or you can just call me Lando. And this was Tic Tac Toe!
