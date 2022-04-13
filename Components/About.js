import react, { useState, useEffect, useRef, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import AnimatedLetters from '../lib/animateLetters';

export default function About() {
  const ref = useRef(null);
  const [topRef, inView] = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 1,
    triggerOnce: true,
  });

  const newRef = useCallback(
    (node) => {
      ref.current = node;
      topRef(node);
    },
    [topRef]
  );

  const [bottomRef, newView] = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 1,
    triggerOnce: true,
  });

  const anotherRef = useCallback(
    (node) => {
      ref.current = node;
      bottomRef(node);
    },
    [bottomRef]
  );

  return (
    <section id='about'>
      <div className='company-title'>
        <h2>What We</h2>
      </div>

      <div className='company-container' ref={newRef}>
        <div className={inView ? 'company-text fade-in delay08' : 'text-gone'}>
          <h3>Creative Consulting & Business Strategy</h3>
          <p>
            Market Your Dream is dedicated to bringing you the most innovative
            strategies that will guide you to reach your goals. Our foundation
            is built on a deep understanding of what it takes to have a dream,
            and our expertise means we will help you market, optimize and grow
            it.
          </p>
          <div className='services-container'>
            <h3>Our Services:</h3>
            <div className='company-stats'>
              <p>&#8250; Creative Consulting</p>
              <p>&#8250; Marketing Strategies</p>

              <p>&#8250; Brand/Web Design</p>
              <p>&#8250; Social Media Management</p>

              <p>&#8250; Email Marketing Activations</p>
              <p>&#8250; Brand Footprint Audit</p>
            </div>
            <p>
              <a href='#contact' className='underline'>
                Contact Us <span>&#x27FC;</span>
              </a>
            </p>
          </div>
        </div>
        <div
          className={
            inView ? 'company-image animate-bottom delay08' : 'image-gone'
          }></div>
      </div>

      <div className='andrea-title'>
        <h2>Who We</h2>
      </div>

      <div className='andrea-bio' ref={anotherRef}>
        <div className='andrea-container'>
          <div
            className={newView ? 'andrea-text fade-in delay04' : 'text-gone'}>
            <h3>Andrea McDonald</h3>
            <p>
              Andrea is a Creative Consultant & Marketing Strategist. Her
              marketing approach is rooted in authentic storytelling, creative
              thinking and breaking through walls to create a footprint. Andrea
              brings a decade of experience helping clients launch, grow and
              optimize. Her deep understanding of digital marketing, social
              media and communications have proven to take businesses to the
              next level.{' '}
            </p>

            <p>Andrea and team are dedicated to all your marketing needs</p>
          </div>
          <div
            className={
              newView ? 'andrea-image animate-bottom delay-04' : 'text-gone'
            }></div>
        </div>
      </div>
    </section>
  );
}
