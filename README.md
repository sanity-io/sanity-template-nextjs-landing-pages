# Next.js landing pages [![Prettier](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/prettier.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/prettier.yml) [![CI](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/ci.yml) ![Vercel](https://vercelbadge.vercel.app/api/sanity-io/sanity-template-nextjs-landing-pages)

_SEO friendly page builder in React.js. Heroes, sign-up forms and calls to action._

The template contains both a Sanity Studio and a front-end in Next.js. Both are deployed on Netlify.

Deployed your own with [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

You can also deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-landing-pages&project-name=sanity-next-landing-pages&repository-name=sanity-next-landing-pages&demo-title=Next.js%20landing%20pages&demo-description=SEO%20friendly%20page%20builder%20in%20React.js.%20Heroes%2C%20sign-up%20forms%20and%20calls%20to%20action.&demo-url=https%3A%2F%2Ftemplate-nextjs-landing-page.sanity.build%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fsanity-io%2Fsanity-template-nextjs-landing-pages%2F3ec5538849337ce2a7e231b180418ed2ff3dd20d%2Fassets%2Ffrontend.jpg&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

![The Sanity.io and Next.js powered landing page website](/.sanity-template/assets/frontend.jpg?raw=true)

## What you have

- A dynamic frontend with [Next.js](https://nextjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Vercel](https://vercel.com)

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

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `npm install` in `./build/web` and `sanity install` in `/build/studio`** This will install the necessary dependencies for the Next.js frontend and the Studio.

4. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Next.js frontend and Sanity Studio.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`
