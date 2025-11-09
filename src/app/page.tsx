'use client';

import { AboutSection } from '@/components/AboutSection';
import { AchievementsSection } from '@/components/AchievementsSection';
import { CertificationsSection } from '@/components/CertificationsSection';
import { ContactSection } from '@/components/ContactSection';
import { EducationSection } from '@/components/EducationSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { SkillsSection } from '@/components/SkillsSection';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.main
      initial="hidden"
      animate="visible"
      className="flex-1"
    >
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <CertificationsSection />
      <ContactSection />
    </motion.main>
  );
}
