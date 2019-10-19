/**
 * Site Scripts.
 *
 * @category   JavaScript
 * @package    JDMLABS
 * @author     Jason D. Moss <jason@jdmlabs.com>
 * @copyright  2005-2019 Jason D. Moss. All rights freely given.
 * @link       https://www.jdmlabs.com/
 *
 * jshint esversion: 6
 */


/**
 * Has (Object|Node) been defined? Does (Object|Node) exist?
 *
 * @param  {NodeElement}  thing  Element to test.
 *
 * @return  {Boolean}  True or false
 * @method  exists
 */
function exists(thing)
{
    "use strict";

    if (typeof thing === "undefined" || thing === null || thing === false || thing.length < 1) {
        return false;
    }

    return true;
}


/**
 * Securely open a new window from given anchor element.
 *
 * @param  {NodeElement}  anchor
 *
 * @method  newWindowAnchor
 *
 * @see  https://developer.mozilla.org/en-US/docs/Web/API/Window/open
 */
function newWindowAnchor(anchor)
{
    "use strict";

    if (!exists(anchor)) {
        return false;
    }

    anchor.setAttribute("rel", "noopener noreferrer");
    anchor.addEventListener("click", function (event) {
        event.preventDefault();

        let targetUrl = anchor.getAttribute("href");
        // let newWindow = window.open(targetUrl, "_blank");
        // newWindow.opener = null;
        window.open(targetUrl, "_blank");

        return false;
    });
}


(function () {
    "use strict";

    /**
     * Links (Internal vs. External).
     *
     * @type  {NodeList}  allLinks
     *
     * @uses  {Method}  ContentLinks
     *
     * ----------------------------------------------------------------------- *
     */
    let allLinks = document.querySelectorAll("a");
    if (exists(allLinks)) {
        allLinks.forEach(function (link) {
            let isInternal = false;
            let isSocial = false;

            let href = link.getAttribute("href");
            if (!exists(href)) {
                return false;
            }

            isInternal = href.includes("jdmlabs", 0) || href.startsWith("#");
            isSocial = href.includes("about.me") ||
                href.includes("behance.net") ||
                href.includes("github.com") ||
                href.includes("last.fm") ||
                href.includes("linkedin.com") ||
                href.includes("twitter.com") ||
                href.includes("vimeo.com") ||
                href.includes("youtube.com");

            if ((!isInternal && !isSocial) || (!isInternal && isSocial)) {
                /**
                 * Is an external social link: no external icon.
                 */
                newWindowAnchor(link);
            } else {
                /**
                 * Normal internal link.
                 */
                link.setAttribute("rel", "bookmark");
            }
        });
    }
})();

/* <> */
