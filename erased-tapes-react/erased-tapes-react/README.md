# Erased Tapes Blog — React Clone

A responsive React recreation of the supplied desktop wireframe for a blog post about Erased Tapes Records. The project uses React, CSS Grid, Flexbox, Google Fonts and small interactive features.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local address shown in the terminal.

## Interactions

- Mobile navigation opens and closes with the Menu button.
- Album tiles respond to clicks with a small detail message.
- Visitors can submit a name and comment; the comment is added to the page.
- Form feedback uses an `aria-live` region.

## Assets

The supplied assets folder was not included with the uploaded wireframe, so this version uses CSS-built album artwork and an illustrated author placeholder. Replace these with supplied assets if they become available.

## Testing checklist

- [ ] Test widths around 375px, 600px, 768px and 1440px in browser DevTools.
- [ ] Open and close the mobile navigation.
- [ ] Click album tiles.
- [ ] Submit a comment with missing fields and with valid fields.
- [ ] Check the browser console and keyboard focus states.

## Reflection

I found building the page structure with reusable React components and arranging the main content with CSS Grid fairly straightforward. Separating the content data from the JSX made the album tiles and comments easier to maintain. The most challenging part was translating the desktop wireframe into a layout that still reads well on a phone, especially the article columns, navigation and album gallery. I used media queries to change the layout at tablet and mobile widths. Adding a comment form helped me practise React state and event handling. During Web Development II, I would like to improve my accessibility testing skills, particularly keyboard navigation, screen-reader announcements and colour contrast. I would also like to become more confident testing responsive layouts across different browsers and devices.
