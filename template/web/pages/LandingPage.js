import React, { Component } from "react";
import { NextSeo } from "next-seo";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import Layout from "../components/Layout";
import client from "../client";
import RenderSections from "../components/RenderSections";

const builder = imageUrlBuilder(client);
const pageFragment = groq`
...,
content[] {
  ...,
  cta {
    ...,
    route->
  },
  ctas[] {
    ...,
    route->
  }
}`;

const pageQuery = groq`
*[_type == "route" && slug.current == $slug][0]{
  page-> {
    ${pageFragment}
  }
}
`;

const LandingPage = (props) => {
  const {
    title = "Missing title",
    description,
    disallowRobots,
    openGraphImage,
    content = [],
    config = {},
    slug,
  } = props;

  const openGraphImages = openGraphImage
    ? [
        {
          url: builder.image(openGraphImage).width(800).height(600).url(),
          width: 800,
          height: 600,
          alt: title,
        },
        {
          // Facebook recommended size
          url: builder.image(openGraphImage).width(1200).height(630).url(),
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          // Square 1:1
          url: builder.image(openGraphImage).width(600).height(600).url(),
          width: 600,
          height: 600,
          alt: title,
        },
      ]
    : [];

  return (
    <Layout config={config}>
      <NextSeo
        title={title}
        titleTemplate={`%s | ${config.title}`}
        description={description}
        canonical={config.url && `${config.url}/${slug}`}
        openGraph={{
          images: openGraphImages,
        }}
        noindex={disallowRobots}
      />
      {content && <RenderSections sections={content} />}
    </Layout>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { slug } = query;
  if (!query) {
    return {
      notFound: true,
    };
  }

  let data;
  if (slug && slug !== "/") {
    data = await client.fetch(pageQuery, { slug });
  }

  // Frontpage
  if (slug && slug === "/") {
    data = await client
      .fetch(
        groq`
        *[_id == "global-config"][0]{
          frontpage -> {
            ${pageFragment}
          }
        }
      `
      )
      .then((res) => ({ ...res.frontpage, slug }));
  }

  return {
    props: data,
  };
};

export default LandingPage;
