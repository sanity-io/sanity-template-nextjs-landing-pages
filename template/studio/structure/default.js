import S from '@sanity/desk-tool/structure-builder'
import client from 'part:@sanity/base/client'
import { MdDashboard } from 'react-icons/lib/md'

export default () =>
  S.list()
    .title('Site')
    .items([
      S.listItem()
        .title("Site config")
        .child(
          S.editor()
            .id('config')
            .schemaType("site-config")
            .documentId("global-config")
        ),
      ...S.documentTypeListItems()
    ])
