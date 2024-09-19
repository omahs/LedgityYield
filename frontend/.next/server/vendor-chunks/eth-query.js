/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/eth-query";
exports.ids = ["vendor-chunks/eth-query"];
exports.modules = {

/***/ "(ssr)/../node_modules/eth-query/index.js":
/*!******************************************!*\
  !*** ../node_modules/eth-query/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const extend = __webpack_require__(/*! xtend */ \"(ssr)/../node_modules/xtend/immutable.js\")\nconst createRandomId = __webpack_require__(/*! json-rpc-random-id */ \"(ssr)/../node_modules/json-rpc-random-id/index.js\")()\n\nmodule.exports = EthQuery\n\n\nfunction EthQuery(provider){\n  const self = this\n  self.currentProvider = provider\n}\n\n//\n// base queries\n//\n\n// default block\nEthQuery.prototype.getBalance =                          generateFnWithDefaultBlockFor(2, 'eth_getBalance')\nEthQuery.prototype.getCode =                             generateFnWithDefaultBlockFor(2, 'eth_getCode')\nEthQuery.prototype.getTransactionCount =                 generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount')\nEthQuery.prototype.getStorageAt =                        generateFnWithDefaultBlockFor(3, 'eth_getStorageAt')\nEthQuery.prototype.call =                                generateFnWithDefaultBlockFor(2, 'eth_call')\n// standard\nEthQuery.prototype.protocolVersion =                     generateFnFor('eth_protocolVersion')\nEthQuery.prototype.syncing =                             generateFnFor('eth_syncing')\nEthQuery.prototype.coinbase =                            generateFnFor('eth_coinbase')\nEthQuery.prototype.mining =                              generateFnFor('eth_mining')\nEthQuery.prototype.hashrate =                            generateFnFor('eth_hashrate')\nEthQuery.prototype.gasPrice =                            generateFnFor('eth_gasPrice')\nEthQuery.prototype.accounts =                            generateFnFor('eth_accounts')\nEthQuery.prototype.blockNumber =                         generateFnFor('eth_blockNumber')\nEthQuery.prototype.getBlockTransactionCountByHash =      generateFnFor('eth_getBlockTransactionCountByHash')\nEthQuery.prototype.getBlockTransactionCountByNumber =    generateFnFor('eth_getBlockTransactionCountByNumber')\nEthQuery.prototype.getUncleCountByBlockHash =            generateFnFor('eth_getUncleCountByBlockHash')\nEthQuery.prototype.getUncleCountByBlockNumber =          generateFnFor('eth_getUncleCountByBlockNumber')\nEthQuery.prototype.sign =                                generateFnFor('eth_sign')\nEthQuery.prototype.sendTransaction =                     generateFnFor('eth_sendTransaction')\nEthQuery.prototype.sendRawTransaction =                  generateFnFor('eth_sendRawTransaction')\nEthQuery.prototype.estimateGas =                         generateFnFor('eth_estimateGas')\nEthQuery.prototype.getBlockByHash =                      generateFnFor('eth_getBlockByHash')\nEthQuery.prototype.getBlockByNumber =                    generateFnFor('eth_getBlockByNumber')\nEthQuery.prototype.getTransactionByHash =                generateFnFor('eth_getTransactionByHash')\nEthQuery.prototype.getTransactionByBlockHashAndIndex =   generateFnFor('eth_getTransactionByBlockHashAndIndex')\nEthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex')\nEthQuery.prototype.getTransactionReceipt =               generateFnFor('eth_getTransactionReceipt')\nEthQuery.prototype.getUncleByBlockHashAndIndex =         generateFnFor('eth_getUncleByBlockHashAndIndex')\nEthQuery.prototype.getUncleByBlockNumberAndIndex =       generateFnFor('eth_getUncleByBlockNumberAndIndex')\nEthQuery.prototype.getCompilers =                        generateFnFor('eth_getCompilers')\nEthQuery.prototype.compileLLL =                          generateFnFor('eth_compileLLL')\nEthQuery.prototype.compileSolidity =                     generateFnFor('eth_compileSolidity')\nEthQuery.prototype.compileSerpent =                      generateFnFor('eth_compileSerpent')\nEthQuery.prototype.newFilter =                           generateFnFor('eth_newFilter')\nEthQuery.prototype.newBlockFilter =                      generateFnFor('eth_newBlockFilter')\nEthQuery.prototype.newPendingTransactionFilter =         generateFnFor('eth_newPendingTransactionFilter')\nEthQuery.prototype.uninstallFilter =                     generateFnFor('eth_uninstallFilter')\nEthQuery.prototype.getFilterChanges =                    generateFnFor('eth_getFilterChanges')\nEthQuery.prototype.getFilterLogs =                       generateFnFor('eth_getFilterLogs')\nEthQuery.prototype.getLogs =                             generateFnFor('eth_getLogs')\nEthQuery.prototype.getWork =                             generateFnFor('eth_getWork')\nEthQuery.prototype.submitWork =                          generateFnFor('eth_submitWork')\nEthQuery.prototype.submitHashrate =                      generateFnFor('eth_submitHashrate')\n\n// network level\n\nEthQuery.prototype.sendAsync = function(opts, cb){\n  const self = this\n  self.currentProvider.sendAsync(createPayload(opts), function(err, response){\n    if (!err && response.error) err = new Error('EthQuery - RPC Error - '+response.error.message)\n    if (err) return cb(err)\n    cb(null, response.result)\n  })\n}\n\n// util\n\nfunction generateFnFor(methodName){\n  return function(){\n    const self = this\n    var args = [].slice.call(arguments)\n    var cb = args.pop()\n    self.sendAsync({\n      method: methodName,\n      params: args,\n    }, cb)\n  }\n}\n\nfunction generateFnWithDefaultBlockFor(argCount, methodName){\n  return function(){\n    const self = this\n    var args = [].slice.call(arguments)\n    var cb = args.pop()\n    // set optional default block param\n    if (args.length < argCount) args.push('latest')\n    self.sendAsync({\n      method: methodName,\n      params: args,\n    }, cb)\n  }\n}\n\nfunction createPayload(data){\n  return extend({\n    // defaults\n    id: createRandomId(),\n    jsonrpc: '2.0',\n    params: [],\n    // user-specified\n  }, data)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2V0aC1xdWVyeS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxlQUFlLG1CQUFPLENBQUMsdURBQU87QUFDOUIsdUJBQXVCLG1CQUFPLENBQUMsNkVBQW9COztBQUVuRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWRnaXR5LXlpZWxkLWZyb250ZW5kLy4uL25vZGVfbW9kdWxlcy9ldGgtcXVlcnkvaW5kZXguanM/MmJmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBleHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG5jb25zdCBjcmVhdGVSYW5kb21JZCA9IHJlcXVpcmUoJ2pzb24tcnBjLXJhbmRvbS1pZCcpKClcblxubW9kdWxlLmV4cG9ydHMgPSBFdGhRdWVyeVxuXG5cbmZ1bmN0aW9uIEV0aFF1ZXJ5KHByb3ZpZGVyKXtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgc2VsZi5jdXJyZW50UHJvdmlkZXIgPSBwcm92aWRlclxufVxuXG4vL1xuLy8gYmFzZSBxdWVyaWVzXG4vL1xuXG4vLyBkZWZhdWx0IGJsb2NrXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0QmFsYW5jZSA9ICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuV2l0aERlZmF1bHRCbG9ja0ZvcigyLCAnZXRoX2dldEJhbGFuY2UnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldENvZGUgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbldpdGhEZWZhdWx0QmxvY2tGb3IoMiwgJ2V0aF9nZXRDb2RlJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRUcmFuc2FjdGlvbkNvdW50ID0gICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5XaXRoRGVmYXVsdEJsb2NrRm9yKDIsICdldGhfZ2V0VHJhbnNhY3Rpb25Db3VudCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0U3RvcmFnZUF0ID0gICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuV2l0aERlZmF1bHRCbG9ja0ZvcigzLCAnZXRoX2dldFN0b3JhZ2VBdCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuY2FsbCA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuV2l0aERlZmF1bHRCbG9ja0ZvcigyLCAnZXRoX2NhbGwnKVxuLy8gc3RhbmRhcmRcbkV0aFF1ZXJ5LnByb3RvdHlwZS5wcm90b2NvbFZlcnNpb24gPSAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9wcm90b2NvbFZlcnNpb24nKVxuRXRoUXVlcnkucHJvdG90eXBlLnN5bmNpbmcgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX3N5bmNpbmcnKVxuRXRoUXVlcnkucHJvdG90eXBlLmNvaW5iYXNlID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2NvaW5iYXNlJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5taW5pbmcgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9taW5pbmcnKVxuRXRoUXVlcnkucHJvdG90eXBlLmhhc2hyYXRlID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2hhc2hyYXRlJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nYXNQcmljZSA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nYXNQcmljZScpXG5FdGhRdWVyeS5wcm90b3R5cGUuYWNjb3VudHMgPSAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfYWNjb3VudHMnKVxuRXRoUXVlcnkucHJvdG90eXBlLmJsb2NrTnVtYmVyID0gICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2Jsb2NrTnVtYmVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRCbG9ja1RyYW5zYWN0aW9uQ291bnRCeUhhc2ggPSAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRCbG9ja1RyYW5zYWN0aW9uQ291bnRCeUhhc2gnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldEJsb2NrVHJhbnNhY3Rpb25Db3VudEJ5TnVtYmVyID0gICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldEJsb2NrVHJhbnNhY3Rpb25Db3VudEJ5TnVtYmVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRVbmNsZUNvdW50QnlCbG9ja0hhc2ggPSAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRVbmNsZUNvdW50QnlCbG9ja0hhc2gnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldFVuY2xlQ291bnRCeUJsb2NrTnVtYmVyID0gICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldFVuY2xlQ291bnRCeUJsb2NrTnVtYmVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zaWduID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zaWduJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zZW5kVHJhbnNhY3Rpb24gPSAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zZW5kVHJhbnNhY3Rpb24nKVxuRXRoUXVlcnkucHJvdG90eXBlLnNlbmRSYXdUcmFuc2FjdGlvbiA9ICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX3NlbmRSYXdUcmFuc2FjdGlvbicpXG5FdGhRdWVyeS5wcm90b3R5cGUuZXN0aW1hdGVHYXMgPSAgICAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZXN0aW1hdGVHYXMnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldEJsb2NrQnlIYXNoID0gICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldEJsb2NrQnlIYXNoJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRCbG9ja0J5TnVtYmVyID0gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRCbG9ja0J5TnVtYmVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRUcmFuc2FjdGlvbkJ5SGFzaCA9ICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRUcmFuc2FjdGlvbkJ5SGFzaCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25CeUJsb2NrSGFzaEFuZEluZGV4ID0gICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VHJhbnNhY3Rpb25CeUJsb2NrSGFzaEFuZEluZGV4JylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRUcmFuc2FjdGlvbkJ5QmxvY2tOdW1iZXJBbmRJbmRleCA9IGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRUcmFuc2FjdGlvbkJ5QmxvY2tOdW1iZXJBbmRJbmRleCcpXG5FdGhRdWVyeS5wcm90b3R5cGUuZ2V0VHJhbnNhY3Rpb25SZWNlaXB0ID0gICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfZ2V0VHJhbnNhY3Rpb25SZWNlaXB0JylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRVbmNsZUJ5QmxvY2tIYXNoQW5kSW5kZXggPSAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRVbmNsZUJ5QmxvY2tIYXNoQW5kSW5kZXgnKVxuRXRoUXVlcnkucHJvdG90eXBlLmdldFVuY2xlQnlCbG9ja051bWJlckFuZEluZGV4ID0gICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2dldFVuY2xlQnlCbG9ja051bWJlckFuZEluZGV4JylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRDb21waWxlcnMgPSAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRDb21waWxlcnMnKVxuRXRoUXVlcnkucHJvdG90eXBlLmNvbXBpbGVMTEwgPSAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2NvbXBpbGVMTEwnKVxuRXRoUXVlcnkucHJvdG90eXBlLmNvbXBpbGVTb2xpZGl0eSA9ICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX2NvbXBpbGVTb2xpZGl0eScpXG5FdGhRdWVyeS5wcm90b3R5cGUuY29tcGlsZVNlcnBlbnQgPSAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfY29tcGlsZVNlcnBlbnQnKVxuRXRoUXVlcnkucHJvdG90eXBlLm5ld0ZpbHRlciA9ICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX25ld0ZpbHRlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUubmV3QmxvY2tGaWx0ZXIgPSAgICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfbmV3QmxvY2tGaWx0ZXInKVxuRXRoUXVlcnkucHJvdG90eXBlLm5ld1BlbmRpbmdUcmFuc2FjdGlvbkZpbHRlciA9ICAgICAgICAgZ2VuZXJhdGVGbkZvcignZXRoX25ld1BlbmRpbmdUcmFuc2FjdGlvbkZpbHRlcicpXG5FdGhRdWVyeS5wcm90b3R5cGUudW5pbnN0YWxsRmlsdGVyID0gICAgICAgICAgICAgICAgICAgICBnZW5lcmF0ZUZuRm9yKCdldGhfdW5pbnN0YWxsRmlsdGVyJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRGaWx0ZXJDaGFuZ2VzID0gICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRGaWx0ZXJDaGFuZ2VzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRGaWx0ZXJMb2dzID0gICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRGaWx0ZXJMb2dzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRMb2dzID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRMb2dzJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5nZXRXb3JrID0gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9nZXRXb3JrJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zdWJtaXRXb3JrID0gICAgICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zdWJtaXRXb3JrJylcbkV0aFF1ZXJ5LnByb3RvdHlwZS5zdWJtaXRIYXNocmF0ZSA9ICAgICAgICAgICAgICAgICAgICAgIGdlbmVyYXRlRm5Gb3IoJ2V0aF9zdWJtaXRIYXNocmF0ZScpXG5cbi8vIG5ldHdvcmsgbGV2ZWxcblxuRXRoUXVlcnkucHJvdG90eXBlLnNlbmRBc3luYyA9IGZ1bmN0aW9uKG9wdHMsIGNiKXtcbiAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgc2VsZi5jdXJyZW50UHJvdmlkZXIuc2VuZEFzeW5jKGNyZWF0ZVBheWxvYWQob3B0cyksIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2Upe1xuICAgIGlmICghZXJyICYmIHJlc3BvbnNlLmVycm9yKSBlcnIgPSBuZXcgRXJyb3IoJ0V0aFF1ZXJ5IC0gUlBDIEVycm9yIC0gJytyZXNwb25zZS5lcnJvci5tZXNzYWdlKVxuICAgIGlmIChlcnIpIHJldHVybiBjYihlcnIpXG4gICAgY2IobnVsbCwgcmVzcG9uc2UucmVzdWx0KVxuICB9KVxufVxuXG4vLyB1dGlsXG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm5Gb3IobWV0aG9kTmFtZSl7XG4gIHJldHVybiBmdW5jdGlvbigpe1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzXG4gICAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICB2YXIgY2IgPSBhcmdzLnBvcCgpXG4gICAgc2VsZi5zZW5kQXN5bmMoe1xuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgcGFyYW1zOiBhcmdzLFxuICAgIH0sIGNiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRm5XaXRoRGVmYXVsdEJsb2NrRm9yKGFyZ0NvdW50LCBtZXRob2ROYW1lKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCl7XG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgIHZhciBjYiA9IGFyZ3MucG9wKClcbiAgICAvLyBzZXQgb3B0aW9uYWwgZGVmYXVsdCBibG9jayBwYXJhbVxuICAgIGlmIChhcmdzLmxlbmd0aCA8IGFyZ0NvdW50KSBhcmdzLnB1c2goJ2xhdGVzdCcpXG4gICAgc2VsZi5zZW5kQXN5bmMoe1xuICAgICAgbWV0aG9kOiBtZXRob2ROYW1lLFxuICAgICAgcGFyYW1zOiBhcmdzLFxuICAgIH0sIGNiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBheWxvYWQoZGF0YSl7XG4gIHJldHVybiBleHRlbmQoe1xuICAgIC8vIGRlZmF1bHRzXG4gICAgaWQ6IGNyZWF0ZVJhbmRvbUlkKCksXG4gICAganNvbnJwYzogJzIuMCcsXG4gICAgcGFyYW1zOiBbXSxcbiAgICAvLyB1c2VyLXNwZWNpZmllZFxuICB9LCBkYXRhKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/eth-query/index.js\n");

/***/ })

};
;