/*

When comparing a string to a number, JavaScript converts the string to a number.

" " (a single space) gets converted to 0 because it doesn't contain numeric characters but can be interpreted as zero when coerced.
The comparison becomes:
0 > -1, which is true.
1.
console.log(" ">-1)//true
console.log(" ">" ")//false
console.log(""==true)//false
console.log("g ">"5")//true   unicode value compares
console.log(![]+[])//false



2.
let a = {}
let b = {key: "b"}
let c = { key: "c" }
a[b] = 100;
a[c] = 200;
console.log(a[b])  //200



3.A void element in HTML is an element that cannot have any child nodes, including text or other elements.

Example:
<area> – Defines a clickable area inside an image map.
<base> – Specifies the base URL for all relative URLs in a document.
<br> – Inserts a line break.
<col> – Specifies column properties for <colgroup>.
<embed> – Embeds external content like media or plugins.
<hr> – Represents a thematic break (horizontal rule).
<img> – Embeds an image.
<input> – Represents an input field.
<link> – Specifies relationships between the current document and external resources.
<meta> – Provides metadata about the document.
<source> – Specifies media resources for <audio> and <video>.
<track> – Specifies text tracks for <video> and <audio>.
<wbr>


4. The <select> element is used to create a drop-down list.

The <select> element is most often used in a form, to collect user input.

The <datalist> tag specifies a list of pre-defined options for an <input> element.
*/


