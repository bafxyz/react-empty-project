import React from 'react'
import { Helmet } from 'react-helmet'
import { Meta } from '~/config'

const HomeScreen = () => (
    <>
        <Helmet>
            <title>{Meta.TITLE_ROOT}</title>
        </Helmet>
        Home sweet home
    </>
)

export default HomeScreen
