import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from "./Button";

export default {
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {}
} as Meta<ButtonProps>


// Variations in Storybook
export const Default: StoryObj<ButtonProps> = {}
