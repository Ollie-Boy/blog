+++
title = "How to Add a Scroll Button to Your Hugo Site"
date = "2024-10-31"
description = "Sample article showcasing how to add a scroll button"
tags = [
    "Hugo",
    "dev"
]
author = "Li Xiang"
+++

In this article, I will show how to add a simple Scroll-to-Top button to your webpage.

Vanilla Back To Top is simple and tiny with no dependencies. Hides when on top, scrolls up smoothly when clicked. Works equally great with Vue, React, Angular and without frameworks on Jekyll, Hugo and Hexo.

What we need to do first is go to [vfeskov](https://github.com/vfeskov)'s [vanilla back to top repo](https://github.com/vfeskov/vanilla-back-to-top), there provides 3 ways to use it.

## Use the file provide on unpkg.com
You can find [How to use](https://github.com/vfeskov/vanilla-back-to-top#how-to-use) if you read the README.

Just add the below codes to your footer template `../layouts/partials/footer.html`. You may notice the script is trying to append to a container that doesn't exist in your HTML when the script runs, but it truly works since the DOM is usually fully loaded by the time the script runs, which allows the script to be appended without needing to explicitly define a container.

```html
<script src="https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js"></script>
<script>addBackToTop({
  diameter: 56,
  backgroundColor: 'rgb(255, 82, 82)',
  textColor: '#fff'
})</script>
```

## Use it locally
Well, sometimes when network is not stable, your button may not show because it rely on remote, so I would recommend you to download it locally to keep your website render normally **(CDN is still a good way tho.)**

So just go to the [page](https://unpkg.com/vanilla-back-to-top@7.2.1/dist/vanilla-back-to-top.min.js), copy and paste the code as `vanilla-back-to-top.min.js` and put it in your custom js folder, for example `../static/js/vanilla-back-to-top.min.js`.

Then add the below codes in your footer template.

```html
<script src="/js/vanilla-back-to-top.min.js"></script>
<script>addBackToTop()</script>
```

## With npm
You can also install the package via npm and import it into your own bundle. Run the below codes in your hugo project's root folder.

```js
npm install --save vanilla-back-to-top
```

Then import it as ES6, Node.js or RequireJS module, for example:

```js
import { addBackToTop } from 'vanilla-back-to-top'
addBackToTop()
// your code here
```

## Custom
The default params are shown below, you can always custom it yourself.

```js
addBackToTop({
  backgroundColor: '#000',
  cornerOffset: 20, // px
  diameter: 56, // px
  ease: inOutSine, // any one from https://www.npmjs.com/package/ease-component will do
  id: 'back-to-top',
  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>',
  onClickScrollTo: 0, // px
  scrollContainer: document.body, // or a DOM element, e.g., document.getElementById('content')
  scrollDuration: 100, // ms
  showWhenScrollTopIs: 1, // px
  size: diameter, // alias for diameter
  textColor: '#fff',
  zIndex: 1
})
```

|Option	|Description|
|:------:|:-----:|
|id|	id attribute of the button|
|showWhenScrollTopIs	|Show the button when page got scrolled by this number of pixels|
|onClickScrollTo|	Where to scroll to, in pixels, when the button gets clicked, 0 means the very top|
|scrollDuration|	How long, in milliseconds, scrolling to top should take. Set to 0 to make scrolling instant|
|innerElement|	DOM element to put inside the button; with jQuery you can put something like this: $('\<svg>...\</svg>').get(0)|
|size|	Width and height of the button in pixels
|cornerOffset	|Right and bottom offset of the button relative to viewport|
|backgroundColor|	Background color of the button|
|textColor	|Text color of the button|
|zIndex|	z-index of the button|
|scrollContainer	|If only part of your website gets scrolled, e.g., when your sidebar never scrolls with content, put the scrolled DOM element here|

And here is my config, you can see what it looks like at the right-down corner. If you wanna use mine, just copy and paste the codes to your head.html.

```html
<!-- vanilla-back-to-top -->
<script src="/js/vanilla-back-to-top.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    addBackToTop({
      id: "backToTopButton",
      backgroundColor: "transparent",
      textColor: "transparent",
      size: 45,
      scrollDuration: 777,
      innerElement:
        '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 14l5-5 5 5H7z" fill="#011"/></svg>',
      cornerOffset: 15,
    });

    const backToTopButton = document.getElementById("backToTopButton");
    if (backToTopButton) {
      backToTopButton.style.backgroundColor = "transparent";
      backToTopButton.style.border = "none";
      backToTopButton.style.boxShadow = "none";
      backToTopButton.style.outline = "none";
    }
  });
</script>

<style>
  #backToTopButton {
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    outline: none !important;
    width: 45px !important;
    height: 45px !important;
    padding: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  #backToTopButton svg {
    width: 100% !important;
    height: 100% !important;
    fill: #011;
  }
</style>
```