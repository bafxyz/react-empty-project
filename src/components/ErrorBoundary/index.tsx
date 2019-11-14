import React from 'react'

import { NotFoundScreen } from '~/screens'

class ErrorBoundary extends React.Component<{}, { hasError: boolean }> {
    public constructor(props) {
        super(props)
        this.state = { hasError: false }
    }

    public static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    public componentDidCatch() {
        const { hasError } = this.state
        if (hasError) {
            // @ts-ignore
            this.state.hasError = false
        }
    }

    public render() {
        const { hasError } = this.state
        const { children } = this.props
        return hasError ? <NotFoundScreen /> : children
    }
}

export default ErrorBoundary
