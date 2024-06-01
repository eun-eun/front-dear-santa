import React from 'react';
import Head from 'next/head';
import NoPost from 'src/components/NoPost';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>디어 산타</title>
      </Head>
      <NoPost />
    </>
  );
};

export default IndexPage;
