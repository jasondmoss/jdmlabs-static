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
 * Polyfill for `Object.assign()`
 *
 * @return  {String}  Object target.
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
if (typeof Object.assign !== "function") {
    /**
     * Must be writable: true, enumerable: false, configurable: true.
     */
    Object.defineProperty(Object, "assign", {
        value: function assign(target, varArgs) {
            "use strict";

            /**
             * TypeError if undefined or null.
             */
            if (target == null) {
                throw new TypeError("Cannot convert undefined or null to object");
            }

            var to = Object(target);

            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                /**
                 * Skip over if undefined or null.
                 */
                if (nextSource !== null) {
                    for (var nextKey in nextSource) {
                        /**
                         * Avoid bugs when hasOwnProperty is shadowed.
                         */
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }

            return to;
        },
        writable: true,
        configurable: true
    });
}

/* <> */
