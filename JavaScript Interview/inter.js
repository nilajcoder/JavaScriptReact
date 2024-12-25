/*

1.What is HTML?
Ans: HTML stands for Hyper Text Markup Language. 
It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language.
 Hypertext defines the link between the web pages. A markup language is used to define the text document
  within tag which defines the structure of web pages.
2. Semantic Tags in HTML
Ans: Semantic elements = elements with a meaning.
A semantic element clearly describes its meaning to both the browser and the developer.
Examples of non-semantic elements: <div> and <span> - Tells nothing about its content.
Examples of semantic elements: <form>, <table>, and <article> - Clearly defines its content.
3. four exmples of semantic tags
Ans: <article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>

4.apart from meaning to browser does semantic elements help other way?
Ans: Yes, it helps in SEO(Search Engine Optimization) and Accessibility.

5. what are tags & attributes?
Ans: Tags are the basic component of HTML. It is used to create HTML elements.
Attributes provide additional information about the element. It is always specified in the start tag.
example: <a href="https://www.google.com">Google</a> here href is an attribute.
 and <a> is a tag.
6. difference between div and span?
Ans: div is a block element and span is an inline element.

7. examples of inline elements.
Ans: <a>, <b>, <span>, <img>, <input>, <label>, <select>, <strong>, <textarea>
8. apart from width difference is there sny other differnce?

9. can we give height & width in inline elements?
Ans: No, we can't give height and width to inline elements.
10. diff between canvas and nsvg
Ans: Canvas is a container used to draw graphics on the web page using JavaScript.
11. full form of css
Ans: Cascading Style Sheets
12. tell meaning of cascading in css
Ans: Cascading means the process of combining multiple style sheets and resolving conflicts between them.
13. if we give some styling to parent will it apply on the child also?
Ans: Yes, it will apply to the child also.
14. what is specificity?
Ans: Specificity is the process of determining which CSS rule will be applied by the browser.
15. default value of position property
Ans: static
16. difference between position relative and absolute
Ans: Relative: It is positioned relative to its normal position.
Absolute: It is positioned relative to the nearest positioned ancestor.
17. what is flexbox?
Ans: Flexbox is a layout model used to design a responsive web page.
18. if we have a container and inside container there are two elements span 1 and span2 & we give display:
flex to parent will it apply to its children as well?
Ans: Yes, it will apply to its children also.

19. what is box model in css?
Ans: The CSS box model is a container that contains multiple properties including borders,
 margin, padding, and the content itself.
20. default value of box-sizing?
Ans: content-box 
21. diff in content box border box?
Ans: Content Box: It includes only the content.
Border Box: It includes content, padding, and border.
22. why do we need javascript ?
Ans: JavaScript is used to design interactive web pages. It is used to validate the form, create cookies,
 and detect the browser.    
23. what are different data types in javascript?
Ans: Number, String, Boolean, Object, Null, Undefined
24. why do we have categories like premetive and non premitive in JS?
Ans: Primitive data types are immutable and non-primitive data types are mutable.
primitive data types example: Number, String, Boolean, Null, Undefined
non-primitive data types example: Object, Array, Function
25. in how many ways we csn create variabls in JS?
Ans: var, let, const
26. diff b/w let and var and there scope?
Ans: Var: It is function scoped.
Let: It is block scoped.
const: It is block scoped.
27. diff b/w parameter and argument?
Ans: Parameter: It is a variable in the declaration of the function.
Argument: It is the actual value of the variable.

28. difference b/w slice and splice methods?
Ans: Slice: It returns the selected elements in an array.
Splice: It adds or removes the elements in an array.

29. why do we use map method in array?
Ans: The map() method is used to iterate over an array and modify the elements in the array.

30. what are promises in javascript?
Ans: Promises are used to handle asynchronous operations in JavaScript.
syntax: new Promise((resolve, reject) => { // code })
31. what is DOM?
Ans: Document Object Model is a programming interface for web documents. It represents the structure of the document.

32. EVENT BUBBLING & CAPTURING
Ans: Event bubbling: It starts from the target element and bubbles up to the parent element.
Event capturing: It starts from the parent element and goes down to the target element.

33. why do we need React?
Ans: React is used to design single-page applications. It is used to create reusable UI components.

34. diff b/w imperative and declarative?
Ans: Imperative: It tells how to do something.
Declarative: It tells what to do.

35. what is concept of state in React?
Ans: State is used to store the data in the component. It is mutable.
    and changes in state will re-render the component.

36. why dont we use normal variable why state?

ans: Normal variables are immutable and state is mutable.
       
37. GUESS OUTPUT::
 var x=20 
function foo(){
console.log(x)
var x=10
}
foo()
// if change x=10 to let x=10 what will happen?


ans : it will give reference error x is not defined


38. console.log('Start')
setTimeout(()=>{
console.log('timeout')
},0)
console.log('End')
//the order in which it will run?


ans: Start, End, timeout


39. setTimeout(()=>{
console.log('timeout')
},0)
Promise.resolve().then(()=>console.log('Promise'))
console.log('End')

ans: End, Promise, timeout

40. async funtion foo(){
return 'Hello World'
}
const result = foo()
console.log(result)

ans: Promise {<resolved>: "Hello World"}

41. [1,2]==[1,2]

ans: false


42. const user1={
name: 'john',
age:25,
address:{
city:'Mumbai',
state:'Mahrashtra'
},}
const user2 = user1
user2.name = 'Ramesh'
user2.address.city='Pune'
console.log(user1)
console.log(user2)

ans: {name: "Ramesh", age: 25, address: {city: "Pune", state: "Mahrashtra"}}


43. const numbers= [0,1,2,3,4,5,6] //filter out all values less than 3
ans: numbers.filter(num=>num<3)
      
44. create a string variable add a string in lowerCase and convert first letter of each to
 uppercase OR can you transform it into array.
ans: let str = 'hello world'
str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ')
  console.log(str)
OR
 
45. PROJECT:: create a TODO list in which there will be input and add button delete also
ans:  <input type="text" id="todo" placeholder="Enter your todo">
        <button onclick="addTodo()">Add</button>
        <ul id="todos"></ul>
        <script>
        function addTodo(){
        const todo = document.getElementById('todo').value
        const li = document.createElement('li')
        li.textContent = todo
        document.getElementById('todos').appendChild(li)
        }
        </script>
46. what is the difference between == and === in JS?
Ans: == compares only the value.
=== compares the value and type.
47. what is the difference between null and undefined?
Ans: Null: It is an assigned value. It means nothing. it is an object.
           it assigned to a variable as a representation of no value.
Undefined: It is a type of variable. It is assigned to a variable that has not been assigned a value.



*/