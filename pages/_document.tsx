import Document, {Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    /*
    //Modificar en caso de necesitar modificaciones desde el servidor
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }
    */

    render() {
        return (
            <Html>
                <Head>
                    {/*favicon*/}
                    {/*webfont*/}
                    {/*stylesheet*/}
                    {/*script/js*/}
                </Head>
                <body className="custom-class">
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument