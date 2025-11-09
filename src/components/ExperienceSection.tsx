'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const experiences = [
  {
    role: 'Python Development Intern',
    company: 'ShadowFox',
    period: '06/2025 – 07/2025 | Remote',
    tasks: [
      'Built and deployed Python-based projects including web scrapers and logic games using modular code and design practices.',
      'Integrated GPT-2 models for natural language processing tasks, showcasing applied knowledge in AI and machine learning.',
      'Maintained version control with Git and GitHub, documenting development through structured commits and collaborative workflows.',
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Professional Experience
          </h2>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-none transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{exp.role}</CardTitle>
                      <p className="text-sm text-foreground/80 font-semibold">{exp.company}</p>
                      <p className="text-xs text-foreground/60">{exp.period}</p>
                    </div>
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-foreground/60">
                    {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
