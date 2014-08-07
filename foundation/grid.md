---
title: Grid
---

[edinburgh.gov.uk](http://www.edinburgh.gov.uk) uses a responsive grid system which is flexible enough to allow you to create interesting and useful layouts. Small screen widths use a 4 column grid, while larger widths use a 12 column grid.

##Demo

<div class="clearfix"><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div><div class="col small_1 large_1 grid-span"><!-- --></div></div>

##Content templates

On a large screens, all content templates should use 8 columns for content. If a sidebar is needed, this should be 3 columns and floated right. This can be disregarded if a content template genuinely requires a different layout, but please only do this if absolutely necessary.

##Basics

Each set of columns must be contained in a wrapper. Each column width is created by adding classes to the element. Once class to declare this is a column, one for the width it should display at on smaller screens, and one for the width on larger screens.

###Code

####HTML

    <div class="wrapper">
        <article class="col small_4 large_8">
            Content
        </article>
        <aside class="col small_4 large_4">
            Sidebar content
        </aside>
    </div>

##Other layout features

###Top space and bottom space

Elements which are not grid columns can be given the margin that a column would have for consistency. This margin can be added above or below the element. Elements which are grid columns can also have their bottom margin removed, and headings which have margin above them can have this removed.

    <div class="top-space">This adds top margin</div>

<!--  -->

    <div class="bottom-space">This adds bottom margin</div>

<!--  -->

    <div class="col small_4 large_8 no-bottom">This removes bottom margin</div>

<!--  -->

    <h2 class="no-top">This removes top margin</h2>

###Switch

A grid column can be floated right, for two main reasons: so that an element appears above another on smaller screens and to the right on larger screens, or to create extra space between two elements.
