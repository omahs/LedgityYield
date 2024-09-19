"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/detect-browser";
exports.ids = ["vendor-chunks/detect-browser"];
exports.modules = {

/***/ "(ssr)/../node_modules/detect-browser/es/index.js":
/*!**************************************************!*\
  !*** ../node_modules/detect-browser/es/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BotInfo: () => (/* binding */ BotInfo),\n/* harmony export */   BrowserInfo: () => (/* binding */ BrowserInfo),\n/* harmony export */   NodeInfo: () => (/* binding */ NodeInfo),\n/* harmony export */   ReactNativeInfo: () => (/* binding */ ReactNativeInfo),\n/* harmony export */   SearchBotDeviceInfo: () => (/* binding */ SearchBotDeviceInfo),\n/* harmony export */   browserName: () => (/* binding */ browserName),\n/* harmony export */   detect: () => (/* binding */ detect),\n/* harmony export */   detectOS: () => (/* binding */ detectOS),\n/* harmony export */   getNodeVersion: () => (/* binding */ getNodeVersion),\n/* harmony export */   parseUserAgent: () => (/* binding */ parseUserAgent)\n/* harmony export */ });\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nvar BrowserInfo = /** @class */ (function () {\n    function BrowserInfo(name, version, os) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.type = 'browser';\n    }\n    return BrowserInfo;\n}());\n\nvar NodeInfo = /** @class */ (function () {\n    function NodeInfo(version) {\n        this.version = version;\n        this.type = 'node';\n        this.name = 'node';\n        this.os = process.platform;\n    }\n    return NodeInfo;\n}());\n\nvar SearchBotDeviceInfo = /** @class */ (function () {\n    function SearchBotDeviceInfo(name, version, os, bot) {\n        this.name = name;\n        this.version = version;\n        this.os = os;\n        this.bot = bot;\n        this.type = 'bot-device';\n    }\n    return SearchBotDeviceInfo;\n}());\n\nvar BotInfo = /** @class */ (function () {\n    function BotInfo() {\n        this.type = 'bot';\n        this.bot = true; // NOTE: deprecated test name instead\n        this.name = 'bot';\n        this.version = null;\n        this.os = null;\n    }\n    return BotInfo;\n}());\n\nvar ReactNativeInfo = /** @class */ (function () {\n    function ReactNativeInfo() {\n        this.type = 'react-native';\n        this.name = 'react-native';\n        this.version = null;\n        this.os = null;\n    }\n    return ReactNativeInfo;\n}());\n\n// tslint:disable-next-line:max-line-length\nvar SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;\nvar SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\\ Jeeves\\/Teoma|ia_archiver)/;\nvar REQUIRED_VERSION_PARTS = 3;\nvar userAgentRules = [\n    ['aol', /AOLShield\\/([0-9\\._]+)/],\n    ['edge', /Edge\\/([0-9\\._]+)/],\n    ['edge-ios', /EdgiOS\\/([0-9\\._]+)/],\n    ['yandexbrowser', /YaBrowser\\/([0-9\\._]+)/],\n    ['kakaotalk', /KAKAOTALK\\s([0-9\\.]+)/],\n    ['samsung', /SamsungBrowser\\/([0-9\\.]+)/],\n    ['silk', /\\bSilk\\/([0-9._-]+)\\b/],\n    ['miui', /MiuiBrowser\\/([0-9\\.]+)$/],\n    ['beaker', /BeakerBrowser\\/([0-9\\.]+)/],\n    ['edge-chromium', /EdgA?\\/([0-9\\.]+)/],\n    [\n        'chromium-webview',\n        /(?!Chrom.*OPR)wv\\).*Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/,\n    ],\n    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\\/([0-9\\.]+)(:?\\s|$)/],\n    ['phantomjs', /PhantomJS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['crios', /CriOS\\/([0-9\\.]+)(:?\\s|$)/],\n    ['firefox', /Firefox\\/([0-9\\.]+)(?:\\s|$)/],\n    ['fxios', /FxiOS\\/([0-9\\.]+)/],\n    ['opera-mini', /Opera Mini.*Version\\/([0-9\\.]+)/],\n    ['opera', /Opera\\/([0-9\\.]+)(?:\\s|$)/],\n    ['opera', /OPR\\/([0-9\\.]+)(:?\\s|$)/],\n    ['pie', /^Microsoft Pocket Internet Explorer\\/(\\d+\\.\\d+)$/],\n    ['pie', /^Mozilla\\/\\d\\.\\d+\\s\\(compatible;\\s(?:MSP?IE|MSInternet Explorer) (\\d+\\.\\d+);.*Windows CE.*\\)$/],\n    ['netfront', /^Mozilla\\/\\d\\.\\d+.*NetFront\\/(\\d.\\d)/],\n    ['ie', /Trident\\/7\\.0.*rv\\:([0-9\\.]+).*\\).*Gecko$/],\n    ['ie', /MSIE\\s([0-9\\.]+);.*Trident\\/[4-7].0/],\n    ['ie', /MSIE\\s(7\\.0)/],\n    ['bb10', /BB10;\\sTouch.*Version\\/([0-9\\.]+)/],\n    ['android', /Android\\s([0-9\\.]+)/],\n    ['ios', /Version\\/([0-9\\._]+).*Mobile.*Safari.*/],\n    ['safari', /Version\\/([0-9\\._]+).*Safari/],\n    ['facebook', /FB[AS]V\\/([0-9\\.]+)/],\n    ['instagram', /Instagram\\s([0-9\\.]+)/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Mobile/],\n    ['ios-webview', /AppleWebKit\\/([0-9\\.]+).*Gecko\\)$/],\n    ['curl', /^curl\\/([0-9\\.]+)$/],\n    ['searchbot', SEARCHBOX_UA_REGEX],\n];\nvar operatingSystemRules = [\n    ['iOS', /iP(hone|od|ad)/],\n    ['Android OS', /Android/],\n    ['BlackBerry OS', /BlackBerry|BB10/],\n    ['Windows Mobile', /IEMobile/],\n    ['Amazon OS', /Kindle/],\n    ['Windows 3.11', /Win16/],\n    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],\n    ['Windows 98', /(Windows 98)|(Win98)/],\n    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],\n    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],\n    ['Windows Server 2003', /(Windows NT 5.2)/],\n    ['Windows Vista', /(Windows NT 6.0)/],\n    ['Windows 7', /(Windows NT 6.1)/],\n    ['Windows 8', /(Windows NT 6.2)/],\n    ['Windows 8.1', /(Windows NT 6.3)/],\n    ['Windows 10', /(Windows NT 10.0)/],\n    ['Windows ME', /Windows ME/],\n    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],\n    ['Open BSD', /OpenBSD/],\n    ['Sun OS', /SunOS/],\n    ['Chrome OS', /CrOS/],\n    ['Linux', /(Linux)|(X11)/],\n    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],\n    ['QNX', /QNX/],\n    ['BeOS', /BeOS/],\n    ['OS/2', /OS\\/2/],\n];\nfunction detect(userAgent) {\n    if (!!userAgent) {\n        return parseUserAgent(userAgent);\n    }\n    if (typeof document === 'undefined' &&\n        typeof navigator !== 'undefined' &&\n        navigator.product === 'ReactNative') {\n        return new ReactNativeInfo();\n    }\n    if (typeof navigator !== 'undefined') {\n        return parseUserAgent(navigator.userAgent);\n    }\n    return getNodeVersion();\n}\nfunction matchUserAgent(ua) {\n    // opted for using reduce here rather than Array#first with a regex.test call\n    // this is primarily because using the reduce we only perform the regex\n    // execution once rather than once for the test and for the exec again below\n    // probably something that needs to be benchmarked though\n    return (ua !== '' &&\n        userAgentRules.reduce(function (matched, _a) {\n            var browser = _a[0], regex = _a[1];\n            if (matched) {\n                return matched;\n            }\n            var uaMatch = regex.exec(ua);\n            return !!uaMatch && [browser, uaMatch];\n        }, false));\n}\nfunction browserName(ua) {\n    var data = matchUserAgent(ua);\n    return data ? data[0] : null;\n}\nfunction parseUserAgent(ua) {\n    var matchedRule = matchUserAgent(ua);\n    if (!matchedRule) {\n        return null;\n    }\n    var name = matchedRule[0], match = matchedRule[1];\n    if (name === 'searchbot') {\n        return new BotInfo();\n    }\n    // Do not use RegExp for split operation as some browser do not support it (See: http://blog.stevenlevithan.com/archives/cross-browser-split)\n    var versionParts = match[1] && match[1].split('.').join('_').split('_').slice(0, 3);\n    if (versionParts) {\n        if (versionParts.length < REQUIRED_VERSION_PARTS) {\n            versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);\n        }\n    }\n    else {\n        versionParts = [];\n    }\n    var version = versionParts.join('.');\n    var os = detectOS(ua);\n    var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua);\n    if (searchBotMatch && searchBotMatch[1]) {\n        return new SearchBotDeviceInfo(name, version, os, searchBotMatch[1]);\n    }\n    return new BrowserInfo(name, version, os);\n}\nfunction detectOS(ua) {\n    for (var ii = 0, count = operatingSystemRules.length; ii < count; ii++) {\n        var _a = operatingSystemRules[ii], os = _a[0], regex = _a[1];\n        var match = regex.exec(ua);\n        if (match) {\n            return os;\n        }\n    }\n    return null;\n}\nfunction getNodeVersion() {\n    var isNode = typeof process !== 'undefined' && process.version;\n    return isNode ? new NodeInfo(process.version.slice(1)) : null;\n}\nfunction createVersionParts(count) {\n    var output = [];\n    for (var ii = 0; ii < count; ii++) {\n        output.push('0');\n    }\n    return output;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL2RldGVjdC1icm93c2VyL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBcUIsU0FBSSxJQUFJLFNBQUk7QUFDakMsNkVBQTZFLE9BQU87QUFDcEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNzQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNtQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQzhCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNrQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUMwQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw0Q0FBNEM7QUFDekY7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQLDBEQUEwRCxZQUFZO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsWUFBWTtBQUNqQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlZGdpdHkteWllbGQtZnJvbnRlbmQvLi4vbm9kZV9tb2R1bGVzL2RldGVjdC1icm93c2VyL2VzL2luZGV4LmpzPzBlYWYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xudmFyIEJyb3dzZXJJbmZvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyb3dzZXJJbmZvKG5hbWUsIHZlcnNpb24sIG9zKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMub3MgPSBvcztcbiAgICAgICAgdGhpcy50eXBlID0gJ2Jyb3dzZXInO1xuICAgIH1cbiAgICByZXR1cm4gQnJvd3NlckluZm87XG59KCkpO1xuZXhwb3J0IHsgQnJvd3NlckluZm8gfTtcbnZhciBOb2RlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlSW5mbyh2ZXJzaW9uKSB7XG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgIHRoaXMudHlwZSA9ICdub2RlJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ25vZGUnO1xuICAgICAgICB0aGlzLm9zID0gcHJvY2Vzcy5wbGF0Zm9ybTtcbiAgICB9XG4gICAgcmV0dXJuIE5vZGVJbmZvO1xufSgpKTtcbmV4cG9ydCB7IE5vZGVJbmZvIH07XG52YXIgU2VhcmNoQm90RGV2aWNlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBTZWFyY2hCb3REZXZpY2VJbmZvKG5hbWUsIHZlcnNpb24sIG9zLCBib3QpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICAgICAgdGhpcy5vcyA9IG9zO1xuICAgICAgICB0aGlzLmJvdCA9IGJvdDtcbiAgICAgICAgdGhpcy50eXBlID0gJ2JvdC1kZXZpY2UnO1xuICAgIH1cbiAgICByZXR1cm4gU2VhcmNoQm90RGV2aWNlSW5mbztcbn0oKSk7XG5leHBvcnQgeyBTZWFyY2hCb3REZXZpY2VJbmZvIH07XG52YXIgQm90SW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCb3RJbmZvKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAnYm90JztcbiAgICAgICAgdGhpcy5ib3QgPSB0cnVlOyAvLyBOT1RFOiBkZXByZWNhdGVkIHRlc3QgbmFtZSBpbnN0ZWFkXG4gICAgICAgIHRoaXMubmFtZSA9ICdib3QnO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBudWxsO1xuICAgICAgICB0aGlzLm9zID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIEJvdEluZm87XG59KCkpO1xuZXhwb3J0IHsgQm90SW5mbyB9O1xudmFyIFJlYWN0TmF0aXZlSW5mbyA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZWFjdE5hdGl2ZUluZm8oKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdyZWFjdC1uYXRpdmUnO1xuICAgICAgICB0aGlzLm5hbWUgPSAncmVhY3QtbmF0aXZlJztcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcyA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiBSZWFjdE5hdGl2ZUluZm87XG59KCkpO1xuZXhwb3J0IHsgUmVhY3ROYXRpdmVJbmZvIH07XG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG52YXIgU0VBUkNIQk9YX1VBX1JFR0VYID0gL2FsZXhhfGJvdHxjcmF3bChlcnxpbmcpfGZhY2Vib29rZXh0ZXJuYWxoaXR8ZmVlZGJ1cm5lcnxnb29nbGUgd2ViIHByZXZpZXd8bmFnaW9zfHBvc3RyYW5rfHBpbmdkb218c2x1cnB8c3BpZGVyfHlhaG9vIXx5YW5kZXgvO1xudmFyIFNFQVJDSEJPVF9PU19SRUdFWCA9IC8obnVoa3xjdXJsfEdvb2dsZWJvdHxZYW1teWJvdHxPcGVuYm90fFNsdXJwfE1TTkJvdHxBc2tcXCBKZWV2ZXNcXC9UZW9tYXxpYV9hcmNoaXZlcikvO1xudmFyIFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMgPSAzO1xudmFyIHVzZXJBZ2VudFJ1bGVzID0gW1xuICAgIFsnYW9sJywgL0FPTFNoaWVsZFxcLyhbMC05XFwuX10rKS9dLFxuICAgIFsnZWRnZScsIC9FZGdlXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydlZGdlLWlvcycsIC9FZGdpT1NcXC8oWzAtOVxcLl9dKykvXSxcbiAgICBbJ3lhbmRleGJyb3dzZXInLCAvWWFCcm93c2VyXFwvKFswLTlcXC5fXSspL10sXG4gICAgWydrYWthb3RhbGsnLCAvS0FLQU9UQUxLXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ3NhbXN1bmcnLCAvU2Ftc3VuZ0Jyb3dzZXJcXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnc2lsaycsIC9cXGJTaWxrXFwvKFswLTkuXy1dKylcXGIvXSxcbiAgICBbJ21pdWknLCAvTWl1aUJyb3dzZXJcXC8oWzAtOVxcLl0rKSQvXSxcbiAgICBbJ2JlYWtlcicsIC9CZWFrZXJCcm93c2VyXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2VkZ2UtY2hyb21pdW0nLCAvRWRnQT9cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFtcbiAgICAgICAgJ2Nocm9taXVtLXdlYnZpZXcnLFxuICAgICAgICAvKD8hQ2hyb20uKk9QUil3dlxcKS4qQ2hyb20oPzplfGl1bSlcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS8sXG4gICAgXSxcbiAgICBbJ2Nocm9tZScsIC8oPyFDaHJvbS4qT1BSKUNocm9tKD86ZXxpdW0pXFwvKFswLTlcXC5dKykoOj9cXHN8JCkvXSxcbiAgICBbJ3BoYW50b21qcycsIC9QaGFudG9tSlNcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsnY3Jpb3MnLCAvQ3JpT1NcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsnZmlyZWZveCcsIC9GaXJlZm94XFwvKFswLTlcXC5dKykoPzpcXHN8JCkvXSxcbiAgICBbJ2Z4aW9zJywgL0Z4aU9TXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ29wZXJhLW1pbmknLCAvT3BlcmEgTWluaS4qVmVyc2lvblxcLyhbMC05XFwuXSspL10sXG4gICAgWydvcGVyYScsIC9PcGVyYVxcLyhbMC05XFwuXSspKD86XFxzfCQpL10sXG4gICAgWydvcGVyYScsIC9PUFJcXC8oWzAtOVxcLl0rKSg6P1xcc3wkKS9dLFxuICAgIFsncGllJywgL15NaWNyb3NvZnQgUG9ja2V0IEludGVybmV0IEV4cGxvcmVyXFwvKFxcZCtcXC5cXGQrKSQvXSxcbiAgICBbJ3BpZScsIC9eTW96aWxsYVxcL1xcZFxcLlxcZCtcXHNcXChjb21wYXRpYmxlO1xccyg/Ok1TUD9JRXxNU0ludGVybmV0IEV4cGxvcmVyKSAoXFxkK1xcLlxcZCspOy4qV2luZG93cyBDRS4qXFwpJC9dLFxuICAgIFsnbmV0ZnJvbnQnLCAvXk1vemlsbGFcXC9cXGRcXC5cXGQrLipOZXRGcm9udFxcLyhcXGQuXFxkKS9dLFxuICAgIFsnaWUnLCAvVHJpZGVudFxcLzdcXC4wLipydlxcOihbMC05XFwuXSspLipcXCkuKkdlY2tvJC9dLFxuICAgIFsnaWUnLCAvTVNJRVxccyhbMC05XFwuXSspOy4qVHJpZGVudFxcL1s0LTddLjAvXSxcbiAgICBbJ2llJywgL01TSUVcXHMoN1xcLjApL10sXG4gICAgWydiYjEwJywgL0JCMTA7XFxzVG91Y2guKlZlcnNpb25cXC8oWzAtOVxcLl0rKS9dLFxuICAgIFsnYW5kcm9pZCcsIC9BbmRyb2lkXFxzKFswLTlcXC5dKykvXSxcbiAgICBbJ2lvcycsIC9WZXJzaW9uXFwvKFswLTlcXC5fXSspLipNb2JpbGUuKlNhZmFyaS4qL10sXG4gICAgWydzYWZhcmknLCAvVmVyc2lvblxcLyhbMC05XFwuX10rKS4qU2FmYXJpL10sXG4gICAgWydmYWNlYm9vaycsIC9GQltBU11WXFwvKFswLTlcXC5dKykvXSxcbiAgICBbJ2luc3RhZ3JhbScsIC9JbnN0YWdyYW1cXHMoWzAtOVxcLl0rKS9dLFxuICAgIFsnaW9zLXdlYnZpZXcnLCAvQXBwbGVXZWJLaXRcXC8oWzAtOVxcLl0rKS4qTW9iaWxlL10sXG4gICAgWydpb3Mtd2VidmlldycsIC9BcHBsZVdlYktpdFxcLyhbMC05XFwuXSspLipHZWNrb1xcKSQvXSxcbiAgICBbJ2N1cmwnLCAvXmN1cmxcXC8oWzAtOVxcLl0rKSQvXSxcbiAgICBbJ3NlYXJjaGJvdCcsIFNFQVJDSEJPWF9VQV9SRUdFWF0sXG5dO1xudmFyIG9wZXJhdGluZ1N5c3RlbVJ1bGVzID0gW1xuICAgIFsnaU9TJywgL2lQKGhvbmV8b2R8YWQpL10sXG4gICAgWydBbmRyb2lkIE9TJywgL0FuZHJvaWQvXSxcbiAgICBbJ0JsYWNrQmVycnkgT1MnLCAvQmxhY2tCZXJyeXxCQjEwL10sXG4gICAgWydXaW5kb3dzIE1vYmlsZScsIC9JRU1vYmlsZS9dLFxuICAgIFsnQW1hem9uIE9TJywgL0tpbmRsZS9dLFxuICAgIFsnV2luZG93cyAzLjExJywgL1dpbjE2L10sXG4gICAgWydXaW5kb3dzIDk1JywgLyhXaW5kb3dzIDk1KXwoV2luOTUpfChXaW5kb3dzXzk1KS9dLFxuICAgIFsnV2luZG93cyA5OCcsIC8oV2luZG93cyA5OCl8KFdpbjk4KS9dLFxuICAgIFsnV2luZG93cyAyMDAwJywgLyhXaW5kb3dzIE5UIDUuMCl8KFdpbmRvd3MgMjAwMCkvXSxcbiAgICBbJ1dpbmRvd3MgWFAnLCAvKFdpbmRvd3MgTlQgNS4xKXwoV2luZG93cyBYUCkvXSxcbiAgICBbJ1dpbmRvd3MgU2VydmVyIDIwMDMnLCAvKFdpbmRvd3MgTlQgNS4yKS9dLFxuICAgIFsnV2luZG93cyBWaXN0YScsIC8oV2luZG93cyBOVCA2LjApL10sXG4gICAgWydXaW5kb3dzIDcnLCAvKFdpbmRvd3MgTlQgNi4xKS9dLFxuICAgIFsnV2luZG93cyA4JywgLyhXaW5kb3dzIE5UIDYuMikvXSxcbiAgICBbJ1dpbmRvd3MgOC4xJywgLyhXaW5kb3dzIE5UIDYuMykvXSxcbiAgICBbJ1dpbmRvd3MgMTAnLCAvKFdpbmRvd3MgTlQgMTAuMCkvXSxcbiAgICBbJ1dpbmRvd3MgTUUnLCAvV2luZG93cyBNRS9dLFxuICAgIFsnV2luZG93cyBDRScsIC9XaW5kb3dzIENFfFdpbkNFfE1pY3Jvc29mdCBQb2NrZXQgSW50ZXJuZXQgRXhwbG9yZXIvXSxcbiAgICBbJ09wZW4gQlNEJywgL09wZW5CU0QvXSxcbiAgICBbJ1N1biBPUycsIC9TdW5PUy9dLFxuICAgIFsnQ2hyb21lIE9TJywgL0NyT1MvXSxcbiAgICBbJ0xpbnV4JywgLyhMaW51eCl8KFgxMSkvXSxcbiAgICBbJ01hYyBPUycsIC8oTWFjX1Bvd2VyUEMpfChNYWNpbnRvc2gpL10sXG4gICAgWydRTlgnLCAvUU5YL10sXG4gICAgWydCZU9TJywgL0JlT1MvXSxcbiAgICBbJ09TLzInLCAvT1NcXC8yL10sXG5dO1xuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdCh1c2VyQWdlbnQpIHtcbiAgICBpZiAoISF1c2VyQWdlbnQpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlVXNlckFnZW50KHVzZXJBZ2VudCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVhY3ROYXRpdmVJbmZvKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gcGFyc2VVc2VyQWdlbnQobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgfVxuICAgIHJldHVybiBnZXROb2RlVmVyc2lvbigpO1xufVxuZnVuY3Rpb24gbWF0Y2hVc2VyQWdlbnQodWEpIHtcbiAgICAvLyBvcHRlZCBmb3IgdXNpbmcgcmVkdWNlIGhlcmUgcmF0aGVyIHRoYW4gQXJyYXkjZmlyc3Qgd2l0aCBhIHJlZ2V4LnRlc3QgY2FsbFxuICAgIC8vIHRoaXMgaXMgcHJpbWFyaWx5IGJlY2F1c2UgdXNpbmcgdGhlIHJlZHVjZSB3ZSBvbmx5IHBlcmZvcm0gdGhlIHJlZ2V4XG4gICAgLy8gZXhlY3V0aW9uIG9uY2UgcmF0aGVyIHRoYW4gb25jZSBmb3IgdGhlIHRlc3QgYW5kIGZvciB0aGUgZXhlYyBhZ2FpbiBiZWxvd1xuICAgIC8vIHByb2JhYmx5IHNvbWV0aGluZyB0aGF0IG5lZWRzIHRvIGJlIGJlbmNobWFya2VkIHRob3VnaFxuICAgIHJldHVybiAodWEgIT09ICcnICYmXG4gICAgICAgIHVzZXJBZ2VudFJ1bGVzLnJlZHVjZShmdW5jdGlvbiAobWF0Y2hlZCwgX2EpIHtcbiAgICAgICAgICAgIHZhciBicm93c2VyID0gX2FbMF0sIHJlZ2V4ID0gX2FbMV07XG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHVhTWF0Y2ggPSByZWdleC5leGVjKHVhKTtcbiAgICAgICAgICAgIHJldHVybiAhIXVhTWF0Y2ggJiYgW2Jyb3dzZXIsIHVhTWF0Y2hdO1xuICAgICAgICB9LCBmYWxzZSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGJyb3dzZXJOYW1lKHVhKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaFVzZXJBZ2VudCh1YSk7XG4gICAgcmV0dXJuIGRhdGEgPyBkYXRhWzBdIDogbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVVzZXJBZ2VudCh1YSkge1xuICAgIHZhciBtYXRjaGVkUnVsZSA9IG1hdGNoVXNlckFnZW50KHVhKTtcbiAgICBpZiAoIW1hdGNoZWRSdWxlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgbmFtZSA9IG1hdGNoZWRSdWxlWzBdLCBtYXRjaCA9IG1hdGNoZWRSdWxlWzFdO1xuICAgIGlmIChuYW1lID09PSAnc2VhcmNoYm90Jykge1xuICAgICAgICByZXR1cm4gbmV3IEJvdEluZm8oKTtcbiAgICB9XG4gICAgLy8gRG8gbm90IHVzZSBSZWdFeHAgZm9yIHNwbGl0IG9wZXJhdGlvbiBhcyBzb21lIGJyb3dzZXIgZG8gbm90IHN1cHBvcnQgaXQgKFNlZTogaHR0cDovL2Jsb2cuc3RldmVubGV2aXRoYW4uY29tL2FyY2hpdmVzL2Nyb3NzLWJyb3dzZXItc3BsaXQpXG4gICAgdmFyIHZlcnNpb25QYXJ0cyA9IG1hdGNoWzFdICYmIG1hdGNoWzFdLnNwbGl0KCcuJykuam9pbignXycpLnNwbGl0KCdfJykuc2xpY2UoMCwgMyk7XG4gICAgaWYgKHZlcnNpb25QYXJ0cykge1xuICAgICAgICBpZiAodmVyc2lvblBhcnRzLmxlbmd0aCA8IFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMpIHtcbiAgICAgICAgICAgIHZlcnNpb25QYXJ0cyA9IF9fc3ByZWFkQXJyYXkoX19zcHJlYWRBcnJheShbXSwgdmVyc2lvblBhcnRzLCB0cnVlKSwgY3JlYXRlVmVyc2lvblBhcnRzKFJFUVVJUkVEX1ZFUlNJT05fUEFSVFMgLSB2ZXJzaW9uUGFydHMubGVuZ3RoKSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZlcnNpb25QYXJ0cyA9IFtdO1xuICAgIH1cbiAgICB2YXIgdmVyc2lvbiA9IHZlcnNpb25QYXJ0cy5qb2luKCcuJyk7XG4gICAgdmFyIG9zID0gZGV0ZWN0T1ModWEpO1xuICAgIHZhciBzZWFyY2hCb3RNYXRjaCA9IFNFQVJDSEJPVF9PU19SRUdFWC5leGVjKHVhKTtcbiAgICBpZiAoc2VhcmNoQm90TWF0Y2ggJiYgc2VhcmNoQm90TWF0Y2hbMV0pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hCb3REZXZpY2VJbmZvKG5hbWUsIHZlcnNpb24sIG9zLCBzZWFyY2hCb3RNYXRjaFsxXSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQnJvd3NlckluZm8obmFtZSwgdmVyc2lvbiwgb3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRldGVjdE9TKHVhKSB7XG4gICAgZm9yICh2YXIgaWkgPSAwLCBjb3VudCA9IG9wZXJhdGluZ1N5c3RlbVJ1bGVzLmxlbmd0aDsgaWkgPCBjb3VudDsgaWkrKykge1xuICAgICAgICB2YXIgX2EgPSBvcGVyYXRpbmdTeXN0ZW1SdWxlc1tpaV0sIG9zID0gX2FbMF0sIHJlZ2V4ID0gX2FbMV07XG4gICAgICAgIHZhciBtYXRjaCA9IHJlZ2V4LmV4ZWModWEpO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBvcztcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXROb2RlVmVyc2lvbigpIHtcbiAgICB2YXIgaXNOb2RlID0gdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MudmVyc2lvbjtcbiAgICByZXR1cm4gaXNOb2RlID8gbmV3IE5vZGVJbmZvKHByb2Nlc3MudmVyc2lvbi5zbGljZSgxKSkgOiBudWxsO1xufVxuZnVuY3Rpb24gY3JlYXRlVmVyc2lvblBhcnRzKGNvdW50KSB7XG4gICAgdmFyIG91dHB1dCA9IFtdO1xuICAgIGZvciAodmFyIGlpID0gMDsgaWkgPCBjb3VudDsgaWkrKykge1xuICAgICAgICBvdXRwdXQucHVzaCgnMCcpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/detect-browser/es/index.js\n");

/***/ })

};
;