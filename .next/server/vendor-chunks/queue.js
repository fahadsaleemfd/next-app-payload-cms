/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/queue";
exports.ids = ["vendor-chunks/queue"];
exports.modules = {

/***/ "(rsc)/./node_modules/queue/index.js":
/*!*************************************!*\
  !*** ./node_modules/queue/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var inherits = __webpack_require__(/*! inherits */ \"(rsc)/./node_modules/inherits/inherits.js\")\nvar EventEmitter = (__webpack_require__(/*! events */ \"events\").EventEmitter)\n\nmodule.exports = Queue\nmodule.exports[\"default\"] = Queue\n\nfunction Queue (options) {\n  if (!(this instanceof Queue)) {\n    return new Queue(options)\n  }\n\n  EventEmitter.call(this)\n  options = options || {}\n  this.concurrency = options.concurrency || Infinity\n  this.timeout = options.timeout || 0\n  this.autostart = options.autostart || false\n  this.results = options.results || null\n  this.pending = 0\n  this.session = 0\n  this.running = false\n  this.jobs = []\n  this.timers = {}\n}\ninherits(Queue, EventEmitter)\n\nvar arrayMethods = [\n  'pop',\n  'shift',\n  'indexOf',\n  'lastIndexOf'\n]\n\narrayMethods.forEach(function (method) {\n  Queue.prototype[method] = function () {\n    return Array.prototype[method].apply(this.jobs, arguments)\n  }\n})\n\nQueue.prototype.slice = function (begin, end) {\n  this.jobs = this.jobs.slice(begin, end)\n  return this\n}\n\nQueue.prototype.reverse = function () {\n  this.jobs.reverse()\n  return this\n}\n\nvar arrayAddMethods = [\n  'push',\n  'unshift',\n  'splice'\n]\n\narrayAddMethods.forEach(function (method) {\n  Queue.prototype[method] = function () {\n    var methodResult = Array.prototype[method].apply(this.jobs, arguments)\n    if (this.autostart) {\n      this.start()\n    }\n    return methodResult\n  }\n})\n\nObject.defineProperty(Queue.prototype, 'length', {\n  get: function () {\n    return this.pending + this.jobs.length\n  }\n})\n\nQueue.prototype.start = function (cb) {\n  if (cb) {\n    callOnErrorOrEnd.call(this, cb)\n  }\n\n  this.running = true\n\n  if (this.pending >= this.concurrency) {\n    return\n  }\n\n  if (this.jobs.length === 0) {\n    if (this.pending === 0) {\n      done.call(this)\n    }\n    return\n  }\n\n  var self = this\n  var job = this.jobs.shift()\n  var once = true\n  var session = this.session\n  var timeoutId = null\n  var didTimeout = false\n  var resultIndex = null\n  var timeout = job.hasOwnProperty('timeout') ? job.timeout : this.timeout\n\n  function next (err, result) {\n    if (once && self.session === session) {\n      once = false\n      self.pending--\n      if (timeoutId !== null) {\n        delete self.timers[timeoutId]\n        clearTimeout(timeoutId)\n      }\n\n      if (err) {\n        self.emit('error', err, job)\n      } else if (didTimeout === false) {\n        if (resultIndex !== null) {\n          self.results[resultIndex] = Array.prototype.slice.call(arguments, 1)\n        }\n        self.emit('success', result, job)\n      }\n\n      if (self.session === session) {\n        if (self.pending === 0 && self.jobs.length === 0) {\n          done.call(self)\n        } else if (self.running) {\n          self.start()\n        }\n      }\n    }\n  }\n\n  if (timeout) {\n    timeoutId = setTimeout(function () {\n      didTimeout = true\n      if (self.listeners('timeout').length > 0) {\n        self.emit('timeout', next, job)\n      } else {\n        next()\n      }\n    }, timeout)\n    this.timers[timeoutId] = timeoutId\n  }\n\n  if (this.results) {\n    resultIndex = this.results.length\n    this.results[resultIndex] = null\n  }\n\n  this.pending++\n  self.emit('start', job)\n  var promise = job(next)\n  if (promise && promise.then && typeof promise.then === 'function') {\n    promise.then(function (result) {\n      return next(null, result)\n    }).catch(function (err) {\n      return next(err || true)\n    })\n  }\n\n  if (this.running && this.jobs.length > 0) {\n    this.start()\n  }\n}\n\nQueue.prototype.stop = function () {\n  this.running = false\n}\n\nQueue.prototype.end = function (err) {\n  clearTimers.call(this)\n  this.jobs.length = 0\n  this.pending = 0\n  done.call(this, err)\n}\n\nfunction clearTimers () {\n  for (var key in this.timers) {\n    var timeoutId = this.timers[key]\n    delete this.timers[key]\n    clearTimeout(timeoutId)\n  }\n}\n\nfunction callOnErrorOrEnd (cb) {\n  var self = this\n  this.on('error', onerror)\n  this.on('end', onend)\n\n  function onerror (err) { self.end(err) }\n  function onend (err) {\n    self.removeListener('error', onerror)\n    self.removeListener('end', onend)\n    cb(err, this.results)\n  }\n}\n\nfunction done (err) {\n  this.session++\n  this.running = false\n  this.emit('end', err)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvcXVldWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZSxtQkFBTyxDQUFDLDJEQUFVO0FBQ2pDLG1CQUFtQiwwREFBOEI7O0FBRWpEO0FBQ0EseUJBQXNCOztBQUV0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMV8xL0Rlc2t0b3Avd29ya3NwYWNlL25ld2FwcC9uZXh0anMtYmxvZy9ub2RlX21vZHVsZXMvcXVldWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGluaGVyaXRzID0gcmVxdWlyZSgnaW5oZXJpdHMnKVxudmFyIEV2ZW50RW1pdHRlciA9IHJlcXVpcmUoJ2V2ZW50cycpLkV2ZW50RW1pdHRlclxuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXVlXG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gUXVldWVcblxuZnVuY3Rpb24gUXVldWUgKG9wdGlvbnMpIHtcbiAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFF1ZXVlKSkge1xuICAgIHJldHVybiBuZXcgUXVldWUob3B0aW9ucylcbiAgfVxuXG4gIEV2ZW50RW1pdHRlci5jYWxsKHRoaXMpXG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG4gIHRoaXMuY29uY3VycmVuY3kgPSBvcHRpb25zLmNvbmN1cnJlbmN5IHx8IEluZmluaXR5XG4gIHRoaXMudGltZW91dCA9IG9wdGlvbnMudGltZW91dCB8fCAwXG4gIHRoaXMuYXV0b3N0YXJ0ID0gb3B0aW9ucy5hdXRvc3RhcnQgfHwgZmFsc2VcbiAgdGhpcy5yZXN1bHRzID0gb3B0aW9ucy5yZXN1bHRzIHx8IG51bGxcbiAgdGhpcy5wZW5kaW5nID0gMFxuICB0aGlzLnNlc3Npb24gPSAwXG4gIHRoaXMucnVubmluZyA9IGZhbHNlXG4gIHRoaXMuam9icyA9IFtdXG4gIHRoaXMudGltZXJzID0ge31cbn1cbmluaGVyaXRzKFF1ZXVlLCBFdmVudEVtaXR0ZXIpXG5cbnZhciBhcnJheU1ldGhvZHMgPSBbXG4gICdwb3AnLFxuICAnc2hpZnQnLFxuICAnaW5kZXhPZicsXG4gICdsYXN0SW5kZXhPZidcbl1cblxuYXJyYXlNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBRdWV1ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlW21ldGhvZF0uYXBwbHkodGhpcy5qb2JzLCBhcmd1bWVudHMpXG4gIH1cbn0pXG5cblF1ZXVlLnByb3RvdHlwZS5zbGljZSA9IGZ1bmN0aW9uIChiZWdpbiwgZW5kKSB7XG4gIHRoaXMuam9icyA9IHRoaXMuam9icy5zbGljZShiZWdpbiwgZW5kKVxuICByZXR1cm4gdGhpc1xufVxuXG5RdWV1ZS5wcm90b3R5cGUucmV2ZXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5qb2JzLnJldmVyc2UoKVxuICByZXR1cm4gdGhpc1xufVxuXG52YXIgYXJyYXlBZGRNZXRob2RzID0gW1xuICAncHVzaCcsXG4gICd1bnNoaWZ0JyxcbiAgJ3NwbGljZSdcbl1cblxuYXJyYXlBZGRNZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKG1ldGhvZCkge1xuICBRdWV1ZS5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbWV0aG9kUmVzdWx0ID0gQXJyYXkucHJvdG90eXBlW21ldGhvZF0uYXBwbHkodGhpcy5qb2JzLCBhcmd1bWVudHMpXG4gICAgaWYgKHRoaXMuYXV0b3N0YXJ0KSB7XG4gICAgICB0aGlzLnN0YXJ0KClcbiAgICB9XG4gICAgcmV0dXJuIG1ldGhvZFJlc3VsdFxuICB9XG59KVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUXVldWUucHJvdG90eXBlLCAnbGVuZ3RoJywge1xuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5wZW5kaW5nICsgdGhpcy5qb2JzLmxlbmd0aFxuICB9XG59KVxuXG5RdWV1ZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgaWYgKGNiKSB7XG4gICAgY2FsbE9uRXJyb3JPckVuZC5jYWxsKHRoaXMsIGNiKVxuICB9XG5cbiAgdGhpcy5ydW5uaW5nID0gdHJ1ZVxuXG4gIGlmICh0aGlzLnBlbmRpbmcgPj0gdGhpcy5jb25jdXJyZW5jeSkge1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHRoaXMuam9icy5sZW5ndGggPT09IDApIHtcbiAgICBpZiAodGhpcy5wZW5kaW5nID09PSAwKSB7XG4gICAgICBkb25lLmNhbGwodGhpcylcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXNcbiAgdmFyIGpvYiA9IHRoaXMuam9icy5zaGlmdCgpXG4gIHZhciBvbmNlID0gdHJ1ZVxuICB2YXIgc2Vzc2lvbiA9IHRoaXMuc2Vzc2lvblxuICB2YXIgdGltZW91dElkID0gbnVsbFxuICB2YXIgZGlkVGltZW91dCA9IGZhbHNlXG4gIHZhciByZXN1bHRJbmRleCA9IG51bGxcbiAgdmFyIHRpbWVvdXQgPSBqb2IuaGFzT3duUHJvcGVydHkoJ3RpbWVvdXQnKSA/IGpvYi50aW1lb3V0IDogdGhpcy50aW1lb3V0XG5cbiAgZnVuY3Rpb24gbmV4dCAoZXJyLCByZXN1bHQpIHtcbiAgICBpZiAob25jZSAmJiBzZWxmLnNlc3Npb24gPT09IHNlc3Npb24pIHtcbiAgICAgIG9uY2UgPSBmYWxzZVxuICAgICAgc2VsZi5wZW5kaW5nLS1cbiAgICAgIGlmICh0aW1lb3V0SWQgIT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHNlbGYudGltZXJzW3RpbWVvdXRJZF1cbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgICAgIH1cblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBzZWxmLmVtaXQoJ2Vycm9yJywgZXJyLCBqb2IpXG4gICAgICB9IGVsc2UgaWYgKGRpZFRpbWVvdXQgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChyZXN1bHRJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgIHNlbGYucmVzdWx0c1tyZXN1bHRJbmRleF0gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgICAgIH1cbiAgICAgICAgc2VsZi5lbWl0KCdzdWNjZXNzJywgcmVzdWx0LCBqb2IpXG4gICAgICB9XG5cbiAgICAgIGlmIChzZWxmLnNlc3Npb24gPT09IHNlc3Npb24pIHtcbiAgICAgICAgaWYgKHNlbGYucGVuZGluZyA9PT0gMCAmJiBzZWxmLmpvYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgZG9uZS5jYWxsKHNlbGYpXG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZi5ydW5uaW5nKSB7XG4gICAgICAgICAgc2VsZi5zdGFydCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAodGltZW91dCkge1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZGlkVGltZW91dCA9IHRydWVcbiAgICAgIGlmIChzZWxmLmxpc3RlbmVycygndGltZW91dCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgc2VsZi5lbWl0KCd0aW1lb3V0JywgbmV4dCwgam9iKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV4dCgpXG4gICAgICB9XG4gICAgfSwgdGltZW91dClcbiAgICB0aGlzLnRpbWVyc1t0aW1lb3V0SWRdID0gdGltZW91dElkXG4gIH1cblxuICBpZiAodGhpcy5yZXN1bHRzKSB7XG4gICAgcmVzdWx0SW5kZXggPSB0aGlzLnJlc3VsdHMubGVuZ3RoXG4gICAgdGhpcy5yZXN1bHRzW3Jlc3VsdEluZGV4XSA9IG51bGxcbiAgfVxuXG4gIHRoaXMucGVuZGluZysrXG4gIHNlbGYuZW1pdCgnc3RhcnQnLCBqb2IpXG4gIHZhciBwcm9taXNlID0gam9iKG5leHQpXG4gIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbiAmJiB0eXBlb2YgcHJvbWlzZS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIHJldHVybiBuZXh0KG51bGwsIHJlc3VsdClcbiAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICByZXR1cm4gbmV4dChlcnIgfHwgdHJ1ZSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKHRoaXMucnVubmluZyAmJiB0aGlzLmpvYnMubGVuZ3RoID4gMCkge1xuICAgIHRoaXMuc3RhcnQoKVxuICB9XG59XG5cblF1ZXVlLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnJ1bm5pbmcgPSBmYWxzZVxufVxuXG5RdWV1ZS5wcm90b3R5cGUuZW5kID0gZnVuY3Rpb24gKGVycikge1xuICBjbGVhclRpbWVycy5jYWxsKHRoaXMpXG4gIHRoaXMuam9icy5sZW5ndGggPSAwXG4gIHRoaXMucGVuZGluZyA9IDBcbiAgZG9uZS5jYWxsKHRoaXMsIGVycilcbn1cblxuZnVuY3Rpb24gY2xlYXJUaW1lcnMgKCkge1xuICBmb3IgKHZhciBrZXkgaW4gdGhpcy50aW1lcnMpIHtcbiAgICB2YXIgdGltZW91dElkID0gdGhpcy50aW1lcnNba2V5XVxuICAgIGRlbGV0ZSB0aGlzLnRpbWVyc1trZXldXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZClcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxsT25FcnJvck9yRW5kIChjYikge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgdGhpcy5vbignZXJyb3InLCBvbmVycm9yKVxuICB0aGlzLm9uKCdlbmQnLCBvbmVuZClcblxuICBmdW5jdGlvbiBvbmVycm9yIChlcnIpIHsgc2VsZi5lbmQoZXJyKSB9XG4gIGZ1bmN0aW9uIG9uZW5kIChlcnIpIHtcbiAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpXG4gICAgc2VsZi5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25lbmQpXG4gICAgY2IoZXJyLCB0aGlzLnJlc3VsdHMpXG4gIH1cbn1cblxuZnVuY3Rpb24gZG9uZSAoZXJyKSB7XG4gIHRoaXMuc2Vzc2lvbisrXG4gIHRoaXMucnVubmluZyA9IGZhbHNlXG4gIHRoaXMuZW1pdCgnZW5kJywgZXJyKVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/queue/index.js\n");

/***/ })

};
;