import React from 'react'
// import Library from '../components/Library';
import Banner from '../components/Banner';
import MostPopular from '../components/MostPopular';
import RandomTrailer from '../components/RandomTrailer';


function Home() {
  return (
    <>
    <Banner />
    <MostPopular />
    {/* <Library /> */}
    <RandomTrailer/>
    
    </>
  )
}

export default Home