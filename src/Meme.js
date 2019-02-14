import React, { Component } from 'react';

class Meme extends Component {
  state = {
    hide: 'hidden'
  }
  hideMeme = () => {
    if (this.state.hide === 'false'){
      this.setState({hide: 'hidden'})
    } else {
      this.setState({hide: 'false'})
    }
  }
  render() {
      return (
        <div>
            <h1 onClick={this.hideMeme}>{this.props.meme.title}</h1>
            <img className={this.state.hide} src={this.props.meme.image} alt='stuff'/>
        </div>
      )
  }
}

export default Meme;