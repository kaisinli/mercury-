import React, { Component } from 'react';
import { Link } from "react-router";
import Login from './Login'
import WhoAmI from './WhoAmI'
import View from './Modal'
import {connect} from 'react-redux'
import {modalShow} from "../reducers/modal"
import store from '../store'





// Ensure that we have (almost) always have a user ID, by creating
// an anonymous user if nobody is signed in.

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
      console.log('in click', this.props.modal)
    store.dispatch(this.props.modalShow(this.props.modal))
  }
  render() {
    {console.log(this.props, ' we have props')}

    return (
        <nav className="navbar navbar-inverse   navbar-fixed-top topnav " role="navigation">
            <div className="container topnav">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-left">
                        <li><Link id="home" to="/home">Home</Link></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#" onClick={() => this.handleClick()}> Login / Sign Up </a></li>
                    </ul>
                </div>
            </div>
            {console.log(this.props.modal.showModal, ' in navbar')}
            {this.props.modal.showModal ? <View /> : null }
        </nav>

    )
  }
}

/*const mapStateToProps = (state) => {
  return {modal: state.modal}
}*/


export default connect(
   ({ modal }) => ({ modal: modal }),
  {modalShow},
)(Navbar)

