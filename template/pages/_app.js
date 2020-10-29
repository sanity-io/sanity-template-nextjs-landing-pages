import React from "react";
import client from "../client";

const siteConfigQuery = `
  *[_id == "global-config"] {
    ...,
    logo {asset->{extension, url}},
    mainNavigation[] -> {
      ...,
      "title": page->title
    },
    footerNavigation[] -> {
      ...,
      "title": page->title
    }
  }[0]
  `;

export function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  // Add site config from sanity
  return client.fetch(siteConfigQuery).then((config) => {
    if (!config) {
      return { pageProps };
    }
    if (config && pageProps) {
      pageProps.config = config;
    }

    return { pageProps };
  });
};

export default App;
