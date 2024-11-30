/**
 * The homepage of Jason D. Moss, a PHP + Front-End Developer at JdmLabs,
 * specializing in hand-crafted web solutions.
 * Compliant. Portable. Functional.
 *
 * @package JDMLABS
 * @author Jason D. Moss <jason@jdmlabs.com>
 * @copyright 2005-2025 Jason D. Moss. All rights freely given.
 * @license MIT License
 * @link https://www.jdmlabs.com/
 */


/**
 * Has (Object|Node|Whatever) been defined? Does (Object|Node|Whatever) exist?
 *
 * @param {object|array|string} thing
 */
const exists = (thing) => {
    "use strict";

    return ! (
        typeof thing === "undefined" ||
        thing === null ||
        thing === false ||
        thing.length < 1
    );
};


/**
 * Securely open a new window from given anchor element.
 *
 * @param {Node} anchor
 *
 * @method newWindowAnchor
 */
const newWindowAnchor = (anchor) => {
    "use strict";

    if (! exists(anchor)) {
        return false;
    }

    anchor.setAttribute("rel", "noopener noreferrer");
    anchor.addEventListener("click", (event) => {
        event.preventDefault();

        let targetUrl = anchor.getAttribute("href");
        let newWindow = window.open(targetUrl, "_blank");

        /**
         * Sever the reference of the new tab/window from the parent.
         *
         * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/opener
         */
        newWindow.opener = null;
    });
};


(() => {
    "use strict";

    /**
     * Open external links in new tab/window.
     *
     * @param {Array|NodeList} links
     */
    let links = document.querySelectorAll("a");
    if (exists(links)) {
        Array.from(links).forEach((link) => {
            const href = link.getAttribute("href");
            const rel = link.getAttribute("rel");

            if (! exists(href)) {
                return false;
            }

            /**
             * isExternal.
             *
             * @type {Boolean}
             */
            let isExternal = ! (
                    href.startsWith("/") || href.startsWith("?") || href.startsWith("#") ||
                    href.includes("jdmlabs.com")
                ) ||
                // Flagged as external.
                (exists(rel) ? rel.includes("external") : false);

            if (isExternal) {
                // Securely open external link in new tab/window.
                newWindowAnchor(link);
            }
        });
    }
})();

/* <> */
