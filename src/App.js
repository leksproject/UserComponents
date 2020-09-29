import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username : "Lauren"
    }
  }

  changeHandler=(event)=>{
    this.setState({
      username : event.target.value
    })
  }

render(){
  return (
    <div className="App">
      <ol>
        <li>Create TWO new components: UserInput and UserOutput</li>
        <li>UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
<li>Pass a username (of your choice) to UserOutput via props and display it there</li>
        


        
      </ol>
     <h3>Handling props between components</h3>
    <UserInput 
    change={this.changeHandler}
    currentval={this.state.username}/>
    <UserOutput username={this.state.username}/>
    <UserOutput username="AwesomeGirl"/>
    </div>
  );
}
}

export default App;
