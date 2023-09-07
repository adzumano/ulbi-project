import { type StateSchema } from 'app/providers/StoreProvider'
import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
    test('should return profile data', () => {
        const data = {
            firstname: 'Zhaslan',
            lastname: 'Karagoishin',
            age: 23,
            city: 'Uralsk',
            country: Country.KAZAKHSTAN,
            currency: Currency.KZT,
            username: 'pulsar',
            avatar: '',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        }
        expect(getProfileForm(state as StateSchema)).toEqual(data)
    })
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    })
})
