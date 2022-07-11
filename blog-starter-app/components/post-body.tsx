import { Fragment, useEffect, useState } from 'react'
import markdownToReact from '../lib/markdownToReact'
import markdownStyles from './markdown-styles.module.css'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  const [component, setComponent] = useState(<Fragment />)
  useEffect(() => {
    (async () => {
      const contentComponent = await markdownToReact(content)
      setComponent(contentComponent)
    })()
    return () => {}
  }, [content])
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
      >{component}</div>
    </div>
  )
}

export default PostBody
