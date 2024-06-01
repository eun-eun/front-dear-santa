import React from 'react';
function NotFoundPage() {
  return <>NotFoundIndex</>;
}

NotFoundPage.getLayout = function getLayout(page: any) {
  return <div>{page}</div>;
};

export default NotFoundPage;
