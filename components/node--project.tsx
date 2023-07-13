import { DrupalNode } from 'next-drupal';
import { FormattedText } from 'components/formatted-text';
import MediaImage from 'components/media--image';
import { DrupalEntity } from 'components/entity';

interface NodeProjectProps {
    node: DrupalNode;
}

export function NodeProject({ node, ...props }: NodeProjectProps) {
    return (
        <article {...props}>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{node.title}</h1>

            <section className='mt-8 space-y-4'>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">General information</h2>

                {node.article_body?.processed && (
                    <div className="mb-4 prose">
                        <FormattedText
                            processed={node.article_body.processed}
                        />
                    </div>
                )}

                {node.subtype && (
                    <div className="mb-4">
                        <h3 className="mb-1 text-lg">Subtype</h3>
                        <div>{node.subtype}</div>
                    </div>
                )}

                {node.author && (
                    <div className="mb-4">
                        <h3 className="mb-1 text-lg">Author</h3>
                        <DrupalEntity entity={node.author} />
                    </div>
                )}
            </section>

            <section>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">Media/Assets</h2>

                {node.image && (
                <div className="mb-4">
                    <MediaImage media={node.image} />
                </div>
                )}
            </section>

            <section>
                <h2 className="text-lg font-semibold tracking-tight text-gray-900">Meta data</h2>

                {node.keywords && (
                    <div className="mb-4">
                        <h3 className="mb-1 text-lg">Tags</h3>
                        <div>
                            {node.keywords.map((item, i) => (
                                <DrupalEntity key={i} entity={item} />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </article>
    );
}
