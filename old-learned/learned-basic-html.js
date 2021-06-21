// open tag <html>
// closed tag </html>
// Ctrl + U in chrome show the html source page

// <!DOCTYPE HTML> is not html tag, you have to write it all the time
// with <html></html> is the main element
// <div></div> separate content in sections, these elements are grouped together
// we can use div to manipulate few elements together

// ! tab or html:5 tab
// <meta charset="UTF-8"> let the text of this page understand different languages
// stylizing in html is from the browser not from the html and every browser do it differently
// for example h1, h2, h3

// CSS is for stylizing of the page...


// Chrome ->> F12 ->> Elements ->> Ctrl + Shift + C (select an element on the page to inspect it)

// list ordered list <ol></ol>, unordered list <ul></ul> and <li>is each row of the list</li> (list item)
// have to tag whole list and then tag each item of the list

// we want to use table when the list is not useful
// <table></table>
// <thead></thead>
// <tbody></tbody>
// <tr></tr> table row
// <td></td> table data (cell) on each row the columns have to be the same
// <th colspan="2"></th> span to columns to one
// if we have info for only one column we put some empty too, to fill the table with cells and to look good
// <thead></thead> and <tbody></tbody> use for semantic :) to look good, heading can be with more rows

// span is generic inline container for phrasing content, which does not inherently represent anything
// it can be used to group elements for styling purposes

// if we put <div></div> is block element and the content which is not in div goes in new row,
// before and after the div element content is in new row
// <span></span> element is inline

// Attributes
// gives control of the element when we use it in html
// class can be used for few elements
// id is unique identification of the element
// the attributes itself don't make changes to the html page
// when we give them some instructions by css then they do change

// Images
// <img src=""> self-closing tag "src" comes from source
// alt="" alternative replacement always put alt attribute, search engines want it also

// Links
// <a></a> comes from anchor
// href hypertext reference
// target="_blank" opens new tab when you press the hyperlink

// Forms
// <form></form> is used to collect user inputs
// input elements, text fields, checkboxes, radio buttons, submit buttons
// action="" is some script which will process the data
// <label></label> the names of forms we put on labels
// <label></label> <input> <textarea></textarea> are inline elements
// we put in divs to separate and put on new rows

// <div>
    // <label>Мъж:</label>
    // <input type="radio" name="gender">
    // <label>Жена:</label>
    // <input type="radio" name="gender">
// </div>
// we put the same name to radio button in that case only one of them can be selected
// checkbox
// <input type="submit" value="Кандидатствай">
// when button is pressed the info goes to the server
// if we don't have server the page is just refreshing itself

// audio tag
// video tag

// html is not case sensitive
// F2 open the selected text and can make manipulations with code
// https://validator.w3.org/
// UTF-8 unicode standard 8bit

// many whitespace are visualizing like one interval
// DPI dots per inch
// css is telling where to go the divs
// div is rectangle element
// when paragraph is with too long text it goes on next row
// display inline
// li*5 put 5 times <li></li>
// ol>li*3 makes <ol> with 3 <li></li></ol>
// in <thead></thead> can put <th></th> this makes the text bold
// HTML structure of page, CSS style, JS functionality
// div takes the space of the display and is rectangular form, can be controlled with CSS
// can put two div elements one next to another
// we put one and the next goes on new row
// the menu is making with <ul></ul> and we make it to be displayed inline by CSS
// font-size: 2em; is double the normal
// style in the tag element is inline
// even if we do write html with some mistake, browser is correcting it
// <img Ctrl + Space, is showing all the choices
// if we choose width only and put some pixels will be resized proportionally
// title on img is showing when you put the cursor over the image and is showing this title
// src="../images/headphones.jpg" .. finding the upper directory
// <a></a> is inline elements
// input type email because in phone you have the @ and .com in the keyboard
// data on forms is going to go somewhere when we press submit

//   <label for="personName">
//     Person name:
//   </label>
//   <div>
//     <input type="text" id="personName" name="person-name" />
//   </div>
// <label></label> is clickable text when you click it activate input cell

//<div>
//    <select name="town" id="town">
//        <option value="1">Sofia</option>
//        <option value="2">Varna</option>
//        <option value="3">Plovdiv</option>
//    </select>
//</div>
// select makes drop-down list, because in database is working with numbers
// value is for server, Text is for user
// video streaming information, is showing the video before its loaded the whole itself
// <span style="vertical-align: middle;">Person address:</span>
// label for put ID of element

// <div>
//     <label for="userEmail">Email</label>
//     <input type="email" name="email" id="userEmail" placeholder="Email">
// </div>
// placeholder grey hint in input elements