import profilePic from '../assets/bat.jpg'
function CardBat(){

    return(

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>BatMan</h2>
            <p>DC Universe</p>

        </div>

    );


}

export default CardBat