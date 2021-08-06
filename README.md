# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their
  device's screen size
- See hover states for all interactive elements on the page

### Screenshot

The screenshots are full page screenshots that you can view by
clicking on the links below.

[Desktop screenshot](./documentation/desktop.png)

[Mobile screenshot](./documentation/mobile.png)

[Mobile hamburger menu screenshot](./documentation/menu.png)

### Links

- Solution URL: [My solution](https://www.frontendmentor.io/solutions/mobile-first-landing-page-using-html-css-and-javascript-ywyPx3Zku)
- Live Site URL: [Live site](https://aphilip97.github.io/sunnyside-agency-landing-page)

## My process

### Built with

- Semantic HTML5 markup
- TypeScript for VSCode Intellisense compiled into ESNEXT
  JavaScript.
- CSS custom properties
- Flexbox
- Media Queries
- Mobile-first workflow

### What I learned

I learned that `line-height` and `letter-spacing` play an
important role in getting the design pixel perfect.

By lining up the Figma file and the implementation and swapping
back and forth between the two I could tell that the images
weren't exactly the same. I didn't know if the images that I was
given were the right ones and the design was wrong or if the
Figma file had the correct images given that it was ... the
Figma file. So I re-exported the images from the Figma file
and used those images instead as that way it would match the
design in the Figma file.

I'm glad I used TypeScript as Visual Studio Code's Intellisense
autocompletion/suggestion feature is more helpful to me when I
can let it know what kind of element I'm working with.

Without it I would get all properties that are common to all
`HTMLElement` objects but none of the specific properties that I
might need.

```js
const button = document.querySelector('[data-js-menu-toggle]') as HTMLButtonElement;
```

### Continued development

I want to make projects that don't have a tablet size design
look good on tablet screen sizes because that is something that
I struggle with.

Expanding on the topic above, I want to learn how to improvise
and adapt to make the best of the information that I've been
given.

I want to improve my understanding of typography in order to
create reusable classes instead of repeatedly writing the same
CSS declarations over and over again.

### Useful resources

- [This stackoverflow question](https://stackoverflow.com/questions/20788232/remove-unexplainable-img-margin-space-css) and [this blog post](https://www.codeblocq.com/2016/09/The-mysterious-4px-gap-in-between-images/)
  - I had a bug where there always seemed to be a 4px gap at the
    bottom of the images in the project and it turns out that it
    was because they were still `display: inline;` so it is
    affected by `white-space` and `line-height` etc. This
    question helped me to not only fix but also understand why
    the bug was occurring.
- [CSS-Tricks Flexbox guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  - This is guide always serves aa good reference for flexbox.
  The images are especially useful when learning about flexbox
  and when trying to remember what a specific property does. It
  helped me to figure out how to use the `order` property and
  also reminded me how `flex-basis` worked which helped me to
  avoid spending a lot of time trying to make it do something
  that it is not supposed to do.

## Author

- Website - [Athul Philip](https://aphilip97.github.io)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/aphilip97)
