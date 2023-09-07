import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { updateProfileData } from './updateProfileData'

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

describe('fetchProfileData', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })

        thunk.api.put.mockReturnValue(Promise.resolve({ data }))

        const res = await thunk.callThunk()
        expect(thunk.api.put).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe('fulfilled')
        expect(res.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: data } })
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

        const res = await thunk.callThunk()
        expect(res.meta.requestStatus).toBe('rejected')
        expect(res.payload).toEqual(['SERVER_ERROR'])
    })
    test('validate error', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, { profile: { form: { ...data, lastname: '' } } })
        const res = await thunk.callThunk()
        expect(res.meta.requestStatus).toBe('rejected')
        expect(res.payload).toEqual(['INCORRECT_USER_DATA'])
    })
})
