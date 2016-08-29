# Event

Event is a JavaScript library providing observer pattern implementation.

## Examples

```js
var Event = require('x-event');

var myEvent = new Event();
myEvent.addListener(function(message) {
	console.log(message);
});
myEvent.notifyListeners('my message');
```

## Method aliases

```
addListener - add, subscribe.
removeListener - remove, unsubscribe.
notifyListeners - emit, publish, trigger.
```

## Installation

```sh
npm install --save x-event
```