'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const education = [
  {
    degree: 'BE Computer Science with Specialization in Cyber Security',
    institution: 'Sathyabama Institute of Science and Technology',
    period: '2022 – 2026 | Chennai, India',
    details: 'CGPA - 8.06',
  },
  {
    degree: 'Higher Secondary',
    institution: 'St. Joseph of Cluny Matriculation Higher Secondary School',
    period: '2008 – 2022 | Cuddalore, Tamil Nadu',
    details: 'Percentage - 82%',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export function EducationSection() {
  return (
    <section id="education" className="py-24 sm:py-32">
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
            Education
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col group overflow-hidden border-none transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <CardTitle>{edu.degree}</CardTitle>
                      <p className="text-sm font-semibold text-primary">{edu.institution}</p>
                      <p className="text-xs text-foreground/60">{edu.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{edu.details}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
