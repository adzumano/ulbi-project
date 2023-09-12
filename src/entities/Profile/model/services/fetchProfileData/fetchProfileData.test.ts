import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

import { fetchProfileData } from './fetchProfileData'

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
        const thunk = new TestAsyncThunk(fetchProfileData)

        thunk.api.get.mockReturnValue(Promise.resolve({ data }))

        const res = await thunk.callThunk('1')
        expect(thunk.api.get).toHaveBeenCalled()
        expect(res.meta.requestStatus).toBe('fulfilled')
        expect(res.payload).toEqual(data)
    })
    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData)
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))

        const res = await thunk.callThunk('1')
        expect(res.meta.requestStatus).toBe('rejected')
    })
})
