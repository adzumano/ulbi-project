import { userEvent } from '@storybook/testing-library'
import { screen } from '@testing-library/react'
import { Counter } from 'entities/Counter'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'

describe('Counter', () => {
    test('test component', () => {
        const initialState = {
            counter: { value: 10 },
        }
        componentRender(<Counter />, { initialState })
        expect(screen.getByTestId('value-title')).toHaveTextContent('10')
    })
    test('increment', async () => {
        const initialState = {
            counter: { value: 10 },
        }
        componentRender(<Counter />, { initialState })
        await userEvent.click(screen.getByTestId('increment-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('11')
    })
    test('decrement', async () => {
        const initialState = {
            counter: { value: 10 },
        }
        componentRender(<Counter />, { initialState })
        await userEvent.click(screen.getByTestId('decrement-btn'))
        expect(screen.getByTestId('value-title')).toHaveTextContent('9')
    })
})
