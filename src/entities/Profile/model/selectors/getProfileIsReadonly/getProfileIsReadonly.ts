import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileIsReadonly = (state: StateSchema) => state.profile?.readonly ?? false
