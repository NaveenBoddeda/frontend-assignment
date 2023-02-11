import {Link} from 'react-router-dom'
import videoFile from './video1.mp4'
import './index.css'

const Home = () => (
  <div className="container">
    <video width="50%" height="100%" controls>
      <source src={videoFile} type="video/mp4" />
      <track kind="captions" src={`${videoFile}.vtt`} />
    </video>
    <div className="button-container">
      <Link to="/campaignstructure">
        <button type="button" className="buttons">
          <span className="span-item">A</span> Campaign Structure
        </button>
      </Link>
      <Link to="/facebookbasics">
        <button type="button" className="buttons">
          <span className="span-item">B</span>Learn Facebook Basics
        </button>
      </Link>
      <Link to="thirdchoice">
        <button type="button" className="buttons">
          <span className="span-item">C</span> 3rd choice
        </button>
      </Link>
    </div>
  </div>
)

export default Home
