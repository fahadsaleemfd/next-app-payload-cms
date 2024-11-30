"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/sanitize-filename";
exports.ids = ["vendor-chunks/sanitize-filename"];
exports.modules = {

/***/ "(rsc)/./node_modules/sanitize-filename/index.js":
/*!*************************************************!*\
  !*** ./node_modules/sanitize-filename/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/*jshint node:true*/\n\n\n/**\n * Replaces characters in strings that are illegal/unsafe for filenames.\n * Unsafe characters are either removed or replaced by a substitute set\n * in the optional `options` object.\n *\n * Illegal Characters on Various Operating Systems\n * / ? < > \\ : * | \"\n * https://kb.acronis.com/content/39790\n *\n * Unicode Control codes\n * C0 0x00-0x1f & C1 (0x80-0x9f)\n * http://en.wikipedia.org/wiki/C0_and_C1_control_codes\n *\n * Reserved filenames on Unix-based systems (\".\", \"..\")\n * Reserved filenames in Windows (\"CON\", \"PRN\", \"AUX\", \"NUL\", \"COM1\",\n * \"COM2\", \"COM3\", \"COM4\", \"COM5\", \"COM6\", \"COM7\", \"COM8\", \"COM9\",\n * \"LPT1\", \"LPT2\", \"LPT3\", \"LPT4\", \"LPT5\", \"LPT6\", \"LPT7\", \"LPT8\", and\n * \"LPT9\") case-insesitively and with or without filename extensions.\n *\n * Capped at 255 characters in length.\n * http://unix.stackexchange.com/questions/32795/what-is-the-maximum-allowed-filename-and-folder-size-with-ecryptfs\n *\n * @param  {String} input   Original filename\n * @param  {Object} options {replacement: String | Function }\n * @return {String}         Sanitized filename\n */\n\nvar truncate = __webpack_require__(/*! truncate-utf8-bytes */ \"(rsc)/./node_modules/truncate-utf8-bytes/index.js\");\n\nvar illegalRe = /[\\/\\?<>\\\\:\\*\\|\"]/g;\nvar controlRe = /[\\x00-\\x1f\\x80-\\x9f]/g;\nvar reservedRe = /^\\.+$/;\nvar windowsReservedRe = /^(con|prn|aux|nul|com[0-9]|lpt[0-9])(\\..*)?$/i;\nvar windowsTrailingRe = /[\\. ]+$/;\n\nfunction sanitize(input, replacement) {\n  if (typeof input !== 'string') {\n    throw new Error('Input must be string');\n  }\n  var sanitized = input\n    .replace(illegalRe, replacement)\n    .replace(controlRe, replacement)\n    .replace(reservedRe, replacement)\n    .replace(windowsReservedRe, replacement)\n    .replace(windowsTrailingRe, replacement);\n  return truncate(sanitized, 255);\n}\n\nmodule.exports = function (input, options) {\n  var replacement = (options && options.replacement) || '';\n  var output = sanitize(input, replacement);\n  if (replacement === '') {\n    return output;\n  }\n  return sanitize(output, '');\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvc2FuaXRpemUtZmlsZW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksUUFBUTtBQUNwQixZQUFZLFFBQVEsU0FBUztBQUM3QixZQUFZLGdCQUFnQjtBQUM1Qjs7QUFFQSxlQUFlLG1CQUFPLENBQUMsOEVBQXFCOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyIvVXNlcnMvdXNlcjFfMS9EZXNrdG9wL3dvcmtzcGFjZS9uZXdhcHAvbmV4dGpzLWJsb2cvbm9kZV9tb2R1bGVzL3Nhbml0aXplLWZpbGVuYW1lL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qanNoaW50IG5vZGU6dHJ1ZSovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogUmVwbGFjZXMgY2hhcmFjdGVycyBpbiBzdHJpbmdzIHRoYXQgYXJlIGlsbGVnYWwvdW5zYWZlIGZvciBmaWxlbmFtZXMuXG4gKiBVbnNhZmUgY2hhcmFjdGVycyBhcmUgZWl0aGVyIHJlbW92ZWQgb3IgcmVwbGFjZWQgYnkgYSBzdWJzdGl0dXRlIHNldFxuICogaW4gdGhlIG9wdGlvbmFsIGBvcHRpb25zYCBvYmplY3QuXG4gKlxuICogSWxsZWdhbCBDaGFyYWN0ZXJzIG9uIFZhcmlvdXMgT3BlcmF0aW5nIFN5c3RlbXNcbiAqIC8gPyA8ID4gXFwgOiAqIHwgXCJcbiAqIGh0dHBzOi8va2IuYWNyb25pcy5jb20vY29udGVudC8zOTc5MFxuICpcbiAqIFVuaWNvZGUgQ29udHJvbCBjb2Rlc1xuICogQzAgMHgwMC0weDFmICYgQzEgKDB4ODAtMHg5ZilcbiAqIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQzBfYW5kX0MxX2NvbnRyb2xfY29kZXNcbiAqXG4gKiBSZXNlcnZlZCBmaWxlbmFtZXMgb24gVW5peC1iYXNlZCBzeXN0ZW1zIChcIi5cIiwgXCIuLlwiKVxuICogUmVzZXJ2ZWQgZmlsZW5hbWVzIGluIFdpbmRvd3MgKFwiQ09OXCIsIFwiUFJOXCIsIFwiQVVYXCIsIFwiTlVMXCIsIFwiQ09NMVwiLFxuICogXCJDT00yXCIsIFwiQ09NM1wiLCBcIkNPTTRcIiwgXCJDT001XCIsIFwiQ09NNlwiLCBcIkNPTTdcIiwgXCJDT004XCIsIFwiQ09NOVwiLFxuICogXCJMUFQxXCIsIFwiTFBUMlwiLCBcIkxQVDNcIiwgXCJMUFQ0XCIsIFwiTFBUNVwiLCBcIkxQVDZcIiwgXCJMUFQ3XCIsIFwiTFBUOFwiLCBhbmRcbiAqIFwiTFBUOVwiKSBjYXNlLWluc2VzaXRpdmVseSBhbmQgd2l0aCBvciB3aXRob3V0IGZpbGVuYW1lIGV4dGVuc2lvbnMuXG4gKlxuICogQ2FwcGVkIGF0IDI1NSBjaGFyYWN0ZXJzIGluIGxlbmd0aC5cbiAqIGh0dHA6Ly91bml4LnN0YWNrZXhjaGFuZ2UuY29tL3F1ZXN0aW9ucy8zMjc5NS93aGF0LWlzLXRoZS1tYXhpbXVtLWFsbG93ZWQtZmlsZW5hbWUtYW5kLWZvbGRlci1zaXplLXdpdGgtZWNyeXB0ZnNcbiAqXG4gKiBAcGFyYW0gIHtTdHJpbmd9IGlucHV0ICAgT3JpZ2luYWwgZmlsZW5hbWVcbiAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyB7cmVwbGFjZW1lbnQ6IFN0cmluZyB8IEZ1bmN0aW9uIH1cbiAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgICBTYW5pdGl6ZWQgZmlsZW5hbWVcbiAqL1xuXG52YXIgdHJ1bmNhdGUgPSByZXF1aXJlKFwidHJ1bmNhdGUtdXRmOC1ieXRlc1wiKTtcblxudmFyIGlsbGVnYWxSZSA9IC9bXFwvXFw/PD5cXFxcOlxcKlxcfFwiXS9nO1xudmFyIGNvbnRyb2xSZSA9IC9bXFx4MDAtXFx4MWZcXHg4MC1cXHg5Zl0vZztcbnZhciByZXNlcnZlZFJlID0gL15cXC4rJC87XG52YXIgd2luZG93c1Jlc2VydmVkUmUgPSAvXihjb258cHJufGF1eHxudWx8Y29tWzAtOV18bHB0WzAtOV0pKFxcLi4qKT8kL2k7XG52YXIgd2luZG93c1RyYWlsaW5nUmUgPSAvW1xcLiBdKyQvO1xuXG5mdW5jdGlvbiBzYW5pdGl6ZShpbnB1dCwgcmVwbGFjZW1lbnQpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IG11c3QgYmUgc3RyaW5nJyk7XG4gIH1cbiAgdmFyIHNhbml0aXplZCA9IGlucHV0XG4gICAgLnJlcGxhY2UoaWxsZWdhbFJlLCByZXBsYWNlbWVudClcbiAgICAucmVwbGFjZShjb250cm9sUmUsIHJlcGxhY2VtZW50KVxuICAgIC5yZXBsYWNlKHJlc2VydmVkUmUsIHJlcGxhY2VtZW50KVxuICAgIC5yZXBsYWNlKHdpbmRvd3NSZXNlcnZlZFJlLCByZXBsYWNlbWVudClcbiAgICAucmVwbGFjZSh3aW5kb3dzVHJhaWxpbmdSZSwgcmVwbGFjZW1lbnQpO1xuICByZXR1cm4gdHJ1bmNhdGUoc2FuaXRpemVkLCAyNTUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbnB1dCwgb3B0aW9ucykge1xuICB2YXIgcmVwbGFjZW1lbnQgPSAob3B0aW9ucyAmJiBvcHRpb25zLnJlcGxhY2VtZW50KSB8fCAnJztcbiAgdmFyIG91dHB1dCA9IHNhbml0aXplKGlucHV0LCByZXBsYWNlbWVudCk7XG4gIGlmIChyZXBsYWNlbWVudCA9PT0gJycpIHtcbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG4gIHJldHVybiBzYW5pdGl6ZShvdXRwdXQsICcnKTtcbn07XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/sanitize-filename/index.js\n");

/***/ })

};
;