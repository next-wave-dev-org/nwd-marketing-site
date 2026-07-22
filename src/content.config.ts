import { defineCollection, z } from 'astro:content';

// Schema for the "services" collection
const servicesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    step: z.array(z.string()),
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