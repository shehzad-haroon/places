// // /**
// //  * Implement Gatsby's Node APIs in this file.
// //  *
// //  * See: https://www.gatsbyjs.com/docs/node-apis/
// //  */

// // const { graphql } = require("gatsby");

// // // You can delete this file if you're not using it

// const path = require("path")
// exports.createPages = async ({actions, graphql}) =>{
//     const {createPage} = actions;
//     const result = await graphql(`
//     query {
//       allContentfulPlaces {
//         edges {
//           node {
//             title
//           }
//         }
//       }
//     }
//         `
//     )
//     response.data.allContentfulPlaces.edges.forEach(edge => {
//       createPage({
//         path: `/blog/${edge.node.title}`,
//         component: path.resolve("./src/templates/blog-post.js"),
//         context: {
//           title: edge.node.title,
//         },
//       })
//     })
//     // console.log(JSON.Stringify(result))
    
//     console.log(JSON.stringify(result));
// }