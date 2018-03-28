import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FormattedNumber } from 'react-intl'

export default class ShelfItem extends Component {
  static contextTypes = {
    culture: PropTypes.object,
  }
  render() {
    const { imageUrl, name, price, productLink } = this.props
    return (
      <div>
        <a className="link near-black" href={`/p/${productLink}`}>
          <img src={imageUrl} width="200" height="200" />
          <div>{name}</div>
          <FormattedNumber
            value={price}
            style="currency"
            currency={this.context.culture.currency}
            minimumFractionDigits={2}
            maximumFractionDigits={2}
          />
        </a>
      </div>
    )
  }
}

ShelfItem.propTypes = {
  imageUrl: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  productLink: PropTypes.string,
}
