import { hot } from 'react-hot-loader'

import React, { Suspense, useEffect } from 'react'
import { Router } from '@reach/router'

import { trackContentViewEvent } from '~/services/GA'

import { HomeScreen, NotFoundScreen } from '~/screens'
import { URL } from '~/config'

const AppRouter = () => {
    useEffect(() => {
        trackContentViewEvent({})
    }, [])

    return (
        <>
            <Suspense fallback={<div>Loading</div>}>
                <Router>
                    <HomeScreen path={URL.ROOT} />
                    <NotFoundScreen default />
                </Router>
            </Suspense>
        </>
    )
}

export default hot(module)(AppRouter)
