import Head from 'next/head'

interface HeadProps {
    title: string
}

const HeadTemplate: React.FC<HeadProps> = ({ title }) => {
    return (
        <Head>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{title}</title>
        </Head>
    )
}

export default HeadTemplate