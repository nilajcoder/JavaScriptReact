/*

// propTypes = a mechanism that ensures that the passed value
//             is of the correct datatype.
//             age: PropTypes.number

*/

import PropTypes from 'prop-types'
function Student(props){

    return(
      <div className="student">
        <p>Name :{props.name}</p>
        <p>Age :{props.age}</p>
        <p>Student :{props.isStudent ? "YES" : "No"}</p>
      </div>

    );

    Student.propTypes={
        name:PropTypes.string,
        age :PropTypes.number,
        isStudent :PropTypes.bool



    }

}

export default Student