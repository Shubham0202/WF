
const EventEmitter = require('events');


const eventEmitter = new EventEmitter();


function onGreet(name) {
    console.log(`Hello, ${name}! Welcome to the event-driven application.`);
}
function onFarewell(name) {
    console.log(`Goodbye, ${name}! See you next time.`);
}


eventEmitter.on('greet', onGreet);


eventEmitter.on('farewell', onFarewell);


console.log("Main loop is running. Listening for events...");


setTimeout(() => {
    eventEmitter.emit('greet', 'Alice');
}, 1000); // Trigger after 1 second


setTimeout(() => {
    eventEmitter.emit('farewell', 'Alice');
}, 3000); // Trigger after 3 seconds

