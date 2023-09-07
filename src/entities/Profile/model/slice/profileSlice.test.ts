import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { updateProfileData } from 'entities/Profile'

import { type ProfileSchema } from '../types/profile'
import { profileActions, profileReducer } from './profileSlice'

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

describe('profileSlice', () => {
    test('test set readonly', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
        }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
            readonly: true,
        })
    })
    test('test cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            form: { username: '' },
        }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        })
    })
    test('test update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            form: { username: '123' },
        }
        expect(
            profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: 'test' })),
        ).toEqual({
            form: { username: 'test' },
        })
    })
    test('test update profile service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: ['SERVER_ERROR'],
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
            isLoading: true,
            validateErrors: undefined,
        })
    })
    test('test update profile service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, ''))).toEqual({
            isLoading: false,
            data,
            form: data,
            readonly: true,
            validateError: undefined,
        })
    })
})
