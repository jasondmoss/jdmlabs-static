/**
 * SNIPPETS
 */


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
