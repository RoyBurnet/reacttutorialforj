import React, { Component } from 'react';

class App extends Component {
  state = {
    data: [
      { id: '1', title: 'This is the first item', completed: false },
      { id: '2', title: 'This is the second item', completed: false },
      { id: '3', title: 'This is the third title', completed: true },
    ],
  };

  removeItem = (id) => {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  render() {
    return (
      <div>
        <TitleComponent text="hello" />
        <ListComponent data={this.state.data} removeItem={this.removeItem} />
      </div>
    );
  }
}

const TitleComponent = ({ text }) => {
  return <h1>{text}</h1>;
};

const ListComponent = ({ data, removeItem }) => {
  return (
    <div>
      <h2>ListComponent</h2>
      {data.map((item) => {
        return (
          <ListElement
            key={item.id}
            id={item.id}
            name={item.name}
            title={item.title}
            removeItem={removeItem}
          />
        );
      })}
    </div>
  );
};

const ListElement = ({ id, removeItem, title }) => {
  return (
    <div>
      <p>
        Todo: <span>{title}</span>{' '}
        <button onClick={() => removeItem(id)}>X</button>
      </p>
    </div>
  );
};

export default App;
