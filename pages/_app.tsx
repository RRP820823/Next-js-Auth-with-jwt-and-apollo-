import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"
import Layout from "@/components/layout"

const client = new ApolloClient({
  uri: "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
})

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default App
