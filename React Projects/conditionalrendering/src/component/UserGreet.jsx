/*

// conditional rendering = allows you to control what gets rendered
//                         in your application based on certain conditions
//                         (show, hide, or change components)

*/


function UserGreet(props){

    if(props.isLoggedIn){
        return <h2 className="welcome-msg">Welcome :{props.username}</h2>

    }
    else {
        return <h2 className="login">Please Log in to Continue</h2>
    }



}
export default UserGreet