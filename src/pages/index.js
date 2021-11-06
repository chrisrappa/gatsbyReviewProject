import * as React from "react";
import Header from '../components/Header.js';
import Hero from "../components/Hero.js";
import Footer from '../components/Footer';
import Feature from '../components/Feature';
import '../styles/global.css';
import { Images } from '../components/Images';



const IndexPage = () => {
  return (
    <main>
      <Header />
      <Hero 
      title = "New Page"
      titleBlue = "For You"
      description = "This is a new page for you"
      img = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>
      <Images />
      <Feature />
      <Footer />
    </main>
  )
}

export default IndexPage
