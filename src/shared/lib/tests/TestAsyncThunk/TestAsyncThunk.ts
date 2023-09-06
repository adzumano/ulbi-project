import { type AsyncThunkAction } from '@reduxjs/toolkit'
import { type StateSchema } from 'app/providers/StoreProvider'
import axios, { type AxiosStatic } from 'axios'

import MockedFunctionDeep = jest.MockedFunctionDeep

type ActionCreator<Return, Arg, RejectedValue> = (
    arg: Arg,
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

jest.mock('axios')

const mockedAxios = jest.mocked(axios, true)
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFn<any>
    getState: () => StateSchema
    actionCreator: ActionCreator<Return, Arg, RejectedValue>
    api: MockedFunctionDeep<AxiosStatic>
    constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
        this.actionCreator = actionCreator
        this.dispatch = jest.fn()
        this.getState = jest.fn()
        this.api = mockedAxios
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg)
        const res = await action(this.dispatch, this.getState, {
            api: this.api,
        })
        return res
    }
}
