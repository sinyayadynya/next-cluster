import { DrupalNode } from "next-drupal";
import { FormattedText } from "components/formatted-text";
import { DrupalEntity } from "components/entity";
import Link from "next/link";

interface NodePlaceProps {
  node: DrupalNode;
}

export function NodePlace({ node, ...props }: NodePlaceProps) {
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
        <h2 className="mb-2 text-4xl">Business information</h2>

        {node.opening_hours_specification && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Opening hours</h3>
            {/* office_hours */}
            <pre>
              {JSON.stringify(node.opening_hours_specification, null, 2)}
            </pre>
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
    </article>
  );
}
