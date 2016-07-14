import React, {Component} from 'react'
import {connect} from 'react-redux'
import Navbar from './Navbar'

import {} from '../utils/index'

class Home extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <h1>Welcome to {this.props.title}</h1>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    title: state.get('title')
  }
}

export default connect(mapStateToProps)(Home)