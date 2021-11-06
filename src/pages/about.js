import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

function about() {
  return (
    <div>
      <Header />
      <Hero 
      title = "About"
      titleBlue = "Us"
      description = "This is the about us page"
      img = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"/>

    </div>
  )
}

export default about
