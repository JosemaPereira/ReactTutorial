import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
   state = {
      persons: [
         {
            name: "Josema",
            age: 24,
            id: 1
         }, {
            name: "Tammy",
            age: 22,
            id: 2,
         },
         {
           name: "Sakura",
           age: 29,
           id: 3
         }
      ],
      show: false
   }

   deletePerson = (personIndex) =>{
    const persons= [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
   }

   showButton = () =>{
     const doesShow= this.state.show;
     this.setState({show: !doesShow});
   }

   nameChanged = (event, id) => {
     const personIndex = this.state.persons.findIndex( p =>{
       return p.id === id;
     });

     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;

     const persons= [...this.state.persons];
     persons[ personIndex] = person;

      this.setState({
       persons: persons
      });
    }

   render() {

    let persons=null;
    if (this.state.show){
      persons = (
        <div>
          {
            this.state.persons.map((person, index) =>{
              return <Person 
                click ={() => this.deletePerson (index)}
                name= {person.name} 
                age= {person.age}
                key= {person.id}
                change= {(event) => this.nameChanged(event, person.id)}
              />
            })
          }
        </div>
      );
    }
      return (
         <div className="App">
            <h1>
               Prueba
            </h1>
            <button onClick={this.showButton}>
               Boton
            </button>
            {persons}
         </div>
      );
   }
}

export default App;