/**
 * Polyfill Methods for Internet Explorer 11 and below.
 *
 * @category   JavaScript
 * @package    JDMLABS
 * @author     Jason D. Moss <jason@jdmlabs.com>
 * @copyright  2005-2019 Jason D. Moss. All rights freely given.
 * @link       https://www.jdmlabs.com/
 */


/**
 * Polofill for `Array​.prototype​.for​Each()`
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
 */
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback/*, thisArg*/) {
        "use strict";

        var T, k;

        if (this == null) {
            throw new TypeError("this is null or not defined");
        }

        var O = Object(this);
        var len = O.length >>> 0;

        /**
         * If isCallable(callback) is false, throw a TypeError exception.
         *
         * @see  http://es5.github.com/#x9.11
         */
        if (typeof callback !== "function") {
            throw new TypeError(callback +" is not a function");
        }

        if (arguments.length > 1) {
            T = arguments[1];
        }

        k = 0;
        while (k < len) {
            var kValue;

            if (k in O) {
                kValue = O[k];

                /**
                 * Call the Call internal method of callback with T as the this
                 * value and argument list containing kValue, k, and O.
                 */
                callback.call(T, kValue, k, O);
            }

            k++;
        }
    };
}

/* <> */
