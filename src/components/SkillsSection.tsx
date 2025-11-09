'use client';

import {
  Code,
  Database,
  ShieldCheck,
  Cloud,
  GitBranch,
  Laptop,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)'],
  },
  {
    category: 'Backend',
    icon: <Code className="h-8 w-8 text-primary" />,
    skills: ['Java', 'Axios', 'Nodemailer', 'Razorpay Integration'],
  },
  {
    category: 'Database',
    icon: <Database className="h-8 w-8 text-primary" />,
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Cloud',
    icon: <Cloud className="h-8 w-8 text-primary" />,
    skills: ['AWS', 'Oracle Cloud'],
  },
  {
    category: 'Cybersecurity Tools',
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    skills: ['Wireshark', 'Nessus', 'Burpsuite', 'Penetration Testing'],
  },
  {
    category: 'Version Control',
    icon: <GitBranch className="h-8 w-8 text-primary" />,
    skills: ['Git', 'GitHub'],
  },
  {
    category: 'Operating Systems',
    icon: <Laptop className="h-8 w-8 text-primary" />,
    skills: ['Linux', 'Windows'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-secondary">
      <div className="container mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center mb-12">
            My Technical Skills
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skillsData.map((skillCategory) => (
            <motion.div key={skillCategory.category} variants={itemVariants}>
              <Card className="h-full hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  {skillCategory.icon}
                  <CardTitle>{skillCategory.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
