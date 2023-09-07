import { type StateSchema } from 'app/providers/StoreProvider'

import { getProfileIsReadonly } from './getProfileIsReadonly'

describe('getProfileIsReadonly', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        }
        expect(getProfileIsReadonly(state as StateSchema)).toEqual(true)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileIsReadonly(state as StateSchema)).toEqual(false)
    })
})
