import { type DeepPartial } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'

import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
    test('should return username', () => {
        const state = {
            loginForm: {
                username: 'test',
            },
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('test')
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    })
})
