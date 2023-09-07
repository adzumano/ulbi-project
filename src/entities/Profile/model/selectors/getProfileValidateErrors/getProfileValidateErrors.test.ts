import { type StateSchema } from 'app/providers/StoreProvider'

import { type ValidateProfileError } from '../../types/profile'
import { getProfileValidateErrors } from './getProfileValidateErrors'

describe('getProfileValidateErrors', () => {
    test('should work with filled state', () => {
        const validateErrors: ValidateProfileError[] = ['NO_DATA', 'SERVER_ERROR']
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors,
            },
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([])
    })
})
