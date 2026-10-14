# Answers

Answer the questions below in this file, under each question. Put screenshots in
a `screenshots/` folder and link them from your answers.

## 1. Challenges and dilemmas

List at list 2 challenges or dilemmas that you faced while building the design in Part 1,
and how you decided to solve them?

**Answer:**
Issue: How to build the top navbar so it stays at top and doesnt get scrolled away?
Solution: I set poistion fixed to top and gave body a margin top of around the size of the top navbar

Issue: How to get the drawer to open on click
Solution:: created a class for open which showed the drawer and a class for closed which hid it and usig JS changed class of drawer.

## 2. Box model

Build the `.hello-world` example from the lesson 1 "CSS Box Model" slides, exactly as it appears
there, on a new page of your website. This page is only for answering questions
2 and 4, so it can be a temporary file, and you don't need to submit it.

Inspect the element with your browser's devtools.
Enable and disable `box-sizing: border-box;` and inspect the size of the element.
What is the total width, and why? Explain in detail.

**Answer:**
114px without, 100px with.
makes the width be final after border and padding.

## 3. The viewport

Open the website on a mobile browser, or in the mobile view of Chrome's
devtools, then delete this line from the `<head>` of `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

What happens to your page? What does
this line tell the browser, and why does removing it affect your mobile design?

**Answer:**
For me in my site it didnt change anything for some reason.
But removing this line causes the mobile browser to treat your page as a desktop site, shrinking your layout to fit the screen and making the text tiny.
It is what tells the browser the width of the screen to set page for that width.
