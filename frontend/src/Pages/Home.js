import React from 'react'
import Library from '../components/Library';
import Banner from '../components/Banner';
import MostPopular from '../components/MostPopular';

function Home() {
  return (
    <>
    <Banner />
    <MostPopular />
    <Library />
    </>
  )
}

export default Home