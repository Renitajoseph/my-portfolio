'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: 'PhishNet AI',
    description:
      'Developed a Google Gemini AI-Integrated Chatbot with Gradient Boosting Classifier for real-time phishing URL detection. Optimized UI & Performance using Streamlit, Python ensuring fast detection (<1sec API response) and scalability. Also features automated threat analysis and email breach verification.',
    tools: ['Streamlit', 'Python', 'Gemini AI', 'Gradient Boosting', 'XposedOrNot API'],
    image: {
      id: 'phishnet-ai',
      description: 'Placeholder image for PhishNet AI project',
      imageUrl:
        'https://images.unsplash.com/photo-1632910138458-5bf601f3835e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxjeWJlciUyMHNlY3VyaXR5fGVufDB8fHx8MTc2MjYyNzkxNHww&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'cyber security',
    },
    link: 'https://github.com/Renitajoseph/PHISH_NET_AI',
  },
  {
    title: 'Movie App',
    description:
      'Developed a fully responsive Movie App with clean, reusable components for scalability. Implemented modern UI design with a UI-first approach, optimized for mobile, tablet, and desktop. Deployed on Vercel.',
    tools: ['React', 'Tailwind CSS', 'Vercel'],
    image: {
      id: 'movie-app',
      description: 'Placeholder image for Movie App project',
      imageUrl:
        'https://images.unsplash.com/photo-1563603357963-439f524bd662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxtb3ZpZSUyMGNpbmVtYXxlbnwwfHx8fDE3NjI3MDUwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      imageHint: 'movie cinema',
    },
    link: 'https://github.com/Renitajoseph/Movie-App',
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

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
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
            My Projects
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            A selection of my work.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col group overflow-hidden border-none transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  {project.image && (
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      data-ai-hint={project.image.imageHint}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {project.title}
                    <Button variant="ghost" size="icon" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-5 w-5 text-foreground/60 group-hover:text-primary" />
                      </a>
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <Badge key={tool} variant="secondary">
                        {tool}
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
