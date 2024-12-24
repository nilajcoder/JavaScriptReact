
/*
1.Differce between undefined and null?
undefined: variable is declared but not assigned any value
null: variable is declared and assigned null value


function sum(a=100,b=200){
    console.log(a + b);
  }
  
  console.log(sum(null, 20));
  
  function sum1(a=100,b=200){
    console.log(a + b);
  }
  
  console.log(sum1(undefined, 20));

  output:20
undefined
120
undefined
  
2.  console.log(undefined+2)//NaN
  console.log(null+2)//2

  const obj = {
    a: 1,
    b: 2,
    c: 3,
    'b': 4,
    c: 6,
};

console.log(obj);//{ a: 1, b: 4, c: 6 }

3. const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];

arr.forEach(function(num) {
  console.log(num);//0 1 2 3 4 5 6 7 8
  if (num === 3) {
    arr.length = 0;
  }
});
output:0 1 2 3

4.console.log(+false)//0
console.log(+true)//1
console.log(+null)//0
console.log(+undefined)//NaN
console.log(!"Nilaj")//false



5. let a = 10;
let b = new Number(10);
let c = 100;
console.log(a==b)//true
console.log(a===b)//false
console.log(a, b);//10 [Number: 10]


a == b (true)
The == operator (loose equality) performs type coercion. When comparing a (a primitive number) to b (an object),
 the b object is converted to its primitive value using the valueOf method.
b.valueOf() returns the primitive value 10, so the comparison becomes 10 == 10, which is true.
a === b (false)
The === operator (strict equality) does not perform type coercion. It compares both the value and the type.



6. Find method in array in javascript is used to find the  element in the array that satisfies the provided testing function.


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.find((num) => num > 4);
console.log(newArr);//5



7. Filter method in array in javascript is used to create a new array with all elements
 that pass the test implemented by the provided function. It does not change the original array. to filter the elements of
  an array that satisfy a condition.

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.filter((num) => num > 4);
console.log(newArr);//[ 5, 6, 7, 8, 9 ]




8. Map method in array in javascript is used to create a new array with the 
results of calling a provided function on every element in the calling array.

syntax: arr.map(function(currentValue, index, arr), thisValue)


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.map((num) => num * 2);
console.log(newArr);//[ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]


const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr1 = arr1.map((num) => num >2);
console.log(newArr1);//[ false, true, true, true, true, true, true, true, true ]



9. Reduce method in array in javascript is used to reduce the array to a single value.
    The reduce() method executes a reducer function (that you provide) on each element of the array, r
    esulting in single output value.
syntax: arr.reduce(function(total, currentValue, currentIndex, arr), initialValue)

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.reduce((acc, num) = acc * num);
console.log(newArr);//362880


10. Slice method in array in javascript is used to extract a section of an array and returns a new array.
    Slice method does not change the original array.
    syntax: arr.slice(start, end)
    start: It is an optional parameter. It specifies the index at which to start the extraction.
    end: It is an optional parameter. It specifies the index at which to end the extraction.
   

    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.slice(1, 5);
console.log(newArr);//[ 3, 4, 5 ]


11. Splice method in array in javascript is used to add or remove elements from an array.
    Splice method changes the original array.
    syntax: arr.splice(index, howmany, item1, ....., itemX)
    index: It is required parameter. It specifies the position to add/remove items.
    howmany: It is an optional parameter. It specifies the number of items to be removed.
    item1, item2, ...: It is an optional parameter. It specifies the new items to be added to the array.
    
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.splice(1, 5);
console.log(newArr);//[ 2, 3, 4, 5, 6 ]

12 
let arr = [2,5,3,4];
console.log(arr.unshift(1));//5
console.log(arr);//[ 1, 2, 5, 3, 4 ]
UNSHIFT: The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

***
let var & const
-----------------
var: variable can be redeclared & updated. A global scope variable  before 2015 we used var


but in 2015 in javascript has new features called ES6 and we use the following keyword

let:variable can not be re-declared but can be updated. block scope variable.

const: variable can not be re-declared or updated.A block scope variable.



**what is npm in react?
npm is a package manager for Node.js. It is used to install the packages that are required for the project.
It is used to manage the dependencies of the project.

**what is node.js?
Node.js is a JavaScript runtime environment that is used to run the JavaScript code outside the browser.
It is used to build the server-side applications.

**what clien-side and server-side in react?
Client-side: Client-side is the front-end of the application. It is used to build the user interface of the application.
Server-side: Server-side is the back-end of the application. It is used to build the server-side logic of the application.

React is a client-side library that is used to build the user interface of the application.

**npx in react?
npx is a package runner tool that is used to execute the packages that are not installed globally.

**what is node_modules in react?
node_modules is a folder that contains the packages that are installed using npm.
It is used to store the dependencies of the project.

**How to create react app?
Answer: npm create vite@latest

**what is vite in react?
Vite is a build tool that is used to build the react application. It is used to optimize the performance of the application.
It is used to build the react application with the fast speed. It is modern way to build the react application.






13. Diffrece between package.json and package-lock.json?

package.json: It is a file that contains information about the    and the packages that are used in the project.
It is used to store the metadata of the project. ande dependencies.

package-lock.json: It is a file that contains the exact version of the packages that are used in the project.
It is used to lock the version of the packages to avoid the conflict between the packages.

**There is a source(src) folder in rect project what is the use of this folder?

Answer : The source folder is used to store the source code of the react application.
It contains the components, styles, images, and other files that are used to build the application.

** what is the use of public folder in react project?
 
The public folder is used to store the public assets of the react application.
It contains the index.html file, images, and other files that are used to build the application.

**Are public folder processed by webpack?
No, the public folder is not processed by webpack. The public folder is used to store the public assets of the react application.

**What webpack is used for in react?
Webpack is a module bundler that is used to bundle the modules of the react application.
It is used to optimize the performance of the application.


***What is the use of index.html file in react project?

The index.html file is the main file of the react application. It is used to render the react application in the browser.
it is the entry point of the react application.

**what is app.js file in react project?
The app.js file is the main file of the react application. It is used to build the user interface of the application.
It reurns the component that is used to build the user interface of the application.

**what is purpose of main.js file in react project?
The main.js file is used to render the react application in the browser.
It is used to render the react application in the root element of the index.html file.

createRoot() method is used to render the react application in the browser.
getElemetById() method is used to get the root element of the index.html file.
 and it is used to render the react application in the root element of the index.html file.

**what readme.md file in react project?
The readme.md file is used to provide the information about the project.
It is used to provide the documentation of the project.


 **what is react-dom in react?
React-dom is a package that is used to render the react application in the browser.
It is used to render the react components in the DOM.

**what is react-router-dom in react?
React-router-dom is a package that is used to handle the routing in the react application.
It is used to navigate between the pages of the react application.


14. What is differnce between usememo and usecallback?
useMemo: useMemo is a hook that is used to memoize the value. It is used to optimize the performance of the application.
useCallback: useCallback is a hook that is used to memoize the function. It is used to optimize the performance of the application.
difference: useMemo is used to memoize the value and useCallback is used to memoize the function.
           usecallback is used to memoize the function and useMemo is used to memoize the value.

15. what is lazy loading in react?
Lazy loading is a technique in react that is used to load the components only when they are required.
It is used to optimize the performance of the application.
syntax: const Component = React.lazy(() => import('./Component'));

***  What are the different ways to improve react performance?
i) Use React.memo to memoize the functional component.
ii) Use useMemo to memoize the value.
iii) Use useCallback to memoize the function.
iv) Use lazy loading to load the components only when they are required.
v) Use virtualized list to render the large list of items.


** What is code splitting in react?
Code splitting is a technique in react that is used to split the code into smaller chunks.
It is used to load the code only when it is required.
It is used to optimize the performance of the application.


16. what is Jsx in react?
JSX is a syntax extension for JavaScript. It is used with React to describe what the UI should look like.
JSX produces React elements. It is used to write HTML code in React.
syntax: const element = <h1>Hello, world!</h1>;


17.jsx is understanding by browser?
No, JSX is not understood by the browser. JSX is a syntax extension for JavaScript. 
It is used with React to describe what the UI should look like.
babel is used to convert the JSX code into JavaScript code that is understood by the browser.

18. what is babel in react?
Babel is a JavaScript compiler that is used to convert the JSX code into JavaScript code that is understood by the browser.

19. what is React ?
React is a JavaScript library that is used to build user interfaces. It is maintained by Facebook.
It is used to build single-page applications and mobile applications.
**What is javascript?
JavaScript is a programming language that is used to build the web applications.
it is scripting language that is used to build the client-side and server-side applications.

**What is HTML?
HTML is a markup language that is used to build the structure of the web page.
hypertext markup language is used to build the web pages.

20.Differece between react and angular?
React: React is a JavaScript library that is used to build user interfaces. It is maintained by Facebook.
It is used to build single-page applications and mobile applications.
Angular: Angular is a JavaScript framework that is used to build web applications. It is maintained by Google.
It is used to build single-page applications and mobile applications.
i)React is faster than Angular.
ii)React is one way data binding and angular is two way data binding.

**Data binding: Data binding is the process of synchronizing the data between the model and the view.


**One way data binding: In one-way data binding, the data is passed from the model to the view.
**Two way data binding: In two-way data binding, the data is passed from the model to the view and view to the model.

iii)React is pass data from parent to child component and angular is pass data from parent to child and child to parent component.
iv)React uses virtual DOM and angular uses real DOM.

** Virtual DOM: Virtual DOM is a lightweight copy of the real DOM. It is used to optimize the performance of the application.
  Real DOM: Real DOM is the actual DOM that is used to render the UI of the application.

** React is pass data from child to parent component ?
Data can be passed from child to parent component in react using props.
thats why we use callback function to pass data from child to parent component.
unidirectional data flow in react. top to bottom.


** Contemporay of react js?
Angular, Vue.js, Svelte, Ember.js, Backbone.js, Meteor.js, 
Polymer, Aurelia, Mithril, Preact, Riot.js, Hyperapp, Inferno, Deku,
Elm, Cycle.js, Stencil, Marko, Rax, Solid, Sapper, Stimulus, Alpine.js, LitElement, Lit, Nerv, Preact X, SvelteKit, Svelte Native



21. Fragment in react?
Fragments are used to group elements without adding extra nodes to the DOM.
It is used to return multiple elements from a component.
syntax: <React.Fragment> or <></>

22. framwork vs library?
Framework: A framework is a collection of libraries that provides a structure for building applications.
It is a set of rules and guidelines that are used to build an application.
Library: A library is a collection of functions that are used to perform specific tasks.

23. How to pass data from parent to child component in react?
Data can be passed from parent to child component in react using props.

24.what is props in react?
Props are used to pass data from parent to child component in react.
syntax: <ChildComponent name="Nilaj" age={25} />

**what is key prop in react?
Key prop is used to identify the elements in the list of elements in react.
It is used to optimize the performance of the application.
It is used to uniquely identify the elements in the list of elements.


25. what is state in react?
State is used to store the data that can be changed in the react component.
example: this.state = { name: 'Nilaj', age: 25 };

**differce between variable and state in react?
Variable: Variable is used to store the data that can be changed in the react component.
State: State is used to store the data that can be changed in the react component.


26. what is hooks in react?

Hooks are functions that are used to add the functionality of the react component.

27. what is useSate in react?
useState is a hook that is used to add the state functionality to the functional component in react.
syntax: const [state, setState] = useState(initialState);



28. what is component in react?
Component is a reusable piece of code that is used to build the user interface in react.

**There is Switch component in react-router-dom?
Switch component is used to render the first child that matches the current location.
It is used to render the component that matches the current location.
example: <Switch> <Route path="/home" component={Home} /> <Route path="/about" component={About} /> </Switch>

 



29. types of components in react?
There are two types of components in react:
1. Functional component
2. Class component


Functional component: Functional components are used to build the user interface in react.It is the newer way to create component.
It is a simple javascript function that returns the JSX. It is also called as stateless component.
It is recommended aprraoch to create component.
syntax: function ComponentName() { return <h1>Hello, World!</h1>; }


Class component: Class components are used to build the user interface in react. it is older way to create component.

class components make use of ES6 class and extend the Component class in React.

30. What is Higher Order Component in react?
Higher Order Component is a pattern that is used to share the common functionality between the components.
It is a function that takes a component as an argument and returns a new component.
It is used to add the functionality to the component.
**When to use Higher Order Component?
i)When you want to share the common functionality between the components.
ii)When you want to add the functionality to the component.
iii)When you want to reuse the code between the components.

31. What is context in react?
Context is used to pass the data to the component without passing the props through the component tree.
It is used to share the data between the components.
example: const ThemeContext = React.createContext('light');


32.what is axios in react?
Axios is a promise-based HTTP client that is used to make HTTP requests in the react application.
It is used to fetch the data from the server.

** How to use axios in react?
i) Install axios using the following command:
npm install axios
ii) Import axios in the react component:
import axios from 'axios';
iii) Use axios to make HTTP requests in the react component:
axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log(error);
    });

** Example of Http methods in axios:
i) GET method:
ii) POST method:
iii) PUT method:
iv) DELETE method:


33. what is react router?
React Router is a library that is used to handle the routing in the react application.

34. What is react lifecycle methods?
React lifecycle methods are the methods that are called at different stages of the component lifecycle.
There are three phases of the component lifecycle:
i) Mounting
ii) Updating
iii) Unmounting

Mounting: Mounting is the phase in which the component is created and inserted into the DOM.
There are four lifecycle methods in the mounting phase:
i) constructor()
ii) static getDerivedStateFromProps()
iii) render()
iv) componentDidMount()

Updating: Updating is the phase in which the component is updated and re-rendered.
There are five lifecycle methods in the updating phase:
i) static getDerivedStateFromProps()
ii) shouldComponentUpdate()
iii) render()
iv) getSnapshotBeforeUpdate()
v) componentDidUpdate()

Unmounting: Unmounting is the phase in which the component is removed from the DOM.
There is one lifecycle method in the unmounting phase:
i) componentWillUnmount()
componentWillUnmount() is called just before the component is removed from the DOM.


35. what is Redux in react?

Redux is a state management library that is used to manage the state of the react application.
It is used to store the data that can be shared between the components.
It is used to maintain the global state of the application.


Store: Store is used to store the state of the application. It is a single source of truth.
    and it is used to maintain the global state of the application.
Actions: Actions are used to send the data from the application to the store. It is a plain javascript object.
         and it is used to specify what happened in the application.

Reducers: Reducers are used to specify how the state of the application changes in response to the action.


Dispatch: Dispatch is used to send the action to the store.



HTML
-------
1.slectors in css?
Answer: Selectors are used to select the elements in the HTML document.
There are different types of selectors in CSS:
i) Element selector 
Definition: The element selector is used to select the elements in the HTML document.
syntax: h1 { color: red; }
ii) Class selector
Definition: The class selector is used to select the elements with the specific class in the HTML document.
syntax: .class { color: red; }
iii) ID selector
Definition: The ID selector is used to select the element with the specific ID in the HTML document.
syntax: #id { color: red; }
iv) Universal selector
Definition: The universal selector is used to select all the elements in the HTML document.
syntax: * { color: red; }
v) Attribute selector
Definition: The attribute selector is used to select the elements with the specific attribute in the HTML document.
syntax: [attribute] { color: red; }
vi) Pseudo-class selector
Definition: The pseudo-class selector is used to select the elements with the specific state in the HTML document.
syntax: :hover { color: red; }
vii) Pseudo-element selector
Definition: The pseudo-element selector is used to select the part of the element in the HTML document.
syntax: ::before { content: 'Hello'; }

**priroty given to the css selectors it is highest to lowest?
Answer: The priority of the CSS selectors is as follows:

1. Inline styles
2. ID selectors
3. Class selectors
4. Element selectors
5. Universal selectors
6. Attribute selectors
7. Pseudo-class selectors
8. Pseudo-element selectors


**lower to higher priority of css selectors?
Answer: The priority of the CSS selectors is as follows:
1. Pseudo-element selectors
2. Pseudo-class selectors
3. Attribute selectors
4. Universal selectors
5. Element selectors
6. Class selectors
7. ID selectors
8. Inline styles


2. anchor tag in html?
Answer: Anchor tag is used to create a hyperlink in the HTML document.
It is used to link one page to another page. syntax: <a href="https://www.google.com">Google</a>

3. what is div in html?
Answer: Div is a block-level element that is used to group the elements in the HTML document.

4. what is span in html?
Answer: Span is an inline element that is used to group the elements in the HTML document.

5.iframe in html?
Answer: Iframe is used to embed another document within the current HTML document.
It is used to display the content from another source. 

6. required attribute in html?
Answer: Required attribute is used to specify that an input field must be filled out before submitting the form.
It is used to validate the input field. 

7. marquee tag in html?
Answer: Marquee tag is used to scroll the text or image horizontally or vertically.
It is used to create the scrolling effect in the HTML document.

8. figcaption tag in html?
Answer: Figcaption tag is used to add a caption to the figure element.
It is used to describe the content of the figure element.

9. Difference between bold and strong tag in html?
Answer: Bold tag is used to make the text bold in the HTML document.
Strong tag is used to make the text important in the HTML document.


10.how to add shadow in css?
Answer: Shadow can be added to the element using the box-shadow property in CSS.
        gradient can be added to the element using the background property in CSS.
        text-shadow property is used to add the shadow to the text in CSS.

11. how to add gradient in css?
Answer: Gradient can be added to the element using the background property in CSS.
        background: linear-gradient(red, yellow);
        background: radial-gradient(red, yellow);

12. how to add border in css?
Answer: Border can be added to the element using the border property in CSS.
        border: 1px solid red;
        border-radius: 5px;

13.What is root element in html?
Answer: Root element is the top-level element in the HTML document.
It is the parent element of all the elements in the HTML document.
It is used to define the structure of the HTML document. 
syntax: <!DOCTYPE html> <html> <head> <title>Document</title> </head> <body> </body> </html>

<body> tag is used to define the body of the HTML document.
It is used to define the content of the HTML document.

<head> tag is used to define the head of the HTML document.
It is used to define the metadata of the HTML document.

<title> tag is used to define the title of the HTML document.
It is used to define the title of the HTML document.

<!DOCTYPE html> tag is used to define the document type of the HTML document.
It is used to specify the version of the HTML document.



14. what is doctype in html?
Answer: Doctype is used to define the document type of the HTML document.
It is used to specify the version of the HTML document.

15. what is meta tag in html?
Answer: Meta tag is used to provide the metadata of the HTML document.

16. what is attribute in html?
Answer: Attribute is used to provide additional information about the element in the HTML document.
It is used to specify the properties of the element.
example: <img src="image.jpg" alt="image">

17. Difference between <select> and <datalist> in html?
Answer: Select tag is used to create a dropdown list in the HTML document.
Datalist tag is used to create a list of options for the input field in the HTML document.

18. Difference between <ol> and <ul> in html?
Answer: Ol tag is used to create an ordered list in the HTML document.
Ul tag is used to create an unordered list in the HTML document.

19. void element in html?
Answer: Void elements are the elements that do not have closing tags in the HTML document.
Void elements are self-closing elements.
example: <img>, <br>, <hr>, <input>, <link>, <meta>

20. what is semantic html?
Answer: Semantic HTML is used to provide meaning to the content of the HTML document.
It is used to define the structure of the HTML document.

21.Write down the tags which are not closed in html?
Answer: Void elements are the elements that do not have closing tags in the HTML document.
Void elements are self-closing elements.
example: <img>, <br>, <hr>, <input>, <link>, <meta>

 22. What is difference between normal tag and void tag in html?
Answer: Normal tag is the tag that has opening and closing tags in the HTML document.
example: <p>Content</p> , <div>Content</div>, <span>Content</span>  , <h1>Content</h1>
        
  
Void tag is the tag that does not have closing tags in the HTML document.
example: <img>, <br>, <hr>, <input>, <link>, <meta>


23. html vs Xhtml?
Answer: HTML is a markup language that is used to build the structure of the web page.
XHTML is a stricter version of HTML that follows the XML syntax rules.
HTML is case-insensitive and XHTML is case-sensitive.
HTML allows the use of empty elements without closing tags and XHTML requires the closing tags for the empty elements.
HTML allows the use of attributes without quotes and XHTML requires the attributes to be enclosed in quotes.

24.what are the tags to display the content in html?
Answer: There are different tags to display the content in the HTML document:
i) Paragraph tag: <p>Content</p>
ii) Heading tag: <h1>Content</h1>
iii) Span tag: <span>Content</span>
iv) Div tag: <div>Content</div>
v) Anchor tag: <a href="https://www.google.com">Google</a>
vi) Image tag: <img src="image.jpg" alt="image">
vii) List tag: <ul><li>Item1</li><li>Item2</li></ul>

viii) Table tag: <table><tr><td>Cell1</td><td>Cell2</td></tr></table>

<table> tag is used to create a table in the HTML document.
<tr> tag is used to create a row in the table.
<td> tag is used to create a cell in the row.

ix) Form tag: <form><input type="text" name="name"></form>
x) Button tag: <button>Click</button>


25. Display none vs visibility hidden in css?
Answer: Display none is used to hide the element in the HTML document.
It removes the element from the layout of the document.
Visibility hidden is used to hide the element in the HTML document. 
It hides the element but it still occupies the space in the layout of the document.

26. what is box model in css?
Answer: Box model is used to define the structure of the element in the HTML document.
It consists of four properties:
i) Content: It is the content of the element.
ii) Padding: It is the space between the content and the border of the element.
iii) Border: It is the border of the element.
iv) Margin: It is the space outside the border of the element.

27. what is flexbox in css?
Answer: Flexbox is a layout model that is used to design the layout of the elements in the HTML document.
It is used to align the elements in the row or column.
It is used to distribute the space between the elements.

28. what is grid in css?
Answer: Grid is a layout model that is used to design the layout of the elements in the HTML document.
It is used to create a two-dimensional layout of the elements.
It is used to align the elements in the rows and columns.

29. what is css in html?
Answer: CSS is used to style the elements in the HTML document.
It is used to define the appearance of the elements.
It is used to design the layout of the elements.
full form of css is cascading style sheet.

30. what is media query in css?
Answer: Media query is used to apply the styles based on the device properties in the CSS.
It is used to create the responsive design of the website.
It is used to apply the styles based on the screen size of the device.

31. what is pseudo class in css?
Answer: Pseudo-class is used to define the special state of the element in the HTML document.
It is used to style the element based on the state of the element.
It is used to apply the styles based on the user interaction with the element.



*/








