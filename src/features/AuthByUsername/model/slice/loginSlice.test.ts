import { type LoginSchema } from '../types/loginSchema'
import { loginActions, loginReducer } from './loginSlice'

describe('loginSlice', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'test',
        }
        expect(loginReducer(state as LoginSchema, loginActions.setUsername('test'))).toBe({
            username: 'test',
        })
    })
    test('test set password', () => {
        const state: DeepPartial<LoginSchema> = {
            password: 'test',
        }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword('test'))).toBe({
            password: 'test',
        })
    })
})
