import { type Country } from 'entities/Country'
import { type Currency } from 'entities/Currency'

export type ValidateProfileError =
    | 'INCORRECT_USER_DATA'
    | 'INCORRECT_AGE'
    | 'INCORRECT_COUNTRY'
    | 'NO_DATA'
    | 'SERVER_ERROR'
export interface Profile {
    id?: string
    firstname?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile
    form?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?: ValidateProfileError[]
}
