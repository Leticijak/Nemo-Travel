import React from "react"
import {
  CardCont,
  CardWrapper,
  CardTitles,
  CardAuthor,
  CardImg,
  AuthorImg,
  CardBody,
  AuthorBio,
} from "./Styled.CardPost"

const CardPost = ({ post }) => {
  const {
    author,
    categories,
    createdAt,
    excerpt,
    featuredImage,
    slug,
    title,
    content,
  } = post
  console.log(post)
  return (
    <CardWrapper>
      <CardCont>
        <CardTitles>
          <h3>{excerpt}</h3>
          <h1>{title}</h1>

          <p>{createdAt.slice(0, 10)}</p>
        </CardTitles>
        <CardImg src={featuredImage.url} alt='' />
        <CardBody>
          <p>{content.text}</p>
        </CardBody>

        <CardAuthor>
          <AuthorImg src={author.photo.url} alt='' width={80} />
          <p>{author.name}</p>
        </CardAuthor>
        <AuthorBio>
          <p>{author.bio}</p>
        </AuthorBio>
      </CardCont>
    </CardWrapper>
  )
}

export default CardPost
