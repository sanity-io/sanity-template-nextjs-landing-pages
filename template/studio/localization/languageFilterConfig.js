import {supportedLanguages} from './localize'

export default {
  supportedLanguages,
  filterField: (enclosingType, field, selectedLanguageIds) =>
    !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name)
}
