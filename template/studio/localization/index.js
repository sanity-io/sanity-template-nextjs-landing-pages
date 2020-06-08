import {generateLocaleType, getLocaleTypeName, supportedLanguages} from './localize'

const localizedTypes = new Set()
const fieldsModified = []

const localizeField = (field, parent) => {
  if (!field.options || (field.options && !field.options.localization)) return field

  const localizedField = {
    ...field,
    type: getLocaleTypeName(field.type)
  }

  localizedTypes.add(field.type)
  fieldsModified.push(`${parent.name}.${localizedField.name}`)

  return localizedField
}

const inModified = ({baseKey, localizedDef, selectorToChange}) => field => field.startsWith(`${localizedDef.name}.${baseKey}`) || field === selectorToChange

export const localizeDocumentFields = typeDef => {
  // 1. Loop over all schema defs
  // 2. For each field that has localization: true create a custom type
  // 3. Save the changed field in a global list

  const localizedDef = {...typeDef}

  // Localize fields
  if (localizedDef.fields) {
    localizedDef.fields = localizedDef.fields.map(field => localizeField(field, localizedDef))
  }

  // Localize any previews to first language
  if (fieldsModified.length > 0 && localizedDef.preview && localizedDef.preview.select && fieldsModified.length > 0) {
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

        if (!fieldsModified.find(inModified({baseKey, localizedDef, selectorToChange}))) {
          select[key] = localizedDef.preview.select[key]
        } else {
          let prefix = selectorToChange
          let suffix = ''
          if (selectorToChange.includes('.') && !fieldsModified.includes(selectorToChange)) {
            prefix = selectorToChange.substring(0, selectorToChange.indexOf('.'))
            suffix = selectorToChange.substring(selectorToChange.indexOf('.'))
            select[key] = `${prefix}.${supportedLanguages[0].id}${suffix}`
          } else {
            select[key] = `${selectorToChange}.${supportedLanguages[0].id}`
          }
        }
        return select
      }, {})
    }
  }

  return localizedDef
}

export const getLocalisedTypes = () => {
  console.log(`Fields Modified:: `, fieldsModified)
  console.log(`Localised Types:: `, localizedTypes.values())
  return Array.from(localizedTypes.values()).map(generateLocaleType)
}
