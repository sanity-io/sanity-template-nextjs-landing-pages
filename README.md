# Next.js landing pages

_SEO friendly page builder in React.js. Heroes, sign-up forms and calls to action._

Deployed your own with [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

You can also deploy with Vercel:


[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-blog-comments&project-name=sanity-next-blog-comments&repository-name=sanity-next-blog-comments&demo-title=Next.js%20Blog%20with%20Comments&demo-description=A%20Next.js%20%2B%20Sanity%20blog%20with%20comments%20stored%20in%20Studio%20via%20API%20routes.&demo-url=https%3A%2F%2Ftemplate-nextjs-blog-comments.sanity.build%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fsanity-io%2Fsanity-template-nextjs-blog-comments%2Fmain%2F.sanity-template%2Fassets%2Fpreview-image.jpg&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

## What you have

- A dynamic frontend with [Next.js](https://nextjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Netlify](https://netlify.com)

## Quick start

1. Clone this repository
2. `npm install` in the project root folder on local
3. `npm run dev` to start the studio and frontend locally
   - Your studio should be running on [http://localhost:3333](http://localhost:3333)
   - Your frontend should be running on [http://localhost:3000](http://localhost:3000)
4. `npm run build` to build to production locally

## Deploy changes

Netlify automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [build & deploy settings on Netlify](https://www.netlify.com/docs/continuous-deployment/#branches-deploys).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).




This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it by [creating this project](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

The template contains both a Sanity Studio and a front-end in Next.js. Both are deployed on Netlify.

Want to make a template for Sanity and your favourite front-end framework? We’re still maturing [sanity.io/create](https://sanity.io/create) and our APIs, but do tell us about it on [slack.sanity.io](https://slack.sanity.io).

![The Sanity.io and Next.js powered landing page website](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/blob/master/assets/frontend.jpg?raw=true)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `npm install` in `./build/web` and `sanity install` in `/build/studio`** This will install the necessary dependencies for the Next.js frontend and the Studio.

4. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Next.js frontend and Sanity Studio.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`
