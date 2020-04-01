import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Style from './HomeStyled'

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return <Style>{data?.site?.siteMetadata?.title}</Style>
}

export default Home
