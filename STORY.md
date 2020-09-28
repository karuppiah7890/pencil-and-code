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
