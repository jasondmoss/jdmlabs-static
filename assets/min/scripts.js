/**
 * jdmlabs v13.0.23 [2021-07-02]
 *
 * The homepage of Jason D. Moss, a PHP + Front-End Developer at JdmLabs, specializing in hand-crafted web solutions. Compliant. Portable. Functional.
 *
 * Package    JDMLABS
 * Subpackage 
 * Version    13.0.23
 * Author     Jason D. Moss <jason@jdmlabs.com>
 * Copyright  2005-2021 Jason D. Moss. All rights freely given.
 * License    MIT License
 * Link       https://www.jdmlabs.com/
 */


function exists(thing){"use strict";return!(null==thing||!1===thing||thing.length<1)}function newWindowAnchor(anchor){"use strict";anchor.setAttribute("rel","noopener noreferrer"),anchor.addEventListener("click",targetUrl=>{targetUrl.preventDefault();targetUrl=anchor.getAttribute("href");let newWindow=window.open(targetUrl,"_blank");newWindow.opener=null})}(()=>{"use strict";var links=document.querySelectorAll("a");exists(links)&&Array.from(links).forEach(link=>{const href=link.getAttribute("href"),rel=link.getAttribute("rel");if(!exists(href))return!1;(href.startsWith("/")||href.startsWith("?")||href.startsWith("#")||href.includes("jdmlabs.com"))&&(!exists(rel)||!rel.includes("external"))||newWindowAnchor(link)})})();
//# sourceMappingURL=jdmlabs.js.map