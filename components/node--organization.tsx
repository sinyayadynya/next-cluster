import { DrupalNode } from 'next-drupal';
import { FormattedText } from 'components/formatted-text';
import { DrupalEntity } from 'components/entity';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

interface NodeOrganizationProps {
    node: DrupalNode;
}

interface OrganizationProps {
    entity: {
        title: string;
        logo?: {
            id: string;
        };
    };
}

export function OrganizationHeader({
    entity,
}: OrganizationProps) {
    const [logoData, setLogoData] = useState<any>(null);
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (entity.logo) {
            fetch(
                `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}/jsonapi/media/image/${entity.logo.id}`
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log('logoData:', data);
                    console.log('logoData.data:', data.data);
                    console.log(
                        'logoData.data.relationships.image:',
                        data.data.relationships.image
                    );
                    setLogoData(data);
                    if (data.data.relationships.image.links.related) {
                        fetch(data.data.relationships.image.links.related.href)
                            .then((response) => response.json())
                            .then((imageData) => {
                                console.log('imageData:', imageData);
                                setImageUrl(
                                    `${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${imageData.data.attributes.uri.url}`
                                );
                            });
                    }
                });
        }
    }, [entity.logo]);

    return (
        <div className='my-3 flex space-x-8 items-center'>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt={entity.title}
                    width={400}
                    height={400}
                    className="w-auto h-20"
                />
            )}

            <h3 className='text-2xl font-bold tracking-tight text-slate-900'>{entity.title}</h3>
        </div>
    );
}

export function NodeOrganization({ node, ...props }: NodeOrganizationProps) {
  return (
    <article {...props}>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{node.title}</h1>

      <section>
        <h2 className="mb-2 text-4xl">General information</h2>

        {node.description?.processed && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Description</h3>
            <FormattedText processed={node.description.processed} />
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Media/Assets</h2>

        {node.image && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Image</h3>
            <DrupalEntity entity={node.image} />
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Organization information</h2>

        {node.member_of && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Member of</h3>
            <div>
              {node.member_of.map((value, i) => (
                <div key={i}>{value}</div>
              ))}
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Contact information</h2>

        {node.address && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Address</h3>
            {/* address */}
            <pre>{JSON.stringify(node.address, null, 2)}</pre>
          </div>
        )}

        {node.email && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Email</h3>
            <Link
              className="underline text-sky-600 hover:text-sky-800 visited:text-sky-600"
              href={"mailto:" + node.email}
            >
              {node.email}
            </Link>
          </div>
        )}

        {node.telephone && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Telephone</h3>
            <Link
              className="underline text-sky-600 hover:text-sky-800 visited:text-sky-600"
              href={"tel:" + node.telephone}
            >
              {node.telephone}
            </Link>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Links</h2>

        {node.same_as && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Same as</h3>
            <div>
              {node.same_as.map((item, i) => (
                <div key={i}>
                  <Link
                    className="underline text-sky-600 hover:text-sky-800 visited:text-sky-600"
                    href={item.uri}
                  >
                    {item.title || item.uri}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </article>
  );
}
