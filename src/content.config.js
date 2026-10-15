import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const stlCollection = defineCollection({
  // Point the loader to your specific folder and file type
  loader: glob({ pattern: '**/*.mdx', base: './src/content/stl' }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    readTime: z.number(),
    archived: z.boolean().default(false),
  }),
});

const oopCollection = defineCollection({
  // Point the loader to your specific folder and file type
  loader: glob({ pattern: '**/*.mdx', base: './src/content/oop' }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    readTime: z.number(),
    archived: z.boolean().default(false),
  }),
});
export const collections = {
  stl: stlCollection,
  oop: oopCollection,
};
