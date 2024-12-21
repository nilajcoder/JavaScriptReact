import profilePic from '../assets/justice.jpg'
function CardJustice(){

    return(

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Justice League</h2>
            <p>DC Universe</p>

        </div>

    );


}

export default CardJustice