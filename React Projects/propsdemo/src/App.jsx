/*
javascript
// props = read-only properties that are shared between components.
// A parent component can send data to a child component.
<Component key=value >   App-Parent   Student-Child Component
*/


import Student from './component/Student.jsx'
function App() {

    return(
       <>
       <Student name="SpongeBob" age={30} isStudent={true}/>
       <Student name="Patrick" age={42} isStudent={false}/>
       <Student name="Sandy" age={18} isStudent={true}/>
       <Student name="Debu" age={65} isStudent={false}/>
       </>

    );
}

export default App
