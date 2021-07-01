---
title: Style text with an image
date: '2021-06-30'
excerpt: How to add a background image or gradient to text
---
<img src="/images/striped_final.png" alt="Final striped text" class="image--centered">

## **tl;dr**  
Set the text color to `transparent`, add a background image, and set the `background-clip` property to `text`.
***

Have you ever wanted to spice up the text on your site with something besides a simple color, like maybe a gradient or an image? In this quick tutorial, I'm going to show you how to achieve this with only four lines of CSS.

An email from Codepen this week featured [a great example of this technique](https://codepen.io/TajShireen/pen/YzZmbep), so I pored over the code to figure out how it's done. 

It's actually pretty simple. 

## Select a big, bold font
Select a bold font and set it large so there's plenty of area for the background image to show through. The affect is more impressive if the text spans multiple lines.can 

<img src="/images/white_text.png" alt="Big, bold text." class="image--centered">

## Set a background image and make the font transparent
The idea here is to set a background image or gradient on the text and set the font color to `transparent`. The affect of doing only this, as you'll see, is that you have a pretty rectangle and no text. Your text is there, it's just transparent.

*For this example I used a linear gradient for the background image, but any background will do.*

<img src="/images/just_stripes.png" alt="colored stripes" class="image--centered">

## Final Step
What we need to complete the affect is to hide--or clip--the background image from everywhere *except* the text. We do this with the `background-clip` CSS property. 

```css
  background-clip: text;
  -webkit-background-clip: text;
```

Voila! That's all there is to it.

<img src="/images/striped_final.png" alt="Final striped text" class="class--centered">

The final code is in the pen below. Now go make cool stuff. 

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="QWvwNxq" data-user="brentdanley" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/brentdanley/pen/QWvwNxq">
  Striped Text</a> by Brent Danley (<a href="https://codepen.io/brentdanley">@brentdanley</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>