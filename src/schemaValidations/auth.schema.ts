import z from 'zod'

export const LoginBody = z
  .object({
    email: z.string().email(),
    otp: z.string().min(6).max(6)
  })
  .strict()

export type LoginBodyType = z.TypeOf<typeof LoginBody>

export const LoginRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string()
    })
  }),
  message: z.string()
})

export type LoginResType = z.TypeOf<typeof LoginRes>

