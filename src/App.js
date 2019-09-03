import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    quotes: [
      {
        id: 1,
        title: 'Take out trash',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'John Crumb',
        completed: false
      },
      {
        id: 2,
        title: 'Wash Dishes',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'James Sands',
        completed: true
      },
      {
        id: 3,
        title: 'Dinner with wife',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'Candy Jam',
        completed: false
      },
      {
        id: 4,
        title: 'Take out trash',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'John Crumb',
        completed: false
      },
      {
        id: 5,
        title: 'Wash Dishes',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'James Sands',
        completed: true
      },
      {
        id: 6,
        title: 'Dinner with wife',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'Candy Jam',
        completed: false
      },
      {
        id: 7,
        title: 'Take out trash',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'John Crumb',
        completed: false
      },
      {
        id: 8,
        title: 'Wash Dishes',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'James Sands',
        completed: true
      },
      {
        id: 9,
        title: 'Dinner with wife',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'Candy Jam',
        completed: false
      },
      {
        id: 10,
        title: 'Take out trash',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'John Crumb',
        completed: false
      },
      {
        id: 11,
        title: 'Wash Dishes',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'James Sands',
        completed: true
      },
      {
        id: 12,
        title: 'Dinner with wife',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus laborum illum numquam beatae earum reiciendis, placeat perferendis explicabo non veniam saepe facere quam temporibus, optio vero alias ullam tempore quas!',
        author: 'Candy Jam',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Body quotes={ this.state.quotes } />
        <Footer />
      </div>
    )
  }
}

export default App;
