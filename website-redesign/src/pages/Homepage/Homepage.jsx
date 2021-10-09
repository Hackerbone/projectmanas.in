import React from 'react';
import Landing from '../../components/Landing/Landing';
import Sponsors from '../../components/Sponsors/Sponsors';
import Projects from '../Projects/Projects';
export default function Homepage() {
  return (
    <>
      <Landing />
      <Sponsors />
      <Projects />
    </>
  );
}
