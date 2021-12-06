import {component} from 'react'
import './index.css'

class CLickCounter extends component {
  state = {count: 0}

  onIncrementCount = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter-container">
        <h1 className="counter-heading">
          The button has been clicked
          <br />
          <span className="counter-value">{count}</span> times
        </h1>
        <p className="description">click the button to increase the count</p>
        <div className="button-container">
          <button
            type="button"
            className="button"
            onClick={this.onIncrementCount}
          >
            Click Me
          </button>
        </div>
      </div>
    )
  }
}

export default CLickCounter
