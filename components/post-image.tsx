import Image from 'next/image'
import React, { createElement } from 'react'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc = (slug) => (props) => {
  try {
    const { src, alt, title } = props
    const image = require('../_posts/' + slug + '/' + src).default
  
    return <Image
      src={image}
      alt={alt}
      title={title}
    />

  } catch (e) {
    return createElement('img', props)
  }
}
export default PostImage