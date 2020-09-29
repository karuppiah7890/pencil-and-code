# pencil-and-code

Okay, so I want to create a simple and minimalistic clone of CodePen. Just the
basic features for now. For example - render the HTML, CSS and JS :P

I want to do this just for the fun of it. I remember someone sharing about a
piece of code, like it was some 100 lines and that it's like a clone of CodePen
or JS Bin. I think I read like one line of that code? I can't recall anything
now. So, good for me - because I want to try this on my own. Of course I'm going
to be googling things to find a solution to this. But it's not gonna be like -
"how to create a clone of codepen?", no :P I want to think about a solution
myself and see how far I get to :) So, let's get started!

First thing I want to do is, render a webpage inside another webpage. I mean,
that's the basic thing that these applications do right, Code Pen, JS Bin,
Code Sandbox etc.

There are panels to edit HTML, CSS, JS, and then an output window where you can
see the final beautiful output of the code you have just written! :)

Also this final output reloads in real time. I'm going to aim for it, if not in
the start, at least for later. If at start I have to press a "Run" button to get
the final output, that's okay.

So, let's get started!

Task 1 - Research on how to render a webpage inside another webpage

https://www.tutorialrepublic.com/html-tutorial/html-iframes.php

I have heard of `iframe`s before. I think it's pretty popular. Is that the only
way?

I also noticed there's something called `object`. Just found this stackoverflow
answer

https://stackoverflow.com/questions/18145273/how-to-load-an-external-webpage-into-a-div-of-a-html-page

```html
<div>
  <object
    type="text/html"
    data="http://validator.w3.org/"
    width="800px"
    height="600px"
    style="overflow: auto; border: 5px ridge blue"
  ></object>
</div>
```

Some more talks about `iframe` and `object`

https://www.sitepoint.com/community/t/embed-a-webpage-within-another-webpage/230037/6

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies

I also tried the below, but these didn't work. Gotta check if these are
possible at all

```html
<!-- This didn't work -->
<iframe src="google.com"></iframe>
<iframe src="https://google.com"></iframe>
```

```html
<!-- This didn't work -->
<object
  type="text/html"
  data='<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            YAY!!
        </body>
        </html>'
  width="800px"
  height="600px"
  style="overflow: auto; border: 5px ridge blue"
></object>
```

Okay, so the below works but has some security issues. Gotta try with another
URL

```html
<!-- Should have worked but some security issues by Google I think -->
<iframe src="https://www.google.com"></iframe>
```

```html
<!-- Perfectly works!! -->
<iframe src="https://karuppiah7890.github.io/blog/"></iframe>
```

Wow, after some skimming of

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies

I found the below working. I do have to do tons of reading on security and what
not but I don't care about it now. I mean, it's not like I'm going to host this
website for some serious thing. So, meh.

```html
<!-- YESSSS! -->
<iframe
  srcdoc='<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            YAY!!
        </body>
        </html>'
></iframe>
```

Apparently there's something called `embed` too, and yeah, `object`. I see these
are not exactly for web pages. Anyways, I think I'll get back to them if I need
them. For now, I think I can stick to `iframe` and do some coding with just this
:)

So, actually the code in the MDN website

https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies

It had live example of what I want to do - embedding HTML content into the
current webpage. HTML content that users type live! ;) But I didn't see the code.

Now, this will also be one of my references for `iframe`

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe

Now I want to add a text box - I'm adding a textarea for this. This is where I
will be typing HTML code that will be rendered in an output box - the `iframe`

I'm keeping the input box on the left and the output on the right

I'm adding CSS to do this. I'm stuck at fitting both the text area and the
iframe in a single page, without scroll. Apparently I can fix the scrolling with
something like this with `overflow: hidden`

https://duckduckgo.com/?q=avoid+scrolling+in+web+page&t=ffab&ia=web
http://stackoverflow.com/questions/28411499/ddg#28411556

https://duckduckgo.com/?q=make+contents+in+a+web+page+to+exactly+fit+full+page&t=ffab&ia=web
http://stackoverflow.com/questions/41274876/ddg#41274987

https://duckduckgo.com/?t=ffab&q=css+overflow&ia=web
https://www.w3schools.com/cssref/pr_pos_overflow.asp

But I don't want to do it. I'm simply checking how there's some extra space on
top of the `textarea`, no matter what I do. I don't seem to get how that space
is occupied, and hence making the screen scroll. The CSS puts the height of both
the elements as the full screen. I have to work on the width too next. But I'm
just stuck at height itself.

I have been quite some research on what's going wrong.

https://css-tricks.com/textarea-tricks/ this didn't help as it was more about
other tricks

There was always some white space on top of the textarea - very little white
space - no idea why. I removed all the styling. The only thing that helped was
to put the `textarea` and the `iframe` into a `div` with flexbox using
`display: flex`.

For now I'm using `px` - pixels. I'll move to `rem`s later maybe, and have
different sizing for different devices probably :P

Now it has two elements - one input box and another output box - on the left
and right. Single page application - without scrolling.

Using `border-sizing: border-box` has helped - this way, the padding is
considered as part of the `height`

---

I need to write some Js code now - which will take the HTML code I write in the
input box and put it in the `iframe`'s `srcdoc` attribute value. This way, I
think the `iframe` will show the latest code's output, but I'm not sure. I
gotta try it! :)

Now the thing about Js is - usually it's better for it to execute once the page
has loaded with all the elements in it - this way we can find the elements using
selectors and process things. What happens when we simply run Js is - it cannot
find things on the web page at times and it misses to process things we want and
hence we don't get the features we need. So, for this, usually I have seen
people using `jquery`'s `$(document).ready()` function. I was checking if a
simple thing is possible in plain Js

