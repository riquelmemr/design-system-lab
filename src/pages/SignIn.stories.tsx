import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { SignIn } from "./SignIn";

export default {
    title: 'Pages/Sign In',
    component: SignIn,
    args: {},
    argTypes: {}
} as Meta

// Variations in Storybook
export const Default: StoryObj = {
    play: ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'riquelmemaia2@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('*********'), '12345678')

        userEvent.click(canvas.getByRole('button'))
    }
}