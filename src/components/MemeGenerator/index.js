import {Component} from 'react'
import {MemeContainer, MemeText} from './styledComponents'

import './index.css'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    memeDetails: {
      imageUrl: '',
      topText: '',
      bottomText: '',
      fontSize: '',
    },
  }

  onChangeImageUrlInput = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  submitDetails = event => {
    event.preventDefault()

    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state
    this.setState({
      memeDetails: {
        imageUrl: imageUrlInput,
        topText: topTextInput,
        bottomText: bottomTextInput,
        fontSize: `${fontSizeInput}px`,
      },
    })
  }

  render() {
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
      memeDetails,
    } = this.state
    const {imageUrl, topText, bottomText, fontSize} = memeDetails

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.submitDetails}>
          <h1 className="form-heading">Meme Generator</h1>
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="imageUrl"
            className="form-input"
            placeholder="Enter the Image URL"
            value={imageUrlInput}
            onChange={this.onChangeImageUrlInput}
          />
          <label htmlFor="topText" className="form-label">
            Top Text
          </label>
          <input
            type="text"
            id="topText"
            className="form-input"
            placeholder="Enter the Top Text"
            value={topTextInput}
            onChange={this.onChangeTopText}
          />
          <label htmlFor="bottomText" className="form-label">
            Bottom Text
          </label>
          <input
            type="text"
            id="bottomText"
            className="form-input"
            placeholder="Enter the Bottom Text"
            value={bottomTextInput}
            onChange={this.onChangeBottomText}
          />
          <label htmlFor="imageUrl" className="form-label">
            Font Size
          </label>
          <select
            type="text"
            id="imageUrl"
            className="form-input"
            value={fontSizeInput}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(each => (
              <option value={each.optionId} key={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <button type="submit" className="form-btn">
            Generate
          </button>
        </form>
        <MemeContainer data-testid="meme" imageUrl={imageUrl}>
          <MemeText fontSize={fontSize}>{topText}</MemeText>
          <MemeText fontSize={fontSize}>{bottomText}</MemeText>
        </MemeContainer>
      </div>
    )
  }
}

export default MemeGenerator
