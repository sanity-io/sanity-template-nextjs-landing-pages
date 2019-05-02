# sanity-template-nextjs-landing-pages

This template repo is used by Sanity.io to easily create deployed and configured projects through a web interface. You can test it by [creating this project](https://www.sanity.io/create/?template=sanity-io%2Fsanity-template-nextjs-landing-pages).

The template contains both a Sanity Studio and a front-end in Next.js. Both are deployed on Netlify.

Feel free to clone this template to create your own automagic project creation experiences.

![The Sanity.io and Next.js powered landing page website](https://github.com/sanity-io/sanity-template-nextjs-landing-pages/blob/master/assets/frontend.jpg?raw=true)

## Local development

You develop the templates in `/template`, and review your changes in `/build`.

1. **Install dependencies with `npm install` in the root folder.** This will install the template development tool that watches changes in the `/template` folder and output the template to `/build`.

2. **Run `npm run dev` in root folder.** This will build the template files to `/build`. This is how the code will look for those who install the project later.

3. **Run `npm install` in `./build/web` and `sanity install` in `/build/studio`** This will install the necessary dependencies for the Next.js frontend and the Studio.

4. **Run `npm run dev` in `./build/web` and `sanity start` in `/build/studio`**. This will start the development servers for the Next.js frontend and Sanity Studio.

## Notes

When developing ProjectId and dataset name can be changed in `template-values-development.json`
