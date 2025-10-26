
import React from 'react'

const Home = () => {
  return (
    <div>
      <h1 className='text-center text-5xl font-bold mt-4'>Home Page</h1>
      <p style={{ fontSize: 40, color: 'red', textAlign: 'center' }}>
        Using Inline CSS in JSX
      </p>
      <input type="text" />
      <br />
      <hr />

      <img src="/next.svg" alt="" />

      <button className='global-btn'>Global Button</button>

      <div className='grid grid-cols-3 gap-4 mt-4'>
      
    </div>

    </div>
  )
}

export default Home;