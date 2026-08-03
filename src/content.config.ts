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
  schema: z.object({
    name: z.string(),
    role: z.string(),
    image: z.string(), // Expecting an image path, e.g., /images/staff/name.jpg
  }),
});

// Schema for the "graduates" collection
const graduatesCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    specialization: z.string(),
    location: z.string(),
    education: z.string(),
    skills: z.array(z.string()),
    projectLinks: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
    })),
  }),
});

// Export a `collections` object to register your collection(s)
export const collections = {
  services: servicesCollection,
  staff: staffCollection,
  graduates: graduatesCollection,
};