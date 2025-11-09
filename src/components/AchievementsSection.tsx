'use client';

import { motion } from 'framer-motion';
import { Award, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const achievements = [
  {
    title: 'Finalist — Cyberthon 2025',
    description:
      'Developed PhishNet, a real-time phishing detection system that identifies and blocks malicious phishing attempts.',
    organization: 'Tamil Nadu Police & Rootstack, Coimbatore',
    icon: <Trophy className="h-8 w-8 text-amber-400" />,
  },
  {
    title: 'Finalist — IEEE IMPACTX 2.0',
    description:
      'Presented PhishNet as an innovative phishing-detection solution; selected among top teams for its real-time detection accuracy and practical deployment potential.',
    organization: 'IEEE SPAX, Chennai',
    icon: <Award className="h-8 w-8 text-amber-400" />,
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

export function AchievementsSection() {
  return (
    <section id="achievements" className="w-full py-24 sm:py-32 bg-secondary">
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
            Achievements & Recognition
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Proud moments from my journey.
          </p>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {achievements.map((achievement, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-card border-none transition-all duration-300">
                <CardHeader className="grid grid-cols-[auto_1fr_auto] items-start gap-4 space-y-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    {achievement.icon}
                  </div>
                  <div className="space-y-1">
                    <CardTitle>{achievement.title}</CardTitle>
                    <p className="text-sm text-foreground/80">{achievement.organization}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/60">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
