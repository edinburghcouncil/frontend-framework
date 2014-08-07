---
title: Widget embed
---

Whenever you embed a widget from another site (Twitter, Facebook, Google Maps, etc), wrap it in the code below. This will make sure your widget has fluid width and leaves some space at the right hand side on small screens to allow a finger to scroll past, instead of scrolling within, the widget.

##Example

<div class="embed-widget"><a class="twitter-timeline" href="https://twitter.com/Edinburgh_CC" data-widget-id="403091982160904192">Tweets by @Edinburgh_CC</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></div>

###Code

####HTML

    <div class="embed-widget">
        <!-- Add your widget embed code here -->
    </div>
