import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      homeaddressline1: '',
      homeaddressline2: '',
      homepostcode: '',
      phonenumber: '',
      email: '',
      weight: '',
      comments: '',
      collectionaddressline1: '',
      collectionaddressline2: '',
      collectionpostcode: '',
      deliveryaddressline1: '',
      deliveryaddressline2: '',
      deliverypostcode: '',
      // ...
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Planet Express</h1>
        </header>
        <form className="orderform" method="post">
        <h2>My personal details</h2>
        <p>
          <label>First Name</label>
          <input type="text" name="firstname" onChange={this.handleInputChange}  />
        </p>
        <p>
          <label>Last Name</label>
          <input type="text" name="lastname" />
        </p>
        <p>
          <label>Address Line 1</label>
          <input type="text" name="homeaddressline1" />
        </p>
        <p>
          <label>Address Line 2</label>
          <input type="text" name="homeaddressline2" />
        </p>
        <p>
          <label>Postcode</label>
          <input type="text" name="homepostcode" />
        </p>
        <p>
          <label>Phone Number</label>
          <input type="text" name="phonenumber" />
        </p>
        <p>
          <label>Email</label>
          <input type="email" name="email" />
</p>

        <h2>Package details</h2>
        <p>
          <label>Weight (kg)</label>
          <input type="number" name="weight" />
        </p>
        <p>
          <label>Comments</label>
          <textarea name="comments"></textarea>
</p>

        <h2>Collection Address</h2>
        <p>
          <label>Address Line 1</label>
          <input type="text" name="collectionaddressline1" />
        </p>
        <p>
          <label>Address Line 2</label>
          <input type="text" name="collectionaddressline2" />
        </p>
        <p>
          <label>Postcode</label>
          <input type="text" name="collectionpostcode" />
</p>

        <h2>Delivery Address</h2>
        <p>
          <label>Address Line 1</label>
          <input type="text" name="deliveryaddressline1" />
        </p>
        <p>
          <label>Address Line 2</label>
          <input type="text" name="deliveryaddressline2" />
        </p>
        <p>
          <label>Postcode</label>
          <input type="text" name="deliverypostcode" />
</p>
        <button type="submit">Place order</button>
        </form>
      </div>
    );
  }
}

export default App;
