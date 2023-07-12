import { DrupalNode } from "next-drupal"

interface NodeBasicPageProps {
  node: DrupalNode
}

export function NodeBasicPage({ node, ...props }: NodeBasicPageProps) {
  return (
    <article {...props}>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{node.title}</h1>
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
  )
}
