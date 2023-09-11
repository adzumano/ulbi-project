import { createEntityAdapter } from '@reduxjs/toolkit'
import { type Comment } from 'entities/Comment'

export const articleDetailCommentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id,
})
