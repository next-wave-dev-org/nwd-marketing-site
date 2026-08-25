import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Schema for the "services" collection
const servicesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    heroBadgeTitle: z.string().min(1),
    heroTitle: z.string().min(1),
    heroSubtitle: z.string().min(1),
    steps: z
      .array(
        z.object({
          title: z.string().min(1),
          summary: z.object({
            title: z.string().min(1),
            description: z.string().min(1),
          }),
          deliverables: z
            .array(
              z.object({
                title: z.string().min(1),
                description: z.string().min(1),
              })
            )
            .min(1),
        })
      )
      .min(1),
  }),
});

// Schema for the "staff" collection
const staffCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/staff' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(), 
  }),
});

// Schema for the "graduates" collection
const graduatesCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/graduates' }), 
  schema: z.object({
    name: z.string(),
    specialization: z.string(),
    location: z.string(),
    education: z.string(),
    
    // --- NEW FIELDS ADDED HERE ---
    image: z.string().optional(),
    contact: z.object({
      email: z.string().optional(),
      phone: z.string().optional(),
      socials: z.array(
        z.object({
          name: z.string(),
          url: z.string()
        })
      ).optional()
    }).optional(),
    certifications: z.array(
      z.object({
        name: z.string(),
        url: z.string() // Using .string() instead of .url() to prevent strict crash errors if someone types an invalid link
      })
    ).optional(),
    // ------------------------------
    
    skills: z.array(z.string()),
    projectLinks: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })),
  }),
});

export const collections = {
  services: servicesCollection,
  staff: staffCollection,
  graduates: graduatesCollection,
};