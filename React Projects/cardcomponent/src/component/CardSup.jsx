import profilePic from '../assets/super.jpg'
function CardSup(){

    return(

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>SuperMan</h2>
            <p>DC Universe</p>

        </div>

    );


}

export default CardSup