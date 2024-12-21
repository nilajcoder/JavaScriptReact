import profilePic from '../assets/wonder.jpg'
function CardWomen(){

    return(

        <div className="card">

            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Wonder Woman</h2>
            <p>DC Universe</p>

        </div>

    );


}

export default CardWomen