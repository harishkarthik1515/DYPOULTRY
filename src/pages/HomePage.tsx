import React from 'react';
import Hero from '../components/Hero';
import OurValues from '../components/OurValues';
import MeetTheFarm from '../components/MeetTheFarm';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <OurValues />
      <MeetTheFarm />
      <Testimonials />
      <Contact />
    </>
  );
};

export default HomePage;