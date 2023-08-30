import { render, screen } from '@testing-library/react'

import { Button } from './Button'

describe('Button', () => {
    test('test render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })

    test('test clear variant', () => {
        render(<Button variant={'clear'}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
