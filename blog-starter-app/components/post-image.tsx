import Image from 'next/image'
import React from 'react'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc = (slug) => ({
  src,
  alt,
  title,
}) => {
  const slug = 'hello-world'
  const imagePath = 'cover2.jpg'
  const image = require(`../_posts/${slug}/${imagePath}`).default
  // const image = require('../_posts/' + slug + '/' + src).default

  return <Image
    src={image}
    alt={alt}
    title={title}
  />
}
export default PostImage