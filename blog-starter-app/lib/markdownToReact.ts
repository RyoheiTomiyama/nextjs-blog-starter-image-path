import { createElement, Fragment } from 'react'
import rehypeReact from 'rehype-react'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'

export default async function markdownToReact(markdown: string) {
  const result = (await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeReact, { createElement, Fragment })
    .process(markdown)).result
  return result
}
