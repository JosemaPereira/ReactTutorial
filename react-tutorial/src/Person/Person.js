import React from 'react';
import './Person.css';
const Person = (props) => {
   return (
      <div className="Person">
         <p onClick={props.click}>
            Nombre: {props.name} Edad: {props.age}
         </p>

         <input type="text" onChange={props.change} value={props.name}/>
      </div>
   )
};

export default Person;