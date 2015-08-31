var event = {};
event.getEvent = function(event) {
  return event ? event : window.event;
};
event.getTargetElement = function(event) {
  return event.target || event.srcElement;
};
event.stopPropagation = function(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
  } else { //ie
    event.returnValue = false;
  }
};
event.preventDefault = function(event) {
  if (event.preventDefault) {
    event.preventDefault();
  } else {
    event.cancelBubble = true;
  }
};
event.addEvent = function(elm, type, fn) {
  if (elm.addEventListener) {
    elm.addEventListener(type, fn, false);
  } else if (elm.attachEvent) {
    elm.attachEvent("on" + type, fn);
  } else {
    elm["on" + type] = fn;
  }
};
event.removeEvent = function(elm, type, fn) {
  if (elm.removeEventListener) {
    elm.removeEventListener(type, fn, false);
  } else if (elm.detachEvent) {
    elm.detachEvent("on" + type, fn);
  } else {
    elm["on" + type] = null;
  }
};
