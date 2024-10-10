/** @jsxImportSource @emotion/react */
import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

const aboutContainerStyles = css`
  min-height: 100vh;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const headingStyles = css`
  color: #e63946;
  font-size: 3.5rem;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const sectionTitleStyles = css`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #1d3557;
`;

const textStyles = css`
  color: #333;
  line-height: 1.8;
  font-size: 1.125rem;
`;

const imageStyles = css`
  margin-top: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const AboutUs = () => {
  return (
    <motion.div
      css={aboutContainerStyles}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        css={headingStyles}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        About KUDIL Restaurant
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full md:w-3/4 lg:w-2/3 bg-white p-8 shadow-lg rounded-lg"
      >
        <p css={textStyles}>
          Welcome to <span className="font-bold text-red-600">KUDIL Restaurant</span>, where tradition meets modern culinary excellence! Our Chinese restaurant brings you the authentic flavors of China with a unique twist. We are dedicated to offering a memorable dining experience, combining delicious food, warm hospitality, and a cozy atmosphere.
        </p>

        <motion.h2
          css={sectionTitleStyles}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Our Story
        </motion.h2>
        <p css={textStyles}>
          KUDIL Restaurant was born from a passion for authentic Chinese cuisine and a desire to share the rich culinary heritage of China with the world. Our goal is to provide the finest Chinese dishes made from the freshest ingredients, served in a space that feels like home.
        </p>

        <motion.h2
          css={sectionTitleStyles}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Our Cuisine
        </motion.h2>
        <p css={textStyles}>
          At KUDIL, we serve a wide range of traditional Chinese dishes including <strong>Dim Sum</strong>, <strong>Kung Pao Chicken</strong>, <strong>Peking Duck</strong>, and <strong>Sweet and Sour Pork</strong>. Every dish is crafted with care, blending spices and ingredients to create bold, authentic flavors.
        </p>

        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.3, duration: 0.7 }}
        >
          <img
            css={imageStyles}
            src="https://i.ibb.co/BrNn0hb/interior-room-pub-2023-11-27-05-12-18-utc-result.webp"
            alt="KUDIL Restaurant Interior"
            className="rounded-lg shadow-md w-full"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-8 text-center"
        >
          <h2 css={sectionTitleStyles}>Visit Us Today!</h2>
          <p css={textStyles}>
            Experience the taste of China at <span className="font-bold text-red-600">KUDIL Restaurant</span>. Join us for an unforgettable culinary journey.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutUs;