https://duckduckgo.com/?t=ffab&q=run+javascript+only+when+document+is+loaded&ia=web

https://stackoverflow.com/questions/807878/how-to-make-javascript-execute-after-page-load#807895

https://duckduckgo.com/?q=plain+js+version+of+document+read&t=ffab&ia=web&iax=qa

https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t#9899701

But I guess it's a funny thing to do - trying to replicate what `jquery` does
in plain Js - I mean, it's a Js library, if I need to replicate it entirely,
then I should just copy their code and put it in my code - or I can use a
simpler basic version, but it won't be a replica of `jquery`'s feature. And I
don't think I want to actually start supporting many browsers as of now, and I
don't want to load something heavy like new libraries like `jquery`, as of now.
But I think soon I'll have to do it, given the amount of features I have thought
of, and for them to all work perfectly, I'll have to start writing more higher
level stuff using libraries, I think as I'm not going to reinvent the wheel for
everything. I'm just learning how something like CodePen might be working
without looking at any of the full code online for such a thing.

Not gonna use any frameworks/libraries for UI components too as of now - like
`React`, `Vue`, `Angular` etc. There are so many 🙈 `svelte`, `preact`. Phew.

And then all the transpilation and module bundling. Phew. But yeah, it needs to
be done once the app grows bigger and bigger and needs high level language
features and, module bundling to bundle it all into one to be used in the web
page.

Anyways, back to the code for Js, I saw this code recently

```js
if (
  ["complete", "loaded", "interactive"].includes(document.readyState) &&
  document.body
) {
  run();
} else {
  document.addEventListener("DOMContentLoaded", run, false);
}
```

`document.readyState`

https://duckduckgo.com/?t=ffab&q=document.readyState&ia=web
https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState

I don't see a value called `loaded` in it though. It's not present here
too in the HTML spec

https://html.spec.whatwg.org/multipage/dom.html#the-document-object

Weirdly I can see it here though

https://www.w3schools.com/jsref/prop_doc_readystate.asp

Maybe it was an old value. I don't seem to find it in the latest spec at least.
I think `interactive` and `complete` are valid. :) And then we can check if the
`body` exists with `document.body`

https://developer.mozilla.org/en-US/docs/Web/API/Document/body

And then we can use the `DOMContentLoaded` event

https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

Apparently, the event can fire before the Js script can run, so it's good to
check the document ready state before adding a listener like the above code.

There's also some content on making the page load faster - faster DOM parsing.

Something for optimized CSS delivery
https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery

There's also some version of Page Speed Insights
https://developers.google.com/speed/docs/insights/v5/about

Something for me to read once I want to start optimizing things. For now let me
make things work :P

Now I need to see where to put the `script` tag for my Js file

While searching for this, I found this

http://www.javascriptkit.com/javatutors/loadjavascriptcss.shtml
http://www.javascriptkit.com/javatutors/loadjavascriptcss2.shtml

I'll need it for later, when I want to dynamically add features to the website
if the user enables the features ;) :D

There seems to be many things on the Internet about this. I read this one a bit

https://humanwhocodes.com/blog/2009/07/28/the-best-way-to-load-external-javascript/

https://www.w3schools.com/js/js_whereto.asp

I'm going to put my `script` just before the closing tag `</body>`

Cool, I started writing my Js code. I didn't use `id` or any specific easy way
to find my HTML elements using `name` or even `class`. I started using tag names
and I realized I added event listener function to a list and not to an element

```js
const textarea = document.getElementsByTagName("textarea");
// error!
textarea.addEventListener("keyup", function () {
  console.log(textarea.value);
});
```

And there's no `document.getElementByTagName`, I mean, it makes sense, easily
it's possible to have many elements with the same tag, it doesn't make sense to
support to get one - one could just get the list and use `[0]` to get the first
element. Anyways, I'm going to use `id`s I think ;)

```html
<textarea id="html-input" placeholder="Type your HTML code here"></textarea>
```

So, this works now

```js
const textarea = document.getElementById("html-input");
textarea.addEventListener("keyup", function () {
  console.log(textarea.value);
});
```

But the only thing is, this function will be called a lot of times when the user
types very fast - for now it's okay I guess. It will be very real time to see
the output on the right. Later, maybe we can have some sort of the "debounce"
mechanism and if there are multiple key presses in a few moments, capture it all
together as a batch and then invoke the function - something like that. Anyways,
now let's create the output!! :D :D

Wow! I was able to do it! It was pretty simple!! :D

```js
const htmlInput = document.getElementById("html-input");
const htmlOutput = document.getElementById("html-output");
htmlInput.addEventListener("keyup", function () {
  htmlOutput.setAttribute("srcdoc", htmlInput.value);
});
```

I tried this input

```html
yay! wowow

<strong style="color: blue; font-size: 20px;">Cool Huh!</strong> :D :D I can see
what I write in real time!!! :D

<script>
  alert("ok");
</script>
```

It was hard though, yeah, whenever I typed something, it showed the output in
real time - so when I was trying to do the `alert`, every key press, I got an
alert while I was trying to implement it. One thing to note is - I can run
Js scripts inside the output ;)

I just tried the same input with `sandbox=""` in the `iframe` and it didn't
run the Js script. But I think it's okay for now without sanbox as I do want to
run scripts in the future. I don't see any issues really with no sandbox, as of
now, as this is only an experiment, so I'm not going to use the `sandbox`
attribute in the `iframe`
