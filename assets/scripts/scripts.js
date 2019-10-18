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
        ContentLinks(allLinks);
    }


    /**
     * Scroll to top of page.
     *
     * @type  {NodeElement}
     *
     * ----------------------------------------------------------------------- *
     */
    // let targetLi = document.querySelector(".back-to-top");
    // if (exists(backToTop)) {
    //     backToTop.addEventListener("click", (event) => {
    //         event.stopPropagation();
    //         event.preventDefault();

    //         smoothScroll(event.target.hash);
    //     });
    // }
})();

/* <> */
