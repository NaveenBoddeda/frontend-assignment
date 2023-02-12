import {Component} from 'react'
import thirdChoice from './3rd choice.mp4'
import './index.css'

class NotFound extends Component {
  state = {
    inFormPage: false,
    name: '',
    email: '',
    isChecked: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({inFormPage: !prevState.inFormPage}))
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeMail = event => {
    this.setState({email: event.target.value})
  }

  onClickChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onEmptyName = () => {
    const {name} = this.state

    const nameOutput =
      name === '' ? (
        <div className="tooltip">
          <span className="tooltiptext">Please fill out this field</span>
        </div>
      ) : (
        ''
      )

    return nameOutput
  }

  onEmptyEmail = () => {
    const {email} = this.state

    const emailOutput =
      email === '' ? (
        <div className="tooltip">
          <span className="tooltiptext">Please fill out this field</span>
        </div>
      ) : (
        ''
      )

    return emailOutput
  }

  onClickSubmit = () => {
    const {isChecked} = this.state
    const output = isChecked ? (
      ''
    ) : (
      <p className="checkbox-error">
        To continue you must accept the terms & conditions.
      </p>
    )
    return output
  }

  renderForm = () => {
    const {name, email, isChecked} = this.state
    console.log(isChecked)
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <p className="message">
            Before you go, please leave your contact details so we can get back
            to you...
          </p>
          <input
            onChange={this.onChangeName}
            value={name}
            type="text"
            className="input-element"
            placeholder="*Your name"
          />
          <hr className="line" />
          {this.onEmptyName()}
          <input
            onChange={this.onChangeMail}
            value={email}
            type="text"
            className="input-element"
            placeholder="*Your email"
          />
          <hr className="line" />
          {this.onEmptyEmail()}
          {this.onClickSubmit()}
          <div className="container">
            <input
              type="checkbox"
              className="checkbox-position"
              onChange={this.onClickChecked}
            />
            <p>
              * [Sample legal text] The personal data you have provided will be
              processed by XXXXX for purposes of providing you the service. The
              legal basis of the processing is XXXXX. Your data will not be
              transferred nor assigned to third parties. You can exercise your
              right to access, rectify and delete your data, as well as the
              other rights granted by law by sending an email to XXXXX. For
              further information, please check our privacy policy XXXXX.
            </p>
          </div>
          <button
            className="send-button"
            type="submit"
            onSubmit={this.onClickSubmit()}
          >
            Send your answer
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {inFormPage} = this.state

    return (
      <div className="container">
        <video width="50%" height="200%" controls>
          <source src={thirdChoice} type="video/mp4" />
          <track kind="captions" src={`${thirdChoice}.vtt`} />
        </video>
        {inFormPage ? (
          this.renderForm()
        ) : (
          <div className="button-container">
            <button type="button" onClick={this.onClickButton}>
              Download &quot;Campaign Structure Guide&quot;
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default NotFound
