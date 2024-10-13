import Navbar from "../layouts/Navbar";
import "../styles/about.css"

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function About() {
  return (
    <div className="about">
      <Navbar />
      <p className="user-name">{user.name}</p>
      <div className="image-container">
        <img className="avatar" src={user.imageUrl} alt={"photo of " + user.name} style={{width: 100}} />
      </div>
    </div>
  )
}