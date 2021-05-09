// import React from "react"
// import { graphql, Link } from "gatsby"
// import Layout from "../components/layout"
// import Img from "gatsby-image"
// import SEO from "../components/seo"

// export const query = graphql`
//   query($title: String!) {
//     allContentfulPlaces(title: { eq: $title }) {
//     title
//       desc {
//         raw
//       }
//         }
//     }
// `

// const BlogPost = props => {
//   console.log()
//   return (
//     <Layout>
//       <SEO title={props.data.allContentfulPlaces.edge.title} />
//       <Link to="/blog/">Visit the Blog Page</Link>
//       <div className="content">
//         <h1>{props.data.contentfulBlogPost.title}</h1>
//         {/* <span className="meta">
//           Posted on {props.data.allContentfulPlaces.publishedDate}

//         </span> */}

//         {/* {props.data.contentfulBlogPost.featuredImage && (
//           <Img
//             className="featured"
//             fluid={props.data.contentfulBlogPost.featuredImage.fluid}
//             alt={props.data.contentfulBlogPost.title}
//           />

//         )} */}
//         <h4>{props.data.allContentfulPlaces.desc}</h4>

//       </div>
//     </Layout>
//   )
// }
// export default BlogPost