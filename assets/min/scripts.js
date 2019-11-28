/**
 * jdmlabs v13.0.0 [2019-11-28]
 *
 * The homepage of Jason D. Moss, a PHP + Front-End Developer at JdmLabs, specializing in handcrafted web solutions. Compliant. Portable. Functional.
 *
 * Package    JDMLABS
 * Subpackage 
 * Version    13.0.0
 * Author     Jason D. Moss <jason@jdmlabs.com>
 * Copyright  2005-2019 Jason D. Moss. All rights freely given.
 * License    MIT License
 * Link       https://www.jdmlabs.com/
 */


function exists(thing){"use strict";return!(void 0===thing||null===thing||!1===thing||thing.length<1)}function newWindowAnchor(anchor){"use strict";if(!exists(anchor))return!1;anchor.setAttribute("rel","noopener noreferrer"),anchor.addEventListener("click",function(event){event.preventDefault();let targetUrl=anchor.getAttribute("href");return window.open(targetUrl,"_blank"),!1})}!function(){"use strict";let allLinks=document.querySelectorAll("a");exists(allLinks)&&allLinks.forEach(function(link){let isInternal=!1,isSocial=!1,href=link.getAttribute("href");if(!exists(href))return!1;isInternal=href.includes("jdmlabs.com",0)||href.startsWith("#"),isSocial=href.includes("about.me")||href.includes("behance.net")||href.includes("github.com")||href.includes("last.fm")||href.includes("linkedin.com")||href.includes("twitter.com")||href.includes("vimeo.com")||href.includes("youtube.com"),!isInternal&&!isSocial||!isInternal&&isSocial?newWindowAnchor(link):link.setAttribute("rel","bookmark")})}();
//# sourceMappingURL=scripts.js.map