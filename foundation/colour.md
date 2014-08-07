---
title: Colour
---

There are five main City of Edinburgh Council brand colours. On [edinburgh.gov.uk](http://www.edinburgh.gov.uk) we use four of these, and some of the colours have been modified slightly to meet contrast guidelines for accessibility. We also use two greys.

<div class="colour-example" style="background: rgb(129, 11, 25);">
Red - Used for the main header and A-Z backgrounds<br/>
Sass variable: $brand;
</div>

<div class="colour-example" style="background: rgb(0, 127, 159);">
Blue - Used for text hyperlinks<br/>
Sass variable: $blue;<br/><br/>

Usage: &lt;a href=&quot;[link]&quot;&gt;link text&lt;/a&gt;
</div>

<div class="colour-example" style="background: rgb(54, 133, 78);">
Green - Used for button background and alternate text hyperlinks<br/>
Sass variable: $green;<br/><br/>

Usage: &lt;a href=&quot;[link]&quot; class=&quot;alternate&quot;>link text&lt;/a&gt;` or `&lt;a href=&quot;[link]&quot; class=&quot;button&quot;&gt;link text&lt;/a&gt;`
</div>

<div class="colour-example" style="background: rgb(119, 48, 116);">
Purple<br/>
Sass variable: $purple;
</div>

<div class="colour-example" style="background: #d1d1d1;">
Grey - Used for borders and horizontal rules<br/>
#d1d1d1<br/>
Sass variable: $grey;
</div>

<div class="colour-example" style="background: #333;">
Text colour - Used for all text unless the background is one of the above brand colours<br/>
#333
</div>

##Tints

There are a variety of colours achievable by using tints of the City of Edinburgh Council colour palette. The tints can be achieved on the website by using the following Sass methods. These should be used sparingly.

    background: darken($colorname, 30%);

<!--  -->

    background: lighten($colorname, 30%);
