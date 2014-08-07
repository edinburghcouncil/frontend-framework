---
title: Code guidelines
---

##HTML

You can use the [edinburgh.gov.uk boilerplate HTML](/downloads/boilerplate.html.zip) as a basis for your documents. Use this boilerplate only as a temporary surround for your content. Do not change any of the existing markup in the template as these changes will not be carried across to integration. To make changes to the global elemnts of the site, please contact [web@edinburgh.gov.uk](mailto:web@edinburgh.gov.uk).

As always, the existing parts of the site are excellent examples for your new layouts.

##CSS and Sass

The site's CSS is compiled and minified using [Sass](http://sass-lang.com). Two files are compiled from many. `style.css` is served to all modern browsers and uses a responsive grid and media queries. `legacy.css` is served only to IE8 (and below although IE versions before 8 are not officially supported) and uses a fixed width grid with no media queries.The Sass code is split between many files so it should be easy to find the code you need.

The CSS is built in a modular way and covers a huge variety of design patterns, so adding CSS won't be needed often. If you are adding new CSS for a new section of the site, create a new partial Sass file (preceded by an underscore, `.scss` filetype) and add it to the sass directory. Then open `style.scss` and add a new import with the name of your file. Add it at the end of the file.

Changing existing CSS is not advised unless you are fixing a problem (e.g. a browser bug). Please remember that much of the existing CSS is used in many places across the site, so changing that may result in unexpected problems.

[Learn more about installing and compiling Sass](http://sass-lang.com)

###Mixins

The Sass code contains several mixins and variables to make development easier, quicker and more consistent. Look in `sass/mixins.css` for the full list.

####Examples

    @include border-radius(4px);

becomes

    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    -ms-border-radius: 4px;
    border-radius: 4px;
