import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './components/Header'
import Footer from './components/Footer'
import Shelf from './Shelf'

export default class SearchPage extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  render() {
    const term = this.props.params.term
    return (
      <div>
        <Shelf query={term} />
      </div>
    )
  }
}
