import {z, defineCollection} from "astro:content";

const clientCollection = defineCollection({
    type:'data',
    schema: z.object({
        image: z.string(),
    }),
})

const projectCollection = defineCollection({
    type:'data',
    schema: z.object({
        image: z.string(),
        title: z.string(),
        description: z.string(),
        img_alt:z.string()
    }),
})

export const collections = {
    'clients': clientCollection,
    'projects': projectCollection,
}