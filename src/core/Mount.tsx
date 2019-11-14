import '~/core/styles.scss'

import React from 'react'
import { render } from 'react-dom'

import Router from '~/core/Router'

const Mount = (el: HTMLElement) => render(<Router />, el)

export default Mount
