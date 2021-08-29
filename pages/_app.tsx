import 'global/styles/style.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import useStore from 'store'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const store = useStore(pageProps.storeState)

  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
