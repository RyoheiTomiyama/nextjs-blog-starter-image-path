import Image from 'next/image'
import React from 'react'

const PostImage: React.FC<JSX.IntrinsicElements['img']> = ({
  src,
  alt,
  title,
}) => {
  return <Image
    src={src}
    alt={alt}
    title={title}
    height={100}
    width={100}
  />
}
export default PostImage