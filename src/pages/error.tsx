import React from 'react';

function ErrorPage() {
  return <>error</>;
}

ErrorPage.getLayout = function getLayout(page: any) {
  return <div>{page}</div>;
};

export default ErrorPage;
