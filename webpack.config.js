const federations = require('test-react-scripts-cond/federations')

const isDevelopment = process.env.NODE_ENV !== 'production'


module.exports = federations({
  name: 'condAuthPages',
  remotes: {
    condRootMf: 'condRootMf@http://localhost:3001/remoteEntry.js',
    condLayouts: 'condLayouts@http://localhost:3003/remoteEntry.js',
    condFormElements: 'condFormElements@http://localhost:3004/remoteEntry.js',
  },
  exposes: {
    './routes': './src/app/routes',
  },
})
