import UserGreet from "./component/UserGreet"


function App() {
 return(

  <>

  <UserGreet isLoggedIn={true} username="nilajcoder"/>
  <UserGreet isLoggedIn={false} username="nilajcoder"/>
  
  
  </>
 )
 
}

export default App
