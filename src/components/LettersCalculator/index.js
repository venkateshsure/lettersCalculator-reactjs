// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {word: ''}

  wordCount = event => {
    this.setState({word: event.target.value})
  }

  render() {
    const {word} = this.state
    return (
      <div className="bg-con">
        <div className="cg-con">
          <div className="dg-con">
            <div className="inner-dg-con">
              <h1 className="head">Calculate the Letters you enter</h1>
              <label htmlFor="phraseInput" className="para">
                Enter the phrase
              </label>
              <input
                placeholder="Enter the phrase"
                type="text"
                className="input-con"
                onChange={this.wordCount}
                id="phraseInput"
              />
              <div className="eg-con">
                <p className="eg-con-para">No.of letters: {word.length}</p>
              </div>
            </div>
            <img
              className="img-con"
              alt="letters calculator"
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
