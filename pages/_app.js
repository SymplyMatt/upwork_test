import 'swiper/swiper-bundle.min.css'
import '../styles/globals.sass'
import { StoreContextProvider } from '../store/store'
import { Provider } from 'next-auth/client'
import { FormContextProvider } from '../store/formContext'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Router from 'next/router'
import { FetchLoading } from '../components/ui/FetchLoading'
import { useState } from 'react'
import Script from 'next/script'
import * as gtag from '../utils/gtag'

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(false)

    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        function handleStart() {
            setLoading(true)
        }
        function handleStop() {
            setLoading(false)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router.events])

    // useEffect(() => {

    //     function handleStart() {
    //         setLoading(true)
    //     }
    //     function handleStop() {
    //         setLoading(false)
    //     }

    //     Router.events.on('routeChangeStart', handleStart)
    //     Router.events.on('routeChangeComplete', handleStop)
    //     Router.events.on('routeChangeError', handleStop)

    //     return () => {
    //         Router.events.off('routeChangeStart', handleStart)
    //         Router.events.off('routeChangeComplete', handleStop)
    //         Router.events.off('routeChangeError', handleStop)
    //     }

    // }, [Router])

    return (
        <Provider session={pageProps.session}>
            <StoreContextProvider>
                <FormContextProvider>
                    {loading && <FetchLoading />}

                    <Script
                        strategy="afterInteractive"
                        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
                    />
                    <Script
                        id="gtag-init"
                        strategy="afterInteractive"
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                        }}
                    />

                    <Component {...pageProps} />
                </FormContextProvider>
            </StoreContextProvider>
        </Provider>
    )
}

export default MyApp
