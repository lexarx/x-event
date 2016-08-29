/**
 * @class Event
 */
function Event() {}

function defineMethod(method, names) {
	for (var i = 0; i < names.length; i++) {
		Event.prototype[names[i]] = method;
	}
}

/**
 * Adds the event listener.
 * Callback function will be called with the passed context.
 * @param {Function} callback
 * @param {*} [context]
 */
function addListener(callback, context) {
	if (this.listeners === undefined) {
		this.listeners = [];
	}
	this.listeners.push({
		callback: callback,
		context: context
	});
};

defineMethod(addListener, ['addListener', 'add', 'subscribe']);

/**
 * Removes the listener.
 * Only one matching listener is removed if it exists.
 * @param {Function} callback
 * @param {*} [context]
 */
function removeListener(callback, context) {
	if (this.listeners === undefined) {
		return;
	}
	for (var index = 0; index < this.listeners.length; index++) {
		var listener = this.listeners[index];
		if (listener.callback === callback && listener.context === context) {
			this.listeners.splice(index, 1);
			break;
		}
	}
};

defineMethod(removeListener, ['removeListener', 'remove', 'unsubscribe']);

/**
 * Notifies the current snapshot of the listeners with the passed arguments.
 */
function notifyListeners() {
	if (this.listeners === undefined) {
		return;
	}
	var listeners = this.listeners.slice();
	for (var index = 0; index < listeners.length; index++) {
		var listener = this.listeners[index];
		listener.callback.apply(listener.context, arguments);
	}
};

defineMethod(notifyListeners, ['notifyListeners', 'emit', 'publish', 'trigger']);

module.exports = Event;