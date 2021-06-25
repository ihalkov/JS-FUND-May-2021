// CSS (cascading style sheets)

// with HTML only describe content of the page

// selectors which part of html page we want to stylize

// box model the element can be like boxes
// fonts have to be always changed
// table is only used when we want to represent table data

// an addition to the html
// language for stylizing

// text file with extension ".css"

// Syntax

// p selector
// {} declaration block
// color property
// red value
// color: red; declaration
// background-color: ...
// p {
//     color: red;
// }

// three ways to insert CSS (style sheet)
// Inline only on one element
// Internal on whole page
// External can be used for more than one page it's on new .css file


// index.html is the main page

// live server
// hot reloading
// attributes are ways to put additional information for the element


// inline  <p style="color: blue; background-color: brown;"> is only for one unique element style
// more specific beat more main
// 1. Inline, 2. Internal, 3. External if you have conflict that is not a problem
// sometimes is desired effect
// styles in website have to be the same so here it comes external stylizing

// always refreshing with Ctrl + F5 (hard reload), because browser cache the sites
// that means that can save old stylizing and didn't refresh to new

// external where more pages can use the same style
// <link rel="stylesheet" href="style.css">
// href (header reference)

// can open like text files
// browser have to render the styles to the html page

// when browser is already loaded some file it keep it in cache and don't refresh it often
// code refactor

// link is putted in <head></head>
// can be more than one css file to single page

// CSS Selectors
// way to choose desired elements


// Nested selectors
// Pseudo selectors

// Primary
//  Class, ID, Tag, *
// tag (select all specified tags)
// #id (selects a unique element by ID)
// .class (selects a group of elements with specified name)
// * (selector for everything, its not for often use)

// styles are overlaying
// if we put style on all p {} and put class on some of p {} then the styles on class will change the class
// and main ones will be scratched

// don't use ID for CSS
// ids are more useful in JS

// use class mainly and tags
// one class can be used on different tags
// more specific style beats (selector specificity)

// nested tags plate apple {}
// with comma , we list selectors
// if we want to do it can collect it in same class

// Block elements
// they go on new row
// one block can be like inline, or inline we can make it block

// .navigation a:hover {
//     /* text-decoration: underline; */
//     background-color: transparent;
//     color: tomato;
// }

// content, padding, border, margin

// Fonts
// Serif look like column at the end of the letter
// sans-serif (opposite of serif)

