// Write your code here
import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {no: 0, oddeven: 'Even'}

  increament = () => {
    const {no} = this.state
    const random = no + Math.ceil(Math.random() * 100)
    this.setState(() => ({no: random}))

    if (random % 2 === 0) {
      this.setState(() => ({oddeven: 'Even'}))
    } else {
      this.setState(() => ({oddeven: 'Odd'}))
    }
  }

  render() {
    const {no, oddeven} = this.state

    return (
      <div className="mainContainer">
        <div className="card">
          <h1 className="heading">Count {no}</h1>
          <p className="para">Count is {oddeven}</p>
          <button className="button" type="button" onClick={this.increament}>
            Increment
          </button>
          <p className="msg">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
