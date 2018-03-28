// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-design-jsx": preferDefault(require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/src/pages/design.jsx")),
  "component---src-pages-illustration-jsx": preferDefault(require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/src/pages/illustration.jsx")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/src/pages/index.jsx")),
  "component---src-pages-design-arch-11-a-jsx": preferDefault(require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/src/pages/design/arch11a.jsx"))
}

exports.json = {
  "layout-index.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/layout-index.json"),
  "design.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/design.json"),
  "layout-index.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/layout-index.json"),
  "illustration.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/illustration.json"),
  "layout-index.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/layout-index.json"),
  "index.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/index.json"),
  "layout-index.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/layout-index.json"),
  "design-arch-11-a.json": require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/json/design-arch-11-a.json")
}

exports.layouts = {
  "component---src-layouts-index-jsx": preferDefault(require("/Users/randall/Workspace/cry-me.github.io/gatsby-proj/.cache/layouts/index.js"))
}