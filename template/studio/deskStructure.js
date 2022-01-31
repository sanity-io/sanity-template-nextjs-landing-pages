import S from '@sanity/desk-tool/structure-builder'

// We filter document types defined in structure to prevent
// them from being listed twice
const hiddenDocTypes = (listItem) => !['page', 'route', 'site-config'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Site')
    .items([
      S.documentListItem().id('global-config').schemaType('site-config').title('Site config'),
      S.documentTypeListItem('page').title('Pages'),
      S.documentTypeListItem('route').title('Routes'),
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ])
