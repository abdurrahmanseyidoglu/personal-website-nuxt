import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    // English blog posts collection
    blog_en: defineCollection({
      type: 'page',
      source: 'en/blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
    // Arabic blog posts collection
    blog_ar: defineCollection({
      type: 'page',
      source: 'ar/blog/**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
      }),
    }),
  },
})
