import { ApolloClient } from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

const cache = new InMemoryCache()

const client = new ApolloClient({
    link: ApolloLink.from([]),
    resolvers: {},
    cache
})

export default client
