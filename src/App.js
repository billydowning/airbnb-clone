import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Flat from './components/flat';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      flats: []
    };
  }



  render() {
    const flat = {
          "name": "Superbe vue à 2 min du Sacré Coeur",
          "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat5.jpg",
          "price": 135,
          "priceCurrency": "EUR",
          "lat": 48.888839,
          "lng": 2.339208
    };

    const flats = [ flat, flat, flat, flat ];

    return (
      <div className="app">
        <div className="main">
          <div className="search">
          </div>
          <div className="flats">
            {flats.map((flat) => {
              return <Flat flat={flat} />
            })}
          </div>
        </div>
        <div className="map">
        </div>
      </div>

    );
  }
}

export default App;
