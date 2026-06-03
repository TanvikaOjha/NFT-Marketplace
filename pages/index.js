import React from 'react'
import Style from '../styles/index.module.css';
import {HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard
  , Collection, FollowerTab, AudioLive, Slider, Brand
} from '../components/componentIndex';
const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service/>
      <BigNFTSlider />
      <Title heading="Latest Audio Collections" paragraph="Discover the most outstanding audio NFTs in all topics of life." />
      <AudioLive />
            <Title heading="New Collection" paragraph="Discover the most outstanding NFTs in all topics of life."/>
      <FollowerTab/>
      <Slider/>
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life."/>

      <Filter/>
      <NFTCard />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
        <Category />
      <Subscribe />
      <Brand/>
    </div>
  )
}

export default Home
