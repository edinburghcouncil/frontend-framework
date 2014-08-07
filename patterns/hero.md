---
title: Hero image
---

Hero images can be used on the home page and some service landing pages. These hero images do not display on smaller screen sizes, and to avoid those smaller devices downloading unnecessary files we use the technique below.

##Example

See the home page of [edinburgh.gov.uk](http://www.edinburgh.gov.uk) for a live example.

###Code

####HTML

    <section class="hero col large_12 bottom-space">
        <img src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQ3MTE2NTZGNUE5QjExRTM4ODI1RjIxRTlDOTkzODg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjQ3MTE2NTcwNUE5QjExRTM4ODI1RjIxRTlDOTkzODg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NDcxMTY1NkQ1QTlCMTFFMzg4MjVGMjFFOUM5OTM4ODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NDcxMTY1NkU1QTlCMTFFMzg4MjVGMjFFOUM5OTM4ODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOCgYB/fn18e3p5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhYF9eXVxbWllYV1ZVVFNSUVBPTk1MS0pJSEdGRURDQkFAPz49PDs6OTg3NjU0MzIxMC8uLSwrKikoJyYlJCMiISAfHh0cGxoZGBcWFRQTEhEQDw4NDAsKCQgHBgUEAwIBAAAh+QQBAAAAACwAAAAAAQABAAACAkQBADs=" data-large="/path/to/heroimage.jpg" height="1" width="1" alt="">
    </section>


This keeps the <code>&lt;img&gt;</code> element valid by providing a valid <code>src</code> attribute, in this case a <a href="http://en.wikipedia.org/wiki/Base64">Base64</a> encoded 1px by 1px gif. On larger screens where the image is to be displayed, JavaScript (already included in <code>core.js</code>) is used to replace the <code>src</code> with <code>data-large</code>. Add the path to your hero image within the <code>data-large</code> attribute.
