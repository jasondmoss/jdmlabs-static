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
 * Media Query Rules.
 *
 * @type  {Boolean}
 */
const mobileScreen = window.matchMedia("(max-width:879px)");

/**
 * Carousel duration.
 *
 * @type  {Integer}  Time between slides (milliseconds).
 */
const slideDuration = 8192; // 8 seconds


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
     * Carousel.
     *
     * @type  {NodeList}  slides
     *
     * @uses  {Module}  Flickity
     *
     * ----------------------------------------------------------------------- *
     */
    // let slides = document.querySelector("#test");
    // if (exists(slides)) {
    //     new Flickity(slides, {
    //         cellAlign: "center",
    //         draggable: true,
    //         adaptiveHeight: false,
    //         prevNextButtons: true,
    //         pageDots: false,
    //         wrapAround: true,
    //         autoPlay: slideDuration,
    //         pauseAutoPlayOnHover: true
    //     });
    // }
})();

/* <> */
