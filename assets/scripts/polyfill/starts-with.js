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
 * Polofill for `String.prototype.startsWith()`
 *
 * @return  {Boolean}
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
 */
if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, "startsWith", {
        value: function (search, pos) {
            "use strict";

            pos = !pos || pos < 0 ? 0 : +pos;

            return this.substring(pos, pos + search.length) === search;
        }
    });
}

/* <> */
