const targetsBuild = { ie: '11' };
const targetsTest = { node: 'current' };
const targets = process.env.NODE_ENV !== 'test' ? targetsBuild : targetsTest;

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: targets,
        useBuiltIns: 'entry'
      }
    ],
    '@babel/preset-react'
  ],
  sourceMaps: 'inline',
  retainLines: true
}