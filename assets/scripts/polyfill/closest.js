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
 * Polofill for `Element.prototype.closest()`
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        "use strict";

        var el = this;
        do {
            if (el.matches(s)) {
                return el;
            }

            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
    };
}

/* <> */
