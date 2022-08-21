/**
 * jdmlabs v13.0.23
 * The homepage of Jason D. Moss, a PHP + Front-End Developer at JdmLabs, specializing in hand-crafted web solutions. Compliant. Portable. Functional.

 * Package    JDMLABS
 * Version    13.0.23
 * Author     Jason D. Moss <jason@jdmlabs.com>
 * Copyright  2005-2022 Jason D. Moss. All rights freely given.
 * License    MIT License
 * Link       https://www.jdmlabs.com/
 */

// jshint esversion: 9

/**
 * Has (Object|Node) been defined? Does (Object|Node) exist?
 *
 * @param {NodeElement} thing Element to test.
 *
 * @return {Boolean} True or false
 * @method exists
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
 * @param {NodeElement} anchor
 *
 * @method newWindowAnchor
 */
function newWindowAnchor(anchor)
{
    "use strict";

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
}


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

            if (!exists(href)) {
                return false;
            }

            /**
             * isExternal.
             *
             * @type {Boolean}
             */
            let isExternal = !(
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
