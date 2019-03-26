export default {
  title: 'URL',
  name: 'link',
  type: 'object',
  fields: [
    {
      title: 'URL',
      name: 'href',
      type: 'url'
    }
  ],
  blockEditor: {
    icon: () => '🌍',
    render: ({children}) => <span>{children} </span>
  }
}
