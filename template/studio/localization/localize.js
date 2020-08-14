// You can add/edit/remove supported languages in this array. Remember that you’ll need to update your content accordingly if you edit or remove a language here.
export const supportedLanguages = [
  { id: 'en', title: 'English' },
  { id: 'es', title: 'Spanish' },
  { id: 'nb', title: 'Norwegian' },
]

export const getLocaleTypeName = (name) => `locale${name.charAt(0).toUpperCase() + name.slice(1)}`

export const generateLocaleType = (type) => console.log(`Generating locale type:: `, type) || ({
  title: type,
  name: getLocaleTypeName(type),
  type: 'object',
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
    },
  ],
  fields: supportedLanguages.map((language) => ({
    title: language.title,
    name: language.id,
    type,
  })),
})
