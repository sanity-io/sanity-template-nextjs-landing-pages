import React from 'react'
import {upperFirst} from 'lodash'
import * as PlugComponents from './plugs'


function resolvePlug(plug) {
  const Plug = PlugComponents[upperFirst(plug._type)]
  if (Plug) {
    return Plug
  }
  console.error('Cant find plug', plug) // eslint-disable-line no-console
  return null
}

export default function RenderPlugs(props) {
  const {plugs} = props

  if (!plugs) {
    console.error('Missing plugs')
    return <div>Missing plugs</div>
  }

  return (
    <>
      {plugs.map(plug => {
        const PlugComponent = resolvePlug(plug)
        if (!PlugComponent) {
          return <div>Missing plug {plug._type}</div>
        }
        return <PlugComponent {...plug} key={plug._key} />
      })}
    </>
  )
}
