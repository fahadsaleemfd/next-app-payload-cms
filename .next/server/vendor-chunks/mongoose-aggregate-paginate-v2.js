/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/mongoose-aggregate-paginate-v2";
exports.ids = ["vendor-chunks/mongoose-aggregate-paginate-v2"];
exports.modules = {

/***/ "(rsc)/./node_modules/mongoose-aggregate-paginate-v2/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/mongoose-aggregate-paginate-v2/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst aggregatePaginate = __webpack_require__(/*! ./lib/mongoose-aggregate-paginate */ \"(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/mongoose-aggregate-paginate.js\");\r\n\r\n/**\r\n * @param {Schema} schema\r\n */\r\nmodule.exports = function (schema) {\r\n  schema.statics.aggregatePaginate = aggregatePaginate;\r\n\r\n  mongoose.Aggregate.prototype.paginateExec = function (options, cb) {\r\n    return this.model().aggregatePaginate(this, options, cb);\r\n  };\r\n};\r\n\r\nmodule.exports.aggregatePaginate = aggregatePaginate;\r\n\r\nmodule.exports.PREPAGINATION_PLACEHOLDER = aggregatePaginate.PREPAGINATION_PLACEHOLDER;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9uZ29vc2UtYWdncmVnYXRlLXBhZ2luYXRlLXYyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQixtQkFBTyxDQUFDLDBCQUFVO0FBQ25DLDBCQUEwQixtQkFBTyxDQUFDLGlJQUFtQztBQUNyRTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBLHdDQUF3QyIsInNvdXJjZXMiOlsiL1VzZXJzL3VzZXIxXzEvRGVza3RvcC93b3Jrc3BhY2UvbmV3YXBwL25leHRqcy1ibG9nL25vZGVfbW9kdWxlcy9tb25nb29zZS1hZ2dyZWdhdGUtcGFnaW5hdGUtdjIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XHJcbmNvbnN0IGFnZ3JlZ2F0ZVBhZ2luYXRlID0gcmVxdWlyZShcIi4vbGliL21vbmdvb3NlLWFnZ3JlZ2F0ZS1wYWdpbmF0ZVwiKTtcclxuXHJcbi8qKlxyXG4gKiBAcGFyYW0ge1NjaGVtYX0gc2NoZW1hXHJcbiAqL1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzY2hlbWEpIHtcclxuICBzY2hlbWEuc3RhdGljcy5hZ2dyZWdhdGVQYWdpbmF0ZSA9IGFnZ3JlZ2F0ZVBhZ2luYXRlO1xyXG5cclxuICBtb25nb29zZS5BZ2dyZWdhdGUucHJvdG90eXBlLnBhZ2luYXRlRXhlYyA9IGZ1bmN0aW9uIChvcHRpb25zLCBjYikge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwoKS5hZ2dyZWdhdGVQYWdpbmF0ZSh0aGlzLCBvcHRpb25zLCBjYik7XHJcbiAgfTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLmFnZ3JlZ2F0ZVBhZ2luYXRlID0gYWdncmVnYXRlUGFnaW5hdGU7XHJcblxyXG5tb2R1bGUuZXhwb3J0cy5QUkVQQUdJTkFUSU9OX1BMQUNFSE9MREVSID0gYWdncmVnYXRlUGFnaW5hdGUuUFJFUEFHSU5BVElPTl9QTEFDRUhPTERFUjtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mongoose-aggregate-paginate-v2/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/mongoose-aggregate-paginate.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/mongoose-aggregate-paginate-v2/lib/mongoose-aggregate-paginate.js ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/**\r\n * Mongoose Aggregate Paginate\r\n * @param  {Aggregate} aggregate\r\n * @param  {any} options\r\n * @param  {function} [callback]\r\n * @returns {Promise}\r\n */\r\n\r\nconst { parseSort } = __webpack_require__(/*! ./util */ \"(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/index.js\");\r\n\r\nconst defaultOptions = {\r\n  customLabels: {\r\n    totalDocs: \"totalDocs\",\r\n    limit: \"limit\",\r\n    page: \"page\",\r\n    totalPages: \"totalPages\",\r\n    docs: \"docs\",\r\n    nextPage: \"nextPage\",\r\n    prevPage: \"prevPage\",\r\n    pagingCounter: \"pagingCounter\",\r\n    hasPrevPage: \"hasPrevPage\",\r\n    hasNextPage: \"hasNextPage\",\r\n    meta: null,\r\n  },\r\n  collation: {},\r\n  lean: false,\r\n  leanWithId: true,\r\n  limit: 10,\r\n  projection: {},\r\n  select: \"\",\r\n  options: {},\r\n  pagination: true,\r\n  countQuery: null,\r\n  useFacet: true,\r\n};\r\n\r\nconst PREPAGINATION_PLACEHOLDER = \"__PREPAGINATE__\";\r\n\r\nfunction aggregatePaginate(query, options, callback) {\r\n  options = {\r\n    ...defaultOptions,\r\n    ...aggregatePaginate.options,\r\n    ...options,\r\n  };\r\n\r\n  const pipeline = Array.isArray(query) ? query : query._pipeline;\r\n\r\n  const customLabels = {\r\n    ...defaultOptions.customLabels,\r\n    ...options.customLabels,\r\n  };\r\n\r\n  const defaultLimit = 10;\r\n\r\n  // Custom Labels\r\n  const labelTotal = customLabels.totalDocs;\r\n  const labelLimit = customLabels.limit;\r\n  const labelPage = customLabels.page;\r\n  const labelTotalPages = customLabels.totalPages;\r\n  const labelDocs = customLabels.docs;\r\n  const labelNextPage = customLabels.nextPage;\r\n  const labelPrevPage = customLabels.prevPage;\r\n  const labelHasNextPage = customLabels.hasNextPage;\r\n  const labelHasPrevPage = customLabels.hasPrevPage;\r\n  const labelPagingCounter = customLabels.pagingCounter;\r\n  const labelMeta = customLabels.meta;\r\n\r\n  let page = parseInt(options.page || 1, 10) || 1;\r\n  let limit =\r\n    parseInt(options.limit, 10) > 0\r\n      ? parseInt(options.limit, 10)\r\n      : defaultLimit;\r\n\r\n  // const skip = (page - 1) * limit;\r\n  let skip;\r\n  let offset;\r\n\r\n  if (Object.prototype.hasOwnProperty.call(options, \"offset\")) {\r\n    offset = Math.abs(parseInt(options.offset, 10));\r\n    skip = offset;\r\n  } else if (Object.prototype.hasOwnProperty.call(options, \"page\")) {\r\n    page = Math.abs(parseInt(options.page, 10)) || 1;\r\n    skip = (page - 1) * limit;\r\n  } else {\r\n    offset = 0;\r\n    page = 1;\r\n    skip = offset;\r\n  }\r\n\r\n  const sort = options.sort;\r\n\r\n  const allowDiskUse = options.allowDiskUse || false;\r\n  const isPaginationEnabled = options.pagination === false ? false : true;\r\n\r\n  let q = this.aggregate();\r\n\r\n  if (query.options) q.options = query.options;\r\n\r\n  if (allowDiskUse) {\r\n    q.allowDiskUse(true);\r\n  }\r\n\r\n  if (sort) {\r\n    pipeline.push({ $sort: parseSort(sort) });\r\n  }\r\n\r\n  function constructPipelines() {\r\n    let cleanedPipeline = pipeline.filter(\r\n      (stage) => stage !== PREPAGINATION_PLACEHOLDER\r\n    );\r\n\r\n    const countPipeline = [...cleanedPipeline, { $count: \"count\" }];\r\n\r\n    if (isPaginationEnabled) {\r\n      let foundPrepagination = false;\r\n      cleanedPipeline = pipeline.flatMap((stage) => {\r\n        if (stage === PREPAGINATION_PLACEHOLDER) {\r\n          foundPrepagination = true;\r\n          return [{ $skip: skip }, { $limit: limit }];\r\n        }\r\n        return stage;\r\n      });\r\n      if (!foundPrepagination) {\r\n        cleanedPipeline.push({ $skip: skip }, { $limit: limit });\r\n      }\r\n    }\r\n    return [cleanedPipeline, countPipeline];\r\n  }\r\n\r\n  let promise;\r\n  if (options.useFacet && !options.countQuery) {\r\n    let [pipeline, countPipeline] = constructPipelines();\r\n    const match = pipeline[0]?.$match;\r\n    if (match) {\r\n      pipeline.shift();\r\n      countPipeline.shift();\r\n      q = q.match(match);\r\n    }\r\n    promise = q\r\n      .facet({\r\n        docs: pipeline,\r\n        count: countPipeline,\r\n      })\r\n      .then(([{ docs, count }]) => [docs, count]);\r\n  } else {\r\n    const [pipeline, countPipeline] = constructPipelines();\r\n\r\n    let countQuery = options.countQuery\r\n      ? options.countQuery\r\n      : this.aggregate(countPipeline);\r\n\r\n    if (options.countQuery) {\r\n      countQuery = countQuery.group({\r\n        _id: null,\r\n        count: {\r\n          $sum: 1,\r\n        },\r\n      });\r\n    }\r\n\r\n    if (allowDiskUse) {\r\n      countQuery.allowDiskUse(true);\r\n    }\r\n\r\n    const q = this.aggregate(pipeline);\r\n\r\n    if (query.options) q.options = query.options;\r\n\r\n    promise = Promise.all([q.exec(), countQuery.exec()]);\r\n  }\r\n\r\n  return promise\r\n    .then(function (values) {\r\n      var count = values[1][0] ? values[1][0].count : 0;\r\n\r\n      if (isPaginationEnabled === false) {\r\n        limit = count;\r\n        page = 1;\r\n      }\r\n\r\n      const pages = Math.ceil(count / limit) || 1;\r\n\r\n      var result = {\r\n        [labelDocs]: values[0],\r\n      };\r\n\r\n      var meta = {\r\n        [labelTotal]: count,\r\n        [labelLimit]: limit,\r\n        [labelPage]: page,\r\n        [labelTotalPages]: pages,\r\n        [labelPagingCounter]: (page - 1) * limit + 1,\r\n        [labelHasPrevPage]: false,\r\n        [labelHasNextPage]: false,\r\n      };\r\n\r\n      if (typeof offset !== \"undefined\") {\r\n        page = Math.ceil((offset + 1) / limit);\r\n\r\n        meta.offset = offset;\r\n        meta[labelPage] = Math.ceil((offset + 1) / limit);\r\n        meta[labelPagingCounter] = offset + 1;\r\n      }\r\n\r\n      // Set prev page\r\n      if (page > 1) {\r\n        meta[labelHasPrevPage] = true;\r\n        meta[labelPrevPage] = page - 1;\r\n      } else {\r\n        meta[labelPrevPage] = null;\r\n      }\r\n\r\n      // Set next page\r\n      if (page < pages) {\r\n        meta[labelHasNextPage] = true;\r\n        meta[labelNextPage] = page + 1;\r\n      } else {\r\n        meta[labelNextPage] = null;\r\n      }\r\n\r\n      if (labelMeta) {\r\n        result[labelMeta] = meta;\r\n      } else {\r\n        result = Object.assign(result, meta);\r\n      }\r\n\r\n      if (typeof callback === \"function\") {\r\n        return callback(null, result);\r\n      }\r\n\r\n      return Promise.resolve(result);\r\n    })\r\n    .catch(function (reject) {\r\n      if (typeof callback === \"function\") {\r\n        return callback(reject);\r\n      }\r\n      return Promise.reject(reject);\r\n    });\r\n}\r\n\r\nmodule.exports = aggregatePaginate;\r\n\r\nmodule.exports.PREPAGINATION_PLACEHOLDER = PREPAGINATION_PLACEHOLDER;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9uZ29vc2UtYWdncmVnYXRlLXBhZ2luYXRlLXYyL2xpYi9tb25nb29zZS1hZ2dyZWdhdGUtcGFnaW5hdGUuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBLFlBQVksV0FBVztBQUN2QixZQUFZLEtBQUs7QUFDakIsWUFBWSxVQUFVO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0EsUUFBUSxZQUFZLEVBQUUsbUJBQU8sQ0FBQyxxRkFBUTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsaUJBQWlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixhQUFhLElBQUksZUFBZTtBQUNwRDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsK0JBQStCLGFBQWEsSUFBSSxlQUFlO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxnQkFBZ0IsYUFBYTtBQUM3QixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyIsInNvdXJjZXMiOlsiL1VzZXJzL3VzZXIxXzEvRGVza3RvcC93b3Jrc3BhY2UvbmV3YXBwL25leHRqcy1ibG9nL25vZGVfbW9kdWxlcy9tb25nb29zZS1hZ2dyZWdhdGUtcGFnaW5hdGUtdjIvbGliL21vbmdvb3NlLWFnZ3JlZ2F0ZS1wYWdpbmF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogTW9uZ29vc2UgQWdncmVnYXRlIFBhZ2luYXRlXHJcbiAqIEBwYXJhbSAge0FnZ3JlZ2F0ZX0gYWdncmVnYXRlXHJcbiAqIEBwYXJhbSAge2FueX0gb3B0aW9uc1xyXG4gKiBAcGFyYW0gIHtmdW5jdGlvbn0gW2NhbGxiYWNrXVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZX1cclxuICovXHJcblxyXG5jb25zdCB7IHBhcnNlU29ydCB9ID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcclxuXHJcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIGN1c3RvbUxhYmVsczoge1xyXG4gICAgdG90YWxEb2NzOiBcInRvdGFsRG9jc1wiLFxyXG4gICAgbGltaXQ6IFwibGltaXRcIixcclxuICAgIHBhZ2U6IFwicGFnZVwiLFxyXG4gICAgdG90YWxQYWdlczogXCJ0b3RhbFBhZ2VzXCIsXHJcbiAgICBkb2NzOiBcImRvY3NcIixcclxuICAgIG5leHRQYWdlOiBcIm5leHRQYWdlXCIsXHJcbiAgICBwcmV2UGFnZTogXCJwcmV2UGFnZVwiLFxyXG4gICAgcGFnaW5nQ291bnRlcjogXCJwYWdpbmdDb3VudGVyXCIsXHJcbiAgICBoYXNQcmV2UGFnZTogXCJoYXNQcmV2UGFnZVwiLFxyXG4gICAgaGFzTmV4dFBhZ2U6IFwiaGFzTmV4dFBhZ2VcIixcclxuICAgIG1ldGE6IG51bGwsXHJcbiAgfSxcclxuICBjb2xsYXRpb246IHt9LFxyXG4gIGxlYW46IGZhbHNlLFxyXG4gIGxlYW5XaXRoSWQ6IHRydWUsXHJcbiAgbGltaXQ6IDEwLFxyXG4gIHByb2plY3Rpb246IHt9LFxyXG4gIHNlbGVjdDogXCJcIixcclxuICBvcHRpb25zOiB7fSxcclxuICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gIGNvdW50UXVlcnk6IG51bGwsXHJcbiAgdXNlRmFjZXQ6IHRydWUsXHJcbn07XHJcblxyXG5jb25zdCBQUkVQQUdJTkFUSU9OX1BMQUNFSE9MREVSID0gXCJfX1BSRVBBR0lOQVRFX19cIjtcclxuXHJcbmZ1bmN0aW9uIGFnZ3JlZ2F0ZVBhZ2luYXRlKHF1ZXJ5LCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gIG9wdGlvbnMgPSB7XHJcbiAgICAuLi5kZWZhdWx0T3B0aW9ucyxcclxuICAgIC4uLmFnZ3JlZ2F0ZVBhZ2luYXRlLm9wdGlvbnMsXHJcbiAgICAuLi5vcHRpb25zLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBpcGVsaW5lID0gQXJyYXkuaXNBcnJheShxdWVyeSkgPyBxdWVyeSA6IHF1ZXJ5Ll9waXBlbGluZTtcclxuXHJcbiAgY29uc3QgY3VzdG9tTGFiZWxzID0ge1xyXG4gICAgLi4uZGVmYXVsdE9wdGlvbnMuY3VzdG9tTGFiZWxzLFxyXG4gICAgLi4ub3B0aW9ucy5jdXN0b21MYWJlbHMsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVmYXVsdExpbWl0ID0gMTA7XHJcblxyXG4gIC8vIEN1c3RvbSBMYWJlbHNcclxuICBjb25zdCBsYWJlbFRvdGFsID0gY3VzdG9tTGFiZWxzLnRvdGFsRG9jcztcclxuICBjb25zdCBsYWJlbExpbWl0ID0gY3VzdG9tTGFiZWxzLmxpbWl0O1xyXG4gIGNvbnN0IGxhYmVsUGFnZSA9IGN1c3RvbUxhYmVscy5wYWdlO1xyXG4gIGNvbnN0IGxhYmVsVG90YWxQYWdlcyA9IGN1c3RvbUxhYmVscy50b3RhbFBhZ2VzO1xyXG4gIGNvbnN0IGxhYmVsRG9jcyA9IGN1c3RvbUxhYmVscy5kb2NzO1xyXG4gIGNvbnN0IGxhYmVsTmV4dFBhZ2UgPSBjdXN0b21MYWJlbHMubmV4dFBhZ2U7XHJcbiAgY29uc3QgbGFiZWxQcmV2UGFnZSA9IGN1c3RvbUxhYmVscy5wcmV2UGFnZTtcclxuICBjb25zdCBsYWJlbEhhc05leHRQYWdlID0gY3VzdG9tTGFiZWxzLmhhc05leHRQYWdlO1xyXG4gIGNvbnN0IGxhYmVsSGFzUHJldlBhZ2UgPSBjdXN0b21MYWJlbHMuaGFzUHJldlBhZ2U7XHJcbiAgY29uc3QgbGFiZWxQYWdpbmdDb3VudGVyID0gY3VzdG9tTGFiZWxzLnBhZ2luZ0NvdW50ZXI7XHJcbiAgY29uc3QgbGFiZWxNZXRhID0gY3VzdG9tTGFiZWxzLm1ldGE7XHJcblxyXG4gIGxldCBwYWdlID0gcGFyc2VJbnQob3B0aW9ucy5wYWdlIHx8IDEsIDEwKSB8fCAxO1xyXG4gIGxldCBsaW1pdCA9XHJcbiAgICBwYXJzZUludChvcHRpb25zLmxpbWl0LCAxMCkgPiAwXHJcbiAgICAgID8gcGFyc2VJbnQob3B0aW9ucy5saW1pdCwgMTApXHJcbiAgICAgIDogZGVmYXVsdExpbWl0O1xyXG5cclxuICAvLyBjb25zdCBza2lwID0gKHBhZ2UgLSAxKSAqIGxpbWl0O1xyXG4gIGxldCBza2lwO1xyXG4gIGxldCBvZmZzZXQ7XHJcblxyXG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob3B0aW9ucywgXCJvZmZzZXRcIikpIHtcclxuICAgIG9mZnNldCA9IE1hdGguYWJzKHBhcnNlSW50KG9wdGlvbnMub2Zmc2V0LCAxMCkpO1xyXG4gICAgc2tpcCA9IG9mZnNldDtcclxuICB9IGVsc2UgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcInBhZ2VcIikpIHtcclxuICAgIHBhZ2UgPSBNYXRoLmFicyhwYXJzZUludChvcHRpb25zLnBhZ2UsIDEwKSkgfHwgMTtcclxuICAgIHNraXAgPSAocGFnZSAtIDEpICogbGltaXQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIG9mZnNldCA9IDA7XHJcbiAgICBwYWdlID0gMTtcclxuICAgIHNraXAgPSBvZmZzZXQ7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzb3J0ID0gb3B0aW9ucy5zb3J0O1xyXG5cclxuICBjb25zdCBhbGxvd0Rpc2tVc2UgPSBvcHRpb25zLmFsbG93RGlza1VzZSB8fCBmYWxzZTtcclxuICBjb25zdCBpc1BhZ2luYXRpb25FbmFibGVkID0gb3B0aW9ucy5wYWdpbmF0aW9uID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgbGV0IHEgPSB0aGlzLmFnZ3JlZ2F0ZSgpO1xyXG5cclxuICBpZiAocXVlcnkub3B0aW9ucykgcS5vcHRpb25zID0gcXVlcnkub3B0aW9ucztcclxuXHJcbiAgaWYgKGFsbG93RGlza1VzZSkge1xyXG4gICAgcS5hbGxvd0Rpc2tVc2UodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoc29ydCkge1xyXG4gICAgcGlwZWxpbmUucHVzaCh7ICRzb3J0OiBwYXJzZVNvcnQoc29ydCkgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjb25zdHJ1Y3RQaXBlbGluZXMoKSB7XHJcbiAgICBsZXQgY2xlYW5lZFBpcGVsaW5lID0gcGlwZWxpbmUuZmlsdGVyKFxyXG4gICAgICAoc3RhZ2UpID0+IHN0YWdlICE9PSBQUkVQQUdJTkFUSU9OX1BMQUNFSE9MREVSXHJcbiAgICApO1xyXG5cclxuICAgIGNvbnN0IGNvdW50UGlwZWxpbmUgPSBbLi4uY2xlYW5lZFBpcGVsaW5lLCB7ICRjb3VudDogXCJjb3VudFwiIH1dO1xyXG5cclxuICAgIGlmIChpc1BhZ2luYXRpb25FbmFibGVkKSB7XHJcbiAgICAgIGxldCBmb3VuZFByZXBhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgICAgY2xlYW5lZFBpcGVsaW5lID0gcGlwZWxpbmUuZmxhdE1hcCgoc3RhZ2UpID0+IHtcclxuICAgICAgICBpZiAoc3RhZ2UgPT09IFBSRVBBR0lOQVRJT05fUExBQ0VIT0xERVIpIHtcclxuICAgICAgICAgIGZvdW5kUHJlcGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICByZXR1cm4gW3sgJHNraXA6IHNraXAgfSwgeyAkbGltaXQ6IGxpbWl0IH1dO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhZ2U7XHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIWZvdW5kUHJlcGFnaW5hdGlvbikge1xyXG4gICAgICAgIGNsZWFuZWRQaXBlbGluZS5wdXNoKHsgJHNraXA6IHNraXAgfSwgeyAkbGltaXQ6IGxpbWl0IH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW2NsZWFuZWRQaXBlbGluZSwgY291bnRQaXBlbGluZV07XHJcbiAgfVxyXG5cclxuICBsZXQgcHJvbWlzZTtcclxuICBpZiAob3B0aW9ucy51c2VGYWNldCAmJiAhb3B0aW9ucy5jb3VudFF1ZXJ5KSB7XHJcbiAgICBsZXQgW3BpcGVsaW5lLCBjb3VudFBpcGVsaW5lXSA9IGNvbnN0cnVjdFBpcGVsaW5lcygpO1xyXG4gICAgY29uc3QgbWF0Y2ggPSBwaXBlbGluZVswXT8uJG1hdGNoO1xyXG4gICAgaWYgKG1hdGNoKSB7XHJcbiAgICAgIHBpcGVsaW5lLnNoaWZ0KCk7XHJcbiAgICAgIGNvdW50UGlwZWxpbmUuc2hpZnQoKTtcclxuICAgICAgcSA9IHEubWF0Y2gobWF0Y2gpO1xyXG4gICAgfVxyXG4gICAgcHJvbWlzZSA9IHFcclxuICAgICAgLmZhY2V0KHtcclxuICAgICAgICBkb2NzOiBwaXBlbGluZSxcclxuICAgICAgICBjb3VudDogY291bnRQaXBlbGluZSxcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKFt7IGRvY3MsIGNvdW50IH1dKSA9PiBbZG9jcywgY291bnRdKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgW3BpcGVsaW5lLCBjb3VudFBpcGVsaW5lXSA9IGNvbnN0cnVjdFBpcGVsaW5lcygpO1xyXG5cclxuICAgIGxldCBjb3VudFF1ZXJ5ID0gb3B0aW9ucy5jb3VudFF1ZXJ5XHJcbiAgICAgID8gb3B0aW9ucy5jb3VudFF1ZXJ5XHJcbiAgICAgIDogdGhpcy5hZ2dyZWdhdGUoY291bnRQaXBlbGluZSk7XHJcblxyXG4gICAgaWYgKG9wdGlvbnMuY291bnRRdWVyeSkge1xyXG4gICAgICBjb3VudFF1ZXJ5ID0gY291bnRRdWVyeS5ncm91cCh7XHJcbiAgICAgICAgX2lkOiBudWxsLFxyXG4gICAgICAgIGNvdW50OiB7XHJcbiAgICAgICAgICAkc3VtOiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhbGxvd0Rpc2tVc2UpIHtcclxuICAgICAgY291bnRRdWVyeS5hbGxvd0Rpc2tVc2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcSA9IHRoaXMuYWdncmVnYXRlKHBpcGVsaW5lKTtcclxuXHJcbiAgICBpZiAocXVlcnkub3B0aW9ucykgcS5vcHRpb25zID0gcXVlcnkub3B0aW9ucztcclxuXHJcbiAgICBwcm9taXNlID0gUHJvbWlzZS5hbGwoW3EuZXhlYygpLCBjb3VudFF1ZXJ5LmV4ZWMoKV0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHByb21pc2VcclxuICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZXMpIHtcclxuICAgICAgdmFyIGNvdW50ID0gdmFsdWVzWzFdWzBdID8gdmFsdWVzWzFdWzBdLmNvdW50IDogMDtcclxuXHJcbiAgICAgIGlmIChpc1BhZ2luYXRpb25FbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgIGxpbWl0ID0gY291bnQ7XHJcbiAgICAgICAgcGFnZSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBhZ2VzID0gTWF0aC5jZWlsKGNvdW50IC8gbGltaXQpIHx8IDE7XHJcblxyXG4gICAgICB2YXIgcmVzdWx0ID0ge1xyXG4gICAgICAgIFtsYWJlbERvY3NdOiB2YWx1ZXNbMF0sXHJcbiAgICAgIH07XHJcblxyXG4gICAgICB2YXIgbWV0YSA9IHtcclxuICAgICAgICBbbGFiZWxUb3RhbF06IGNvdW50LFxyXG4gICAgICAgIFtsYWJlbExpbWl0XTogbGltaXQsXHJcbiAgICAgICAgW2xhYmVsUGFnZV06IHBhZ2UsXHJcbiAgICAgICAgW2xhYmVsVG90YWxQYWdlc106IHBhZ2VzLFxyXG4gICAgICAgIFtsYWJlbFBhZ2luZ0NvdW50ZXJdOiAocGFnZSAtIDEpICogbGltaXQgKyAxLFxyXG4gICAgICAgIFtsYWJlbEhhc1ByZXZQYWdlXTogZmFsc2UsXHJcbiAgICAgICAgW2xhYmVsSGFzTmV4dFBhZ2VdOiBmYWxzZSxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2Ygb2Zmc2V0ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgcGFnZSA9IE1hdGguY2VpbCgob2Zmc2V0ICsgMSkgLyBsaW1pdCk7XHJcblxyXG4gICAgICAgIG1ldGEub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgIG1ldGFbbGFiZWxQYWdlXSA9IE1hdGguY2VpbCgob2Zmc2V0ICsgMSkgLyBsaW1pdCk7XHJcbiAgICAgICAgbWV0YVtsYWJlbFBhZ2luZ0NvdW50ZXJdID0gb2Zmc2V0ICsgMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0IHByZXYgcGFnZVxyXG4gICAgICBpZiAocGFnZSA+IDEpIHtcclxuICAgICAgICBtZXRhW2xhYmVsSGFzUHJldlBhZ2VdID0gdHJ1ZTtcclxuICAgICAgICBtZXRhW2xhYmVsUHJldlBhZ2VdID0gcGFnZSAtIDE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWV0YVtsYWJlbFByZXZQYWdlXSA9IG51bGw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldCBuZXh0IHBhZ2VcclxuICAgICAgaWYgKHBhZ2UgPCBwYWdlcykge1xyXG4gICAgICAgIG1ldGFbbGFiZWxIYXNOZXh0UGFnZV0gPSB0cnVlO1xyXG4gICAgICAgIG1ldGFbbGFiZWxOZXh0UGFnZV0gPSBwYWdlICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtZXRhW2xhYmVsTmV4dFBhZ2VdID0gbnVsbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGxhYmVsTWV0YSkge1xyXG4gICAgICAgIHJlc3VsdFtsYWJlbE1ldGFdID0gbWV0YTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXN1bHQgPSBPYmplY3QuYXNzaWduKHJlc3VsdCwgbWV0YSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCByZXN1bHQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGZ1bmN0aW9uIChyZWplY3QpIHtcclxuICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHJlamVjdCk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlamVjdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhZ2dyZWdhdGVQYWdpbmF0ZTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLlBSRVBBR0lOQVRJT05fUExBQ0VIT0xERVIgPSBQUkVQQUdJTkFUSU9OX1BMQUNFSE9MREVSO1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/mongoose-aggregate-paginate.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/mongoose-aggregate-paginate-v2/lib/util/index.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = {\r\n  ...__webpack_require__(/*! ./sort */ \"(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/sort.js\"),\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9uZ29vc2UtYWdncmVnYXRlLXBhZ2luYXRlLXYyL2xpYi91dGlsL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsS0FBSyxtQkFBTyxDQUFDLG9GQUFRO0FBQ3JCIiwic291cmNlcyI6WyIvVXNlcnMvdXNlcjFfMS9EZXNrdG9wL3dvcmtzcGFjZS9uZXdhcHAvbmV4dGpzLWJsb2cvbm9kZV9tb2R1bGVzL21vbmdvb3NlLWFnZ3JlZ2F0ZS1wYWdpbmF0ZS12Mi9saWIvdXRpbC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHtcclxuICAuLi5yZXF1aXJlKFwiLi9zb3J0XCIpLFxyXG59O1xyXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/sort.js":
/*!**********************************************************************!*\
  !*** ./node_modules/mongoose-aggregate-paginate-v2/lib/util/sort.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("function convertSortStringToObject(str) {\r\n  const sortObject = {};\r\n  str.split(\" \").forEach((field) => {\r\n    if (field.startsWith(\"-\")) {\r\n      sortObject[field.substring(1)] = -1;\r\n    } else {\r\n      sortObject[field] = 1;\r\n    }\r\n  });\r\n  return sortObject;\r\n}\r\n\r\nfunction convertSortArrayToObject(arr) {\r\n  const sortObject = {};\r\n  arr.forEach(([field, direction]) => {\r\n    sortObject[field] = direction === \"asc\" || direction === 1 ? 1 : -1;\r\n  });\r\n  return sortObject;\r\n}\r\n\r\nfunction parseSort(sort) {\r\n  if (typeof sort === \"string\") {\r\n    return convertSortStringToObject(sort);\r\n  }\r\n  if (Array.isArray(sort)) {\r\n    return convertSortArrayToObject(sort);\r\n  }\r\n  const sortObject = {};\r\n  for (const [field, direction] of Object.entries(sort)) {\r\n    sortObject[field] = direction === \"asc\" || direction === 1 ? 1 : -1;\r\n  }\r\n  return sortObject;\r\n}\r\n\r\nexports.parseSort = parseSort;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbW9uZ29vc2UtYWdncmVnYXRlLXBhZ2luYXRlLXYyL2xpYi91dGlsL3NvcnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIiLCJzb3VyY2VzIjpbIi9Vc2Vycy91c2VyMV8xL0Rlc2t0b3Avd29ya3NwYWNlL25ld2FwcC9uZXh0anMtYmxvZy9ub2RlX21vZHVsZXMvbW9uZ29vc2UtYWdncmVnYXRlLXBhZ2luYXRlLXYyL2xpYi91dGlsL3NvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udmVydFNvcnRTdHJpbmdUb09iamVjdChzdHIpIHtcclxuICBjb25zdCBzb3J0T2JqZWN0ID0ge307XHJcbiAgc3RyLnNwbGl0KFwiIFwiKS5mb3JFYWNoKChmaWVsZCkgPT4ge1xyXG4gICAgaWYgKGZpZWxkLnN0YXJ0c1dpdGgoXCItXCIpKSB7XHJcbiAgICAgIHNvcnRPYmplY3RbZmllbGQuc3Vic3RyaW5nKDEpXSA9IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc29ydE9iamVjdFtmaWVsZF0gPSAxO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBzb3J0T2JqZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb252ZXJ0U29ydEFycmF5VG9PYmplY3QoYXJyKSB7XHJcbiAgY29uc3Qgc29ydE9iamVjdCA9IHt9O1xyXG4gIGFyci5mb3JFYWNoKChbZmllbGQsIGRpcmVjdGlvbl0pID0+IHtcclxuICAgIHNvcnRPYmplY3RbZmllbGRdID0gZGlyZWN0aW9uID09PSBcImFzY1wiIHx8IGRpcmVjdGlvbiA9PT0gMSA/IDEgOiAtMTtcclxuICB9KTtcclxuICByZXR1cm4gc29ydE9iamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VTb3J0KHNvcnQpIHtcclxuICBpZiAodHlwZW9mIHNvcnQgPT09IFwic3RyaW5nXCIpIHtcclxuICAgIHJldHVybiBjb252ZXJ0U29ydFN0cmluZ1RvT2JqZWN0KHNvcnQpO1xyXG4gIH1cclxuICBpZiAoQXJyYXkuaXNBcnJheShzb3J0KSkge1xyXG4gICAgcmV0dXJuIGNvbnZlcnRTb3J0QXJyYXlUb09iamVjdChzb3J0KTtcclxuICB9XHJcbiAgY29uc3Qgc29ydE9iamVjdCA9IHt9O1xyXG4gIGZvciAoY29uc3QgW2ZpZWxkLCBkaXJlY3Rpb25dIG9mIE9iamVjdC5lbnRyaWVzKHNvcnQpKSB7XHJcbiAgICBzb3J0T2JqZWN0W2ZpZWxkXSA9IGRpcmVjdGlvbiA9PT0gXCJhc2NcIiB8fCBkaXJlY3Rpb24gPT09IDEgPyAxIDogLTE7XHJcbiAgfVxyXG4gIHJldHVybiBzb3J0T2JqZWN0O1xyXG59XHJcblxyXG5leHBvcnRzLnBhcnNlU29ydCA9IHBhcnNlU29ydDtcclxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/mongoose-aggregate-paginate-v2/lib/util/sort.js\n");

/***/ })

};
;