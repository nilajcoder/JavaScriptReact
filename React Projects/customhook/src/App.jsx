/*

what is custom hook?
Custom hooks are a powerful feature in React that 
allow you to extract and reuse stateful logic across multiple components.
 They are JavaScript functions that can call other hooks, and they enable you to encapsulate complex logic in a reusable way.

 why use custom hook?
  Custom hooks are useful for:
1. Code Reusability: You can share logic between components without repeating code.
2. Separation of Concerns: You can separate complex logic from the UI, making your components cleaner and easier to understand.
3. Testing: Custom hooks can be tested independently, making it easier to ensure that your logic works correctly.


*/


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
 

 const [name ,setName] =useLocalStorage('username', '')
 const [id ,setId] =useLocalStorage('userId', '')

  return (
    <>
     <input type="text" placeholder= "Enter your name " 
      value={name} onChange={(e) => setName(e.target.value)} />
      <h2>Hello : {name}</h2>

      <input type="text" placeholder= "Enter your id " 
      value={id} onChange={(e) => setId(e.target.value)} />
      <h2>Your Id :{id}</h2>
     
    </>
  )
}

export default App
