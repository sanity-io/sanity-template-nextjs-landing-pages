# Next.js landing pages [![Prettier](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/prettier.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/prettier.yml) [![CI](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/ci.yml/badge.svg?event=push)](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/actions/workflows/ci.yml) ![Vercel](https://vercelbadge.vercel.app/api/sanity-io/sanity-template-nextjs-landing-pages)

### [Live demo](https://template-nextjs-landing-pages.sanity.build/)

_SEO friendly page builder in React.js. Heroes, sign-up forms and calls to action._

The template contains both a Sanity Studio and a front-end in Next.js. Both are deployed on Vercel.

Deployed your own with [sanity.io/create](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

You can also deploy with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsanity-io%2Fsanity-template-nextjs-landing-pages&project-name=sanity-next-landing-pages&repository-name=sanity-next-landing-pages&demo-title=Next.js%20landing%20pages&demo-description=SEO%20friendly%20page%20builder%20in%20React.js.%20Heroes%2C%20sign-up%20forms%20and%20calls%20to%20action.&demo-url=https%3A%2F%2Ftemplate-nextjs-landing-pages.sanity.build%2F&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fsanity-io%2Fsanity-template-nextjs-landing-pages%2F3ec5538849337ce2a7e231b180418ed2ff3dd20d%2Fassets%2Ffrontend.jpg&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)

![The Sanity.io and Next.js powered landing page website](/.sanity-template/assets/frontend.jpg?raw=true)

## What you have

- A dynamic frontend with [Next.js](https://nextjs.org)
- Structured content using [Sanity.io](https://www.sanity.io)
- Global deployment on [Vercel](https://vercel.com)

## Deploy changes

Vercel automatically deploys new changes commited to master on GitHub. If you want to change deployment branch, do so in [Customizing the Production Branch on Verce;](https://vercel.com/docs/concepts/git#customizing-the-production-branch).

## Stuck? Get help

[![Slack Community Button](https://slack.sanity.io/badge.svg)](https://slack.sanity.io/)

Join [Sanity’s developer community](https://slack.sanity.io) or ping us [on twitter](https://twitter.com/sanity_io).

### Running the front-end

You'll need to create a `.env` file to store a few environment variables that Next will use to pull data from the Sanity API.

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=<YOUR-PROJECT-ID>
NEXT_PUBLIC_SANITY_DATASET=<YOUR-DATASET-NAME>
SANITY_STUDIO_API_PROJECT_ID=<YOUR-PROJECT-ID>
SANITY_STUDIO_API_DATASET=<YOUR-DATASET-NAME>
```

For instance, your file should look like this:

```dotenv
NEXT_PUBLIC_SANITY_PROJECT_ID=abcdefgh
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_API_PROJECT_ID=abcdefgh
SANITY_STUDIO_API_DATASET=production
```

To find these, visit https://manage.sanity.io

The Project ID is displayed once you select your project. It is an alphanumeric 8-character string.

The dataset is the name of the dataset that you want to use. For instance "production".

Once those env variables are in place, you can run the following commands to get Next's development server up and running:

```bash
npm install

# Run the frontend
npm run dev

# Run the Studio
npm run start:sanity
```

The blog will be running at `http://localhost:3000`, the Studio will run at `http://localhost:3333`.
