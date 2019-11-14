import { debounce } from 'lodash-es'
import TagManager, { DataLayerArgs } from 'react-gtm-module'

import { IS_DEV } from '~/config/ENV'

declare global {
    interface Window {
        dataLayer: DataLayerArgs
    }
}

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
        if (window.dataLayer) {
            clearInterval(ival)
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
