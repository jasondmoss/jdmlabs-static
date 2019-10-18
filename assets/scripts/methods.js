/**
 * Methods.
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
        let newWindow = window.open(targetUrl, "_blank");
        newWindow.opener = null;
    });
}


function smoothScroll(target)
{
    "use strict";

    if (!exists(target)) {
        return false;
    }

    document.querySelector(target).scrollIntoView({
        behavior: "smooth"
    });
}


/* -- */


/**
 * Manage links found in the content area.
 *
 * @param  {Array|NodeList}  links
 *
 * @method  {ContentLinks}
 */
const ContentLinks = function (links) {
    "use strict";

    if (!exists(links)) {
        return false;
    }

    links.forEach(function (link) {
        let isInternal = false;
        let isButton = false;
        let isDownload = false;
        let isMail = false;
        let isPhone = false;
        let isSocial = false;
        let isStore = false;

        let href = link.getAttribute("href");
        if (!exists(href)) {
            return false;
        }

        isInternal = (href.includes("spectacularnwt.", 0) && !href.startsWith("https://webstore.")) ||
            href.includes("tnospectaculaire.", 0) ||
            href.includes("ub9.outcrop.com", 0) ||
            href.startsWith("node/") ||
            href.startsWith("/") ||
            href.startsWith("?") ||
            href.startsWith("#");
        isDownload = link.classList.contains("file-link");
        isMail = href.startsWith("mailto:");
        isPhone = href.startsWith("tel:");
        isSocial = href.includes("facebook.com") ||
            href.includes("instagram.com") ||
            href.includes("linkedin.com") ||
            href.includes("tripadvisor.ca") ||
            href.includes("twitter.com") ||
            href.includes("vimeo.com") ||
            href.includes("wechat.com") ||
            href.includes("weibo.com") ||
            href.includes("youtube.com") || href.includes("youtu.be");
        isStore = href.startsWith("https://webstore.");

        let linkRole = link.getAttribute("role");
        isButton = linkRole === "button";

        if (!isInternal && !isButton && !isDownload && !isMail && !isPhone & !isSocial && !isStore) {
            /**
             * Is an external link, but not a store link, email address, nor
             * mobile phone number.
             */

            /**
             * Append an `external` icon to signify the link's externality.
             */
            let extIcon = document.createElement("span");
            extIcon.classList.add("icon-link-ext");
            link.appendChild(extIcon);

            /**
             * Open external link in new tab/window.
             */
            newWindowAnchor(link);
        } else if (!isInternal && !isDownload && (isButton || isSocial || isStore)) {
            /**
             * Is external, also buttons and a store link: no external icon.
             */
            newWindowAnchor(link);
        } else if (isInternal && isButton && !isDownload) {
            /**
             * Is an internal link or button.
             */
            link.setAttribute("rel", "bookmark");

            if (isButton) {
                link.setAttribute("role", "button");
            }/* else {
                link.setAttribute("role", "link");
            }*/
        } else if (isDownload) {
            /**
             * Download button.
             */
            if (link.classList.contains("download")) {
                /**
                 * Append an `download` icon to signify file download.
                 */
                let dlIcon = document.createElement("span");
                dlIcon.classList.add("icon-download");
                link.appendChild(dlIcon);
            }

            if (link.classList.contains("online")) {
                /**
                 * Append an `external` icon to signify the link's externality.
                 */
                let extIcon = document.createElement("span");
                extIcon.classList.add("icon-link-ext");
                link.appendChild(extIcon);
            }

            /**
             * Open external link in new tab/window.
             */
            newWindowAnchor(link);
        } else {
            /**
             * Normal internal link.
             */
            link.setAttribute("rel", "bookmark");
            // link.setAttribute("role", "link");
        }

        /**
         * Is an email address: append an `email` icon.
         */
        if (isMail) {
            let mailIcon = document.createElement("span");
            mailIcon.classList.add("icon-mail");
            link.appendChild(mailIcon);
        }

        /**
         * For Mobile link treatments...
         *
         * @see  {Method}  MobileNumber
         */
    });
};

/* <> */
