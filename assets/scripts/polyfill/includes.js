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
 * Polofill for `String.prototype.includes()`
 *
 * @param  {String}   String to search for.
 * @param  {Integer}  Start search at 'this' position.
 *
 * @return  {Boolean}
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
 */
if (!String.prototype.includes) {
    String.prototype.includes = function (search, start) {
        "use strict";

        if (!exists(search)) {
            return false;
        }

        if (typeof start !== "number") {
            start = 0;
        }

        if (start + search.length > this.length) {
            return false;
        }

        return this.indexOf(search, start) !== -1;
    };
}

/* <> */
