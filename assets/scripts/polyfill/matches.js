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
 * Polofill for `Element.prototype.matches()`
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
 */
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

/* <> */
