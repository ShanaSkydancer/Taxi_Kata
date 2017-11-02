'use strict'

var taxi = new Taxi();
var keypress = new KeyPress();

keypress.up(() => {
    if (taxi.closestTrafficLight().is('red')){
        taxi.closestTrafficLight().makeGreen();
    } else if (taxi.closestTrafficLight().is('orange')){
        taxi.closestTrafficLight().makeRed();
    } else if (taxi.closestTrafficLight().is('green')){
        taxi.closestTrafficLight().makeOrange();
    }
})

keypress.down(() => {
    if (taxi.closestTrafficLight().is('red')){
        taxi.closestTrafficLight().makeOrange();        
    } else if (taxi.closestTrafficLight().is('orange')){
        taxi.closestTrafficLight().makeGreen();        
    } else if (taxi.closestTrafficLight().is('green')){
        taxi.closestTrafficLight().makeRed();        
    }
})

keypress.left(() => {
    if (taxi.closestTrafficLight().is('green') || taxi.closestTrafficLight().is('orange')){
        taxi.reverse();
    }
})

keypress.right(() => {
    if (taxi.closestTrafficLight().is('green') || taxi.closestTrafficLight().is('orange')){
        taxi.forward();
    }
})