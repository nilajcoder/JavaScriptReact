/*

 1.What is props in React?
Answer: Props is a special keyword in React, which stands for properties and is being used 
for passing data from one component to another. But the important part here is that data with props are 
being passed in a uni-directional flow. ( one way from parent to child)


2. What is state in React?
Answer: State is the place where the data comes from.
 We should always try to make our state as simple as possible and minimize the number of stateful components.


 3. What is the difference between state and props in React?
Answer: Props are read-only and state is read/write.

4. What is a hook in React?
Answer: Hooks are functions that let you “hook into” React state and lifecycle features from function components.

5. what is useState in react?
Answer: useState is a Hook that allows you to have state variables in functional components.
 and update the state variable. useState is a Hook that takes the initial state as an argument and returns an array of two entries.
 one is the current state and the other is a function that lets you update it.


6.What is Component in React?
Answer: Components are independent and reusable code that divides the UI into smaller pieces.

7. What is the difference between functional and class components?

Answer: Functional components are basic JavaScript functions. 
These are typically arrow functions but can also be created with the regular function keyword.

Class components make use of ES6 class and extend the Component class in React.
and must include the render method, which returns the JSX.



8.differce between variable and state in react?
Answer: Variables are used for temporary data that doesn’t affect the UI or need to persist across renders.
Use hooks for managing state that affects the UI and needs to persist across renders.

9. What is React ?
Answer: React is a front-end JavaScript library developed by Facebook in 2011.

10. What is JSX?
Answer: JSX is a syntax extension for JavaScript. It was written to be used with React.
 JSX code looks a lot like HTML.

 11.difference between react and javascript?
Answer: React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps.
On the other hand, JavaScript is a scripting language that is used for creating web pages.

12. What is the difference between React and Angular?
Answer: React is a library developed by Facebook to handle the view layer for web and mobile apps.
Angular is a platform and framework for building single-page client applications using HTML and TypeScript.
1. React is fast in updating the view, whereas Angular is slow in updating the view.
2.React two way binding and angular one way binding.
3.React is virtual DOM and Angular is regular DOM.
4.react rendering client side and angular rendering server side.






*/ 


import { useState } from "react";
const Name = (props) => {

    const [name, setName] = useState('Deepika') 
    const [country, setCountry] = useState(props.country); // Default to props.country


    
    
    const toggleName = () => {
        setName((prevName) => (prevName === 'Deepika' ? 'Simran' : 'Deepika'));
      }

      const toggleNameAndCountry = () => {
        if (name === 'Deepika') {
          setName('Simran');
          setCountry('England');
        } else {
          setName('Deepika');
          setCountry(props.country); // Reset to the original country
        }
    };

     
    

    
  return (
    <>
    <div>
        <h1>Hello,{name} from {country}</h1>

        <button onClick={()=>setName('Simran')}>Click The button</button>
        <button onClick={toggleName}>Toggle Button</button>
        <button onClick={toggleNameAndCountry}>Toggle Name and Country</button>
       
    </div>
      
    </>
  )
};

export default Name;