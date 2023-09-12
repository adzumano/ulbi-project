import { type StateSchema } from 'app/providers/StoreProvider'

export const getNewCommentText = (state: StateSchema) => state.addNewComment?.text ?? ''
export const getNewCommentError = (state: StateSchema) => state.addNewComment?.error
export const getNewCommentIsLoading = (state: StateSchema) => state.addNewComment?.isLoading ?? false
