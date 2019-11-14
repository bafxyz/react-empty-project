import { debounce } from 'lodash-es'
import TagManager from 'react-gtm-module'

import { IS_DEV } from '~/config/ENV'

// GA event labels
const EVENT = {
    CONTENT_VIEW: 'content-view'
}

if (!IS_DEV) {
    const tagManagerArgs = {
        gtmId: 'GTM-XXXXXX'
    }

    TagManager.initialize(tagManagerArgs)
}

const getDataLayer = new Promise(resolve => {
    const ival = setInterval(() => {
        // @ts-ignore
        if (window.dataLayer) {
            clearInterval(ival)
            // @ts-ignore
            resolve(window.dataLayer)
        }
    }, 100)
})

export const trackContentViewEvent = debounce(async options => {
    if (IS_DEV) return

    const dataLayer = (await getDataLayer) as object[]

    dataLayer.push({
        event: EVENT.CONTENT_VIEW,
        'content-name': window.location.href,
        ...options
    })
}, 100)
