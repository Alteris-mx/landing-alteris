import {z, defineCollection} from "astro:content";

const clientCollection = defineCollection({
    type:'data',
    schema: z.object({
        image: z.string(),
    }),
})

const projectCollection = defineCollection({
    type:'content'
})

export const collections = {
    'clients': clientCollection,
    'projects': projectCollection,
}