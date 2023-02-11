import {Component} from 'react'
import campaignStructure from './campaign structure.mp4'
import './index.css'

class About extends Component {
  state = {
    inFormPage: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({inFormPage: !prevState.inFormPage}))
  }

  renderForm = () => (
    <form className="form-container">
      <p className="message">
        Before you go, please leave your contact details so we can get back to
        you...
      </p>
      <input type="text" className="input-element" placeholder="*Your name" />
      <hr className="line" />
      <input type="text" className="input-element" placeholder="*Your email" />
      <hr className="line" />
      <div className="container">
        <input type="checkbox" className="checkbox-position" />
        <p>
          * [Sample legal text] The personal data you have provided will be
          processed by XXXXX for purposes of providing you the service. The
          legal basis of the processing is XXXXX. Your data will not be
          transferred nor assigned to third parties. You can exercise your right
          to access, rectify and delete your data, as well as the other rights
          granted by law by sending an email to XXXXX. For further information,
          please check our privacy policy XXXXX.
        </p>
      </div>
      <button className="send-button" type="button">
        Send your answer
      </button>
    </form>
  )

  render() {
    const {inFormPage} = this.state

    return (
      <div className="container">
        <video width="50%" height="100%" controls>
          <source src={campaignStructure} type="video/mp4" />
          <track kind="captions" src={`${campaignStructure}.vtt`} />
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
export default About
