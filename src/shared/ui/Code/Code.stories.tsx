import type { Meta, StoryObj } from '@storybook/react'

import { Code } from './Code'

const meta = {
    title: 'shared/Code',
    component: Code,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        text:
            'const meta = {\n' +
            "    title: 'shared/Code',\n" +
            '    component: Code,\n' +
            '    parameters: {\n' +
            "        layout: 'centered',\n" +
            '    },\n' +
            "    tags: ['autodocs'],\n" +
            '    argTypes: {},\n' +
            '    args: {\n' +
            "        children: 'sadsa',\n" +
            '    },\n' +
            '} satisfies Meta<typeof Code>',
    },
} satisfies Meta<typeof Code>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
