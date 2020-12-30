import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript, } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.css" />
                    <link href="https://unpkg.com/leaflet-geosearch@latest/assets/css/leaflet.css" rel="stylesheet" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#C95CEE" />
                    <meta name="description" content="Anna Carolinne Fotografia - Crie memórias atráves das lentes" />
                    <meta property="og:title" content="Anna Carolinne Fotografia" />
                    <meta property="og:url" content="https://annafotografia.vercel.app/" />
                    <meta property="og:description" content="Anna Carolinne Fotografia - Crie memórias atráves das lentes" />
                    <meta property="og:image" content="https://annafotografia.vercel.app/annafotografia.jpg" />
                    <meta property="og:image:type" content="image/jpg" />
                    <meta property="og:type" content="website" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }

}