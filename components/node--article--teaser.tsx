import Image from 'next/image';
import Link from 'next/link';
import { DrupalNode } from 'next-drupal';

import { absoluteUrl } from 'lib/absolute-url';
import { formatDate } from 'lib/format-date';

interface NodeArticleTeaserProps {
    node: DrupalNode;
}

export function NodeArticleTeaser({ node, ...props }: NodeArticleTeaserProps) {
    return (
        <article {...props}>
            <Link
                href={node.path.alias}
                passHref
                className="no-underline text-gray-900 hover:text-sky-600"
            >
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{node.title}</h2>
            </Link>
            <div className="mb-4 text-gray-600">
                {node.uid?.display_name ? (
                    <span>
                        Posted by{' '}
                        <span className="font-semibold">
                            {node.uid?.display_name}
                        </span>
                    </span>
                ) : null}
                <span> - {formatDate(node.created)}</span>
            </div>
            {/* {node.image && (
                <figure className="my-4">
                    <Image
                        src={absoluteUrl(node.image.uri.url)}
                        width={768}
                        height={480}
                        alt={node.field_image.resourceIdObjMeta.alt}
                    />
                </figure>
            )} */}

{node.image.href}


            <Link
                href={node.path.alias}
                passHref
                className="inline-flex items-center px-6 py-2 border border-gray-600 rounded-full hover:bg-gray-100"
            >
                Read article
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 ml-2"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </article>
    );
}
