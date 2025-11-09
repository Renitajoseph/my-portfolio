'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import Link from 'next/link';

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 sm:py-32">
      <motion.div
        className="container mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.div className="space-y-4 text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Entry-level Cyber Security Engineer with a B.E in Cyber Security, skilled in network security, ethical hacking, penetration testing, and security auditing. Knowledgeable in tools such as Wireshark, Burp Suite, Kali Linux, and Nessus. Strong understanding of operating systems, firewalls, and cryptographic protocols. Quick learner with a passion for cybersecurity research, risk mitigation, and safeguarding IT infrastructures from evolving threats.
          </p>
          <Button asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
