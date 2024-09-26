import z from 'zod'

export const MessageRes = z
    .object({
        message: z.string(),
        intent: z.object({
            name: z.string(),
            confidence: z.number()
        }),
        entities: z.array(z.string())
    })
    .strict()

export type MessageResType = z.TypeOf<typeof MessageRes>