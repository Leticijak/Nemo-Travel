import styled from "styled-components"
import Layout from "../components/Layout"

import CardPost from "../components/Card/CardPost"
import { getPosts } from "../services"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Home({ posts }) {
  console.log(posts)
  return (
    <Layout>
      <div className='container'>
        {posts.map((p, i) => (
          <CardPost key={i} post={p.node} />
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || []
  return {
    props: { posts },
  }
}
