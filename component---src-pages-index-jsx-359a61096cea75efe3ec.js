webpackJsonp([0xc23565d713b7,0x9e6d75874cd6],{"./src/components/tile.jsx":function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=r(l);s("./src/styles/tile.css");var u=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e={border:"1px solid #FACEE0",objectFit:"cover"},t={width:"100%",margin:0},s=this.props.project,r="/"+s.pathPrefix+"/thumbs/"+s.filename+".png",o=s.filesuffix?s.pathPrefix+"/"+s.filename+s.filesuffix:"/"+s.pathPrefix+"/"+s.filename;return i.default.createElement("a",{href:o},i.default.createElement("img",{alt:"",src:r,style:e,className:"tile-image"}),i.default.createElement("p",{style:t},this.props.project.caption))},t}(i.default.Component);t.default=u,e.exports=t.default},"./src/components/tiles.jsx":function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=s("./node_modules/react/react.js"),i=r(l),u=s("./src/components/tile.jsx"),c=r(u);s("./src/styles/tiles.css");var d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAAAAAA6fptVAAAACklEQVQI12P4DwABAQEAG7buVgAAAABJRU5ErkJggg==",p=function(){return i.default.createElement("div",{style:{padding:".5em"}},i.default.createElement("img",{alt:"",src:d,className:"tile-image"}))},b=function(e){function t(){return o(this,t),n(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=void 0;return this.props.projects.length%2===1&&(e=i.default.createElement(p,null)),i.default.createElement("div",{className:"tiles"},this.props.projects.map(function(e){return i.default.createElement(c.default,{project:e})}),e)},t}(i.default.Component);t.default=b,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/design.jsx':function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=s("./node_modules/react/react.js"),n=r(o),a=s("./src/components/tiles.jsx"),l=r(a),i=[{pathPrefix:"design",filename:"arch11a",caption:"ARCH 11A"}],u=function(){return n.default.createElement(l.default,{projects:i})};t.default=u,e.exports=t.default},'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/index.jsx':function(e,t,s){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=s("./node_modules/react/react.js"),n=r(o),a=s('./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":[["/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-env/lib/index.js",{"loose":true,"uglify":true,"modules":"commonjs","targets":{"browsers":["> 1%","last 2 versions","IE >= 9"]},"exclude":["transform-regenerator","transform-es2015-typeof-symbol"]}],"/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-stage-0/lib/index.js","/Users/randall/Workspace/cry-me.github.io/gatsby-proj/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/design.jsx'),l=r(a),i=function(){return n.default.createElement(l.default,null)};t.default=i,e.exports=t.default},"./src/styles/tile.css":function(e,t){},"./src/styles/tiles.css":function(e,t){}});
//# sourceMappingURL=component---src-pages-index-jsx-359a61096cea75efe3ec.js.map