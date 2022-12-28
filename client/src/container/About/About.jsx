import React, { useState, useEffect } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { images } from '../../constants';

const About = () => {

  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut'
      }
    }
  }

  const abouts = [
    {
      title: 'Front-End',
      description: 'I am a good Frontend Developer',
      imgUrl: images.about01
    },
    {
      title: 'Back-End',
      description: 'I am a good Backend Developer',
      imgUrl: images.about02
    },
    {
      title: 'UI/UX',
      description: 'I am a good UI/UX',
      imgUrl: images.about03
    },
    {
      title: 'SEO',
      description: 'I am a good SEO Specialist',
      imgUrl: images.about04
    },
  ];

  return (
    <>
      <h2 className='head-text'>I know that <span>Good Design</span><br />Means <span>Good Business</span>
      </h2>
      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div whileInView={{ opacity: 1, x: [40, 0]}} whileHover={{ scale: 1.1}} transition={{ duration: 0.5, type: 'tween', ease: 'easeInOut'}} className="app__profile-item"  key={about.title + index}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;
