import React, { Component } from 'react';
import PersonComponent from './PersonComponent';

class App extends Component {

  state = {
    // classroom : ['Scott', 'Myron', 'Rachael', 'Travis', 'Lucas', 'Luke']
    clicks: 0,
    classroom: [
      {
        name: 'Scott',
        role: 'Instructor'
      },
      {
        name: 'Myron',
        role: 'Instructor'
      },
      {
        name: 'Rachael',
        role: 'Instructor'
      },
      {
        name: 'Josh',
        role: 'Student'
      },
      {
        name: 'Dane',
        role: 'Student'
      },
      {
        name: 'Allen',
        role: 'Student'
      },
    ]
  }

  clickyClick = (event) => {
    this.setState({
      clicks: this.state.clicks + 1
    })
  }

  render() {
    const htmlArray = this.state.classroom.map((item,index) => {
      return (
        <PersonComponent key={index} name={item.name} role={item.role} clickyClick={this.clickyClick}/>
      )
    });

    return (
      <div className="App">
        <h1>Clicky Click: {this.state.clicks}</h1>
        <div>
          {htmlArray}
        </div>
      </div>
    );
  }
}

export default App;
