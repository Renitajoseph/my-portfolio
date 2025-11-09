'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    text: 'jjoserenita6179@gmail.com',
    href: 'mailto:jjoserenita6179@gmail.com',
  },
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    text: '+91 6381584949',
    href: 'tel:+916381584949',
  },
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    text: 'Chennai, India',
  },
];

const socialLinks = [
  {
    icon: <Linkedin className="h-6 w-6" />,
    href: 'https://www.linkedin.com/feed/',
    label: 'LinkedIn',
  },
  {
    icon: <Github className="h-6 w-6" />,
    href: 'https://github.com/Renitajoseph',
    label: 'GitHub',
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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export function ContactSection() {
  return (
    <>
      <section id="contact" className="w-full py-24 sm:py-32 bg-secondary">
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
              Get In Touch
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              I&apos;m currently available for freelance work and open to new
              opportunities.
            </p>
          </motion.div>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            <motion.div
              className="space-y-8 text-center"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 justify-center">
                    {info.icon}
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground/80 hover:text-primary transition-colors"
                      >
                        {info.text}
                      </a>
                    ) : (
                      <span className="text-foreground/80">{info.text}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <footer className="py-6 border-t bg-background">
        <div className="container mx-auto text-center text-sm text-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Jose Renita K.J | Built with ❤️
            using React, Tailwind, and Firebase.
          </p>
        </div>
      </footer>
    </>
  );
}
