/**
 * Transforms a single slug into an array of its possible variations.
 *
 * As editors can include leading and/or trailing slashes in routes' slugs,
 * we need to normalize them before searching routes by slug.
 */
export default function getSlugVariations(slug) {
  const slashless = slug.replace(/\//g, '')
  return [
    slashless,
    // /slash-on-both-ends/
    `/${slashless}/`,
    // trailing/
    `${slashless}/`,
    // /leading
    `/${slashless}`,
  ]
}
