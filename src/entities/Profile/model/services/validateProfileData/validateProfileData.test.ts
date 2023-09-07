import { Country } from 'entities/Country'
import { Currency } from 'entities/Currency'

import { validateProfileData } from './validateProfileData'

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

describe('validateProfileData', () => {
    test('success', () => {
        const res = validateProfileData(data)
        expect(res).toEqual([])
    })
    test('without firstname and lastname', () => {
        const res = validateProfileData({ ...data, firstname: '', lastname: '' })
        expect(res).toEqual(['INCORRECT_USER_DATA'])
    })
    test('incorrect age', () => {
        const res = validateProfileData({ ...data, age: 0 })
        expect(res).toEqual(['INCORRECT_AGE'])
    })
    test('without country', () => {
        const res = validateProfileData({ ...data, country: undefined })
        expect(res).toEqual(['INCORRECT_COUNTRY'])
    })
    test('incorrect all', () => {
        const res = validateProfileData({})
        expect(res).toEqual(['INCORRECT_USER_DATA', 'INCORRECT_AGE', 'INCORRECT_COUNTRY'])
    })
})
