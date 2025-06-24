import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="home">
      <main>
        <article className="space">
          <h3>SO, YOU WANT TO TRAVEL TO <span>SPACE</span></h3>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </article>
        <button className="explore">
          <Link to="/destination">EXPLORE</Link>
        </button>
      </main>
    </div>
  )
}

export default Home