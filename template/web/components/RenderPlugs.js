import React from 'react'

export default function RenderPlugs(props) {
  const {plugs} = props
  if (!plugs) {
    console.error('Missing plugs')
    return null
  }
  return (
    <>
      {plugs.map(plug => {
        console.log('plug', plug)
        return (
          <div key={plug._key}>{plug._type}: {plug.heading}</div>
        )
      })}
    </>
  )
}
