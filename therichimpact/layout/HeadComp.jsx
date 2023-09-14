import React from 'react'
import Head from 'next/head'

const HeadComp = ({title}) => {
  return (
    <Head>
        <title>{title}</title>
        {/* <meta name="description" content=" Decentralized Perpetual Protocol Built on Base" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="therichimpact, richimpact, content, content writing, the rich impact, web3 writing, web3 services" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="therichimpact.org" />
        <meta name="twitter:title" content="The Rich Impact" />
        <meta name="twitter:description" content="Web3 Content Marketing Agency scaling your brand x10 faster" />
        <meta name="twitter:image" content="https://therichimpact.org/images/open-graph-img.png" />
        <meta property="og:title" content="The Rich Impact" />
        <meta property="og:url" content="https://therichimpact.org" />
        <meta property="og:image" content="https://therichimpact.org/images/open-graph-img.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Web3 Content Marketing Agency scaling your brand x10 faster" />
        <meta property="og:site_name" content="The Rich Impact" />
        <link rel="icon" href="/logo.ico" />
    </Head>
  )
}

export default HeadComp
