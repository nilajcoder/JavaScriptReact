import profilePic from '../assets/aqua.jpg'
function CardAqa(){

    return(

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>AquaMan</h2>
            <p>DC Universe</p>

        </div>

    );


}

export default CardAqa