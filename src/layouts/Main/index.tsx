import React, { FC, memo } from 'react'
import styled from '@emotion/styled'
import ErrorBoundary from 'react-error-boundary'

import { SiteFooter, SiteHeader } from '~/components'
import IMainLayout from './types'

const Main = styled.div`
    bottom: 0;
    flex-direction: column;
    display: flex;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
`

const Container = styled.div`
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    flex-wrap: wrap;
    justify-content: center;
    min-height: calc(100% - 52px);
    overflow: hidden;
    overflow-y: auto;
`

const MainLayout = memo(({ children }: IMainLayout) => (
    <Main>
        <SiteHeader />
        <Container>
            {children}
            <SiteFooter />
        </Container>
    </Main>
))

export const withMainLayout = (Component: FC) => (props: any) => (
    <MainLayout>
        <ErrorBoundary>
            <Component {...props} />
        </ErrorBoundary>
    </MainLayout>
)

export default MainLayout
