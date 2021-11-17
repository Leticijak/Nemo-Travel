import React from "react"

const CardPost = ({ post }) => {
  const { author, categories, createdAt, excerpt, featuredImage, slug, title } =
    post
  console.log(post)
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default CardPost
