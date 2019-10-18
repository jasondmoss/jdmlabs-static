/**
 * jdmlabs v13.0.0 [2019-10-18]
 *
 * The homepage of Jason D. Moss, a PHP + Front-End Developer at JdmLabs, specializing in handcrafted solutions. Compliant. Portable. Functional.
 *
 * Package    JDMLABS
 * Subpackage 
 * Version    13.0.0
 * Author     Jason D. Moss <jason@jdmlabs.com>
 * Copyright  2005-2019 Jason D. Moss. All rights freely given.
 * License    MIT License
 * Link       https://www.jdmlabs.com/
 */


function exists(thing){"use strict";return!(void 0===thing||null===thing||!1===thing||thing.length<1)}function newWindowAnchor(anchor){"use strict";if(!exists(anchor))return!1;anchor.setAttribute("rel","noopener noreferrer"),anchor.addEventListener("click",function(event){event.preventDefault();let targetUrl=anchor.getAttribute("href");window.open(targetUrl,"_blank").opener=null})}function smoothScroll(target){"use strict";if(!exists(target))return!1;document.querySelector(target).scrollIntoView({behavior:"smooth"})}const ContentLinks=links=>{"use strict";if(!exists(links))return!1;links.forEach(link=>{let isInternal=!1,isButton=!1,isDownload=!1,isSocial=!1,href=link.getAttribute("href");if(!exists(href))return!1;if(isInternal=href.includes("jdmlabs",0)||href.startsWith("#"),isDownload=link.classList.contains("file-link"),isSocial=href.includes("about.me")||href.includes("behance.net")||href.includes("github.com")||href.includes("last.fm")||href.includes("linkedin.com")||href.includes("twitter.com")||href.includes("vimeo.com")||href.includes("youtube.com"),isButton="button"===link.getAttribute("role"),isInternal||isButton||isDownload||isSocial)if(isInternal||isDownload||!isButton&&!isSocial)if(isInternal&&isButton&&!isDownload)link.setAttribute("rel","bookmark"),isButton&&link.setAttribute("role","button");else if(isInternal&&href.startsWith("#"))link.addEventListener("click",event=>{event.stopPropagation(),event.preventDefault(),smoothScroll(event.target.hash)});else if(isDownload){if(link.classList.contains("download")){let dlIcon=document.createElement("i");dlIcon.classList.add("icon-download"),link.appendChild(dlIcon)}if(link.classList.contains("online")){let extIcon=document.createElement("i");extIcon.classList.add("icon-link-ext"),link.appendChild(extIcon)}newWindowAnchor(link)}else link.setAttribute("rel","bookmark");else newWindowAnchor(link);else{let extIcon=document.createElement("i");extIcon.classList.add("icon-link-ext"),link.appendChild(extIcon),newWindowAnchor(link)}})},mobileScreen=window.matchMedia("(max-width:879px)"),slideDuration=8192;!function(){"use strict";let allLinks=document.querySelectorAll("a");exists(allLinks)&&ContentLinks(allLinks)}();
//# sourceMappingURL=scripts.js.map