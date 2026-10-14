import React from 'react';
import { Hero } from '../../components/home/Hero.jsx';
import { CycleStages } from '../../components/home/CycleStages.jsx';
import { Environments } from '../../components/home/Environments.jsx';
import { WorkshopsPreview } from '../../components/home/WorkshopsPreview.jsx';
import { HomeCtaBanner } from '../../components/home/HomeCtaBanner.jsx';

export const Home = () => {
  return (
    <main>
      <Hero />
      <CycleStages />
      <Environments />
      <WorkshopsPreview />
      <HomeCtaBanner />
    </main>
  );
};

export default Home;