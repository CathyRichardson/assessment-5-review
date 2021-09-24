import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser, logout } from '../../redux/reducer';
import homeLogo from './../../assets/home_logo.png';
import newLogo from './../../assets/new_logo.png';
import logoutLogo from './../../assets/shut_down.png';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  componentDidUpdate(prevProps){
    const isForm = window.location.hash.includes('form');
    if(isForm !== prevProps.isForm){
      this.props.setIsForm(isForm);
    }
  }

  getUser() {
    axios.get('/api/auth/me')
    .then(({ data }) => this.props.updateUser(data))
  }
  
  logout() {
    axios.post('/api/auth/logout')
      .then(this.props.logout)
  }
  
  render() {
      return this.props.location.pathname !== '/' &&
        <div className='nav'>
          <div className='nav-profile-container'>
            <div 
              className='nav-profile-pic'
              style={{ backgroundImage: `url(${this.props.profilePic})` }}
            />
            <p>{this.props.username}</p>
          </div>
          <div className='nav-links'>
            <Link to='/dash'>
              <img className='nav-img' src={homeLogo} alt='home' />
            </Link>
            <Link to='/form'>
              <img className='nav-img' src={newLogo} alt='new post' />
            </Link>
          </div>
          <Link to='/' onClick={this.logout}>
            <img className='nav-img logout' src={logoutLogo} alt='logout' />
          </Link>
        </div>
  }
}

const mapStateToProps = (state) => {
  return state;
}

const mapDispatchToProps = { 
  logout,
  updateUser
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));