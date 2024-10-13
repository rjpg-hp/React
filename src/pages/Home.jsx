import Navbar from "../layouts/Navbar";



export default function Home() {
  return (
    <div>
      <Navbar />

      <div className='salutation'>
        <h1>Welcome, Let's Learn React</h1>
        <p className='message'>This is the home page...</p>
      </div>
    </div>
  )
}

