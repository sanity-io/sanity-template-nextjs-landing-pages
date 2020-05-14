import {generateLocaleType, getLocaleTypeName, supportedLanguages} from './localize'

const localizedTypes = ['string', 'text', 'slug', 'portableText', 'simplePortableText']

const localizeField = (field, traceModified) => {
  if (!localizedTypes.includes(field.type)) return field

  const localizedField = {
    ...field,
    type: getLocaleTypeName(field.type)
  }

  if (traceModified) {
    traceModified.push(localizedField)
  }

  return localizedField
}

const inModified = name => field => field.name === name

export const localizeSupportedTypes = typeDef => {
  const fieldsModified = []
  const localizedDef = {...typeDef}

  // Localize fields
  if (localizedDef.fields) {
    localizedDef.fields = localizedDef.fields.map(field => {
      if (field.type === 'array') {
        return {
          ...field,
          of: field.of.map(localizeField)
        }
      }

      return localizeField(field, fieldsModified)
    })
  }

  // Localize any previews to first language
  if (localizedDef.preview && localizedDef.preview.select && fieldsModified.length > 0) {
    localizedDef.preview = {
      ...localizedDef.preview,
      select: Object.keys(localizedDef.preview.select).reduce((select, key) => {
        // Find any fields that have been modified and change name
        let baseKey
        const selectorToChange = localizedDef.preview.select[key]
        if (selectorToChange.includes('.')) {
          baseKey = selectorToChange.substring(0, selectorToChange.indexOf('.'))
        } else {
          baseKey = selectorToChange
        }

        if (!fieldsModified.find(inModified(baseKey))) {
          select[key] = localizedDef.preview.select[key]
        } else {
          let prefix = selectorToChange
          let suffix = ''
          if (selectorToChange.includes('.')) {
            prefix = selectorToChange.substring(0, selectorToChange.indexOf('.'))
            suffix = selectorToChange.substring(selectorToChange.indexOf('.'))
          }
          select[key] = `${prefix}.${supportedLanguages[0].id}${suffix}`
        }
        return select
      }, {})
    }
  }

  return localizedDef
}

export default localizedTypes.map(generateLocaleType)
