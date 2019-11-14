import React from 'react'
import { Helmet } from 'react-helmet'
import { Meta } from '~/config'

const NotFoundScreen = () => (
    <>
        <Helmet>
            <title>{Meta.TITLE_NOT_FOUND}</title>
        </Helmet>
        Not Found
    </>
)

export default NotFoundScreen
