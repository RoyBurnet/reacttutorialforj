import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [
      { id: '1', title: 'This is the first item', done: false },
      { id: '2', title: 'This is the second item', done: false },
      { id: '3', title: 'This is the third title', done: true },
    ],
  };

  render() {
    return (
      <div>
        <TitleComponent text="hello" />
        <ListComponent data={this.state.data}/>
      </div>
    );
  }
}

const TitleComponent = ({ text }) => {
  return <h1>{text}</h1>;
};

const ListComponent = ({data}) => {

  return (
    <div>
      <h2>ListComponent</h2>
      <ul>
      {data.map((item) => {
        return (<ListElement key={item.id}/>)
      })}
      </ul>
    </div>
  );
};

const ListElement = () => {
  return <li>element</li>;
};

export default App;
