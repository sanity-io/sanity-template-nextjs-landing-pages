import { generateLocaleType, getLocaleTypeName, supportedLanguages } from './localize'

const localizedTypes = ['string', 'text', 'slug']

const localizeField = (field, traceModified) => {
  if (!localizedTypes.includes(field.type)) return field

  const localizedField = {
    ...field,
    type: getLocaleTypeName(field.type),
  }

  if (traceModified) {
    traceModified.push(localizedField)
  }

  return localizedField
}

const inModified = (name) => (field) => field.name === name

export const localizeSupportedTypes = (typeDef) => {
  const fieldsModified = []
  const localizedDef = { ...typeDef }

  // Localize fields
  if (localizedDef.fields) {
    localizedDef.fields = localizedDef.fields.map((field) => {
      if (field.type === 'array') {
        return {
          ...field,
          of: field.of.map(localizeField),
        }
      }

      return localizeField(field, fieldsModified)
    })
  }

  // Localize any previews
  if (localizedDef.preview && localizedDef.preview.select && fieldsModified.length > 0) {
    localizedDef.preview = {
      ...localizedDef.preview,
      select: Object.keys(localizedDef.preview.select).reduce((select, key) => {
        // Find any fields that have been modified and change name
        if (!fieldsModified.find(inModified(localizedDef.preview.select[key]))) {
          select[key] = localizedDef.preview.select[key]
        } else {
          select[key] = `${localizedDef.preview.select[key]}.${supportedLanguages[0].id}`
        }
        return select
      }, {}),
    }
  }

  return localizedDef
}

export default localizedTypes.map(generateLocaleType)
