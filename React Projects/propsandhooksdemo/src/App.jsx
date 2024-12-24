
/*

Use variables for temporary data that doesn’t affect the UI or need to persist across renders.
Use hooks for managing state that affects the UI and needs to persist across renders.


function App() {
    const country="India"
  return(
    <>
    <Name  country={country}/>
    </>
    explaination: this is the parent component where we are passing the country as a prop to the child component Name.
    the country is passed as a prop to the child component Name.
    and returning the Name component.
          


*/



import Name from './component/Name'
import './App.css'

function App() {
    const country="India"
  return(
    <>
    <Name  country={country}/>
    </>

  )

}
 



export default App
