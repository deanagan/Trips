import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Hello, welcome to trip reporter!</h1>
        <p>This is a basic CRUD app in react that allows us to manage our trips:</p>
        <ul>
          <li>Add a new trip</li>
          <li>Update a trip</li>
          <li>Delete a trip (if it wasn't that memorable?)</li>
          <li>Show all the places you've been!</li>
        </ul>
        
      </div>
    );
  }
}
