import { z } from 'zod'

export const CreateCommentSchema = z.object({
  postId: z.number(),
  commentContent: z
    .string()
    .min(1, { message: '댓글을 입력해주세요.' })
    .max(100, { message: '댓글은 100자 이내여야 합니다.' }),
})
export type CreateComment = z.infer<typeof CreateCommentSchema>

export const CreateReplySchema = z.object({
  commentId: z.number(),
  commentContent: z
    .string()
    .min(1, { message: '댓글을 입력해주세요.' })
    .max(100, { message: '댓글은 100자 이내여야 합니다.' }),
})
export type CreateReply = z.infer<typeof CreateReplySchema>

export const UpdateCommentSchema = z.object({
  postId: z.number(),
  commentId: z.number(),
  commentContent: z
    .string()
    .min(1, { message: '댓글을 입력해주세요.' })
    .max(100, { message: '댓글은 100자 이내여야 합니다.' }),
})
export type UpdateComment = z.infer<typeof UpdateCommentSchema>
