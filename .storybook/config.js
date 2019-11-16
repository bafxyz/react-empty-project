import '@storybook/components'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

// Config
addParameters({
    options: {
        panelPosition: 'right'
    }
})

// Decorators
addDecorator(withKnobs)

// Require all *.story.js file
const req = require.context('../src', true, /\.?(story|stories|book)\.[jt]sx?$/)
configure(() => req.keys().forEach(req), module)
