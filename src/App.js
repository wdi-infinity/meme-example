import React, { Component } from 'react';
import './App.css';
import Meme from './Meme';

class App extends Component {

  state = {
    formData: {
      title: '',
      image: ''
    },
    memes: [
      {
        "title": "Angry",
        "image": "http://imgur.com/kH6o0mN.png"
      },
      {
        "title": "Aww Yeah",
        "image": "http://imgur.com/vTSZ6CG.png"
      },
      {
        "title": "Cereal Guy",
        "image": "http://imgur.com/SjnMMhd.png"
      },
      {
        "title": "Cereal Spitting",
        "image": "http://imgur.com/rdw32yx.png"
      },
      {
        "title": "Challenge Accepted",
        "image": "http://imgur.com/xHcS2LF.png"
      },
      {
        "title": "Heck Yea",
        "image": "http://imgur.com/DRd0yKE.png"
      },
      {
        "title": "Concentrated",
        "image": "http://imgur.com/t9uwvai.png"
      },
      {
        "title": "Derrrp",
        "image": "http://imgur.com/kBSZgbG.png"
      },
      {
        "title": "Determined",
        "image": "http://imgur.com/CATjyHj.png"
      },
      {
        "title": "Dude Come On",
        "image": "http://imgur.com/8Tkr6ld.png"
      },
      {
        "title": "EWBTE",
        "image": "http://imgur.com/ZaSaYAK.png"
      },
      {
        "title": "Excited Troll",
        "image": "http://imgur.com/CFLPW9U.png"
      },
      {
        "title": "Fap Fap",
        "image": "http://imgur.com/NImikb7.png"
      },
      {
        "title": "Forever Alone",
        "image": "http://imgur.com/4L89AMP.png"
      },
      {
        "title": "Forever Alone Excited",
        "image": "http://imgur.com/NyEoz2g.png"
      },
      {
        "title": "Oh Yea Female",
        "image": "http://imgur.com/WMgvwaq.png"
      },
      {
        "title": "Full Panel",
        "image": "http://imgur.com/iN5P0r4.png"
      },
      {
        "title": "Happy",
        "image": "http://imgur.com/JqhcMU4.png"
      },
      {
        "title": "Hehehe",
        "image": "http://imgur.com/U9GK6jL.png"
      },
      {
        "title": "Laughing",
        "image": "http://imgur.com/wJUtNXR.png"
      },
      {
        "title": "Me Gusta",
        "image": "http://imgur.com/6otWkQZ.png"
      },
      {
        "title": "Milk",
        "image": "http://imgur.com/bxMhEKZ.png"
      },
      {
        "title": "Newspaper Guy",
        "image": "http://imgur.com/MhbPTSQ.png"
      },
      {
        "title": "Okay",
        "image": "http://imgur.com/X6niVYQ.png"
      },
      {
        "title": "Original Rage",
        "image": "http://imgur.com/CD0nLh8.png"
      },
      {
        "title": "Original Troll",
        "image": "http://imgur.com/sV4AReH.png"
      },
      {
        "title": "Poker Face",
        "image": "http://imgur.com/EFHsGkJ.png"
      },
      {
        "title": "Prrrr",
        "image": "http://imgur.com/gXmsig6.png"
      },
      {
        "title": "Smile",
        "image": "http://imgur.com/Bp2y4zT.png"
      },
      {
        "title": "Thoughtful",
        "image": "http://imgur.com/HdmBrwX.png"
      },
      {
        "title": "Troll Dad Full",
        "image": "http://imgur.com/Mgyz87x.png"
      },
      {
        "title": "Troll Dad Jump",
        "image": "http://imgur.com/PFzOfO7.png"
      },
      {
        "title": "Wait A Minute",
        "image": "http://imgur.com/rxlv8TX.png"
      },
      {
        "title": "What",
        "image": "http://imgur.com/0JmUzko.png"
      },
      {
        "title": "Why With Hands",
        "image": "http://imgur.com/gEZW60M.png"
      },
      {
        "title": "YUNO",
        "image": "http://imgur.com/uXKy3RJ.png"
      }
    ] 
  }
  updateForm = (event) => {
    // get the value the user typed
    const newData = event.target.value
    // get the original state
    const originalState = this.state.formData
    // make a copy of the original state
    const copy = Object.assign({}, originalState);
    // get key from name of input
    const key = event.target.name // 
    // update the copy with the data the user typed
    copy[key] = newData
    // update the state with the new copy
    this.setState({
      formData: copy
    })
  }
  submitForm = (event) => {
    // prevent the form from refreshing the page
    event.preventDefault()
    // make a copy of the memes array
    const copy = this.state.memes.slice(0)
    // add the new meme data to the array
    copy.push(this.state.formData)
    // update the state with our new copy
    this.setState({
      memes: copy,
      formData: {
        title: '',
        image: ''
      } 
    })
  }
  render() {
    const memesList = this.state.memes.map((meme) => {
      return <Meme meme={meme}/>;
    })
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <label>Title</label>
          <input type='text' name='title' onChange={this.updateForm} value={this.state.formData.title}/>
          <label>Image</label>
          <input type='text' name='image' onChange={this.updateForm} value={this.state.formData.image}/>
          <button type='submit'>Save Meme</button>
        </form>
        {memesList}
      </div>
    );
  }
}

export default App;
