import { formatDateTime } from "lib/format-date";
import { DrupalNode } from "next-drupal";
import { FormattedText } from "components/formatted-text";
import { DrupalEntity } from "components/entity";

interface NodeReportProps {
  node: DrupalNode;
}

export function NodeReport({ node, ...props }: NodeReportProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl">{node.title}</h1>

      <section>
        <h2 className="mb-2 text-4xl">General</h2>

        {node.article_body?.processed && (
          <div className="mb-4 prose">
            <h3 className="mb-1 text-2xl">Article body</h3>
            <FormattedText processed={node.article_body.processed} />
          </div>
        )}

        {node.description?.processed && (
          <div className="mb-4 prose">
            <h3 className="mb-1 text-2xl">Description</h3>
            <FormattedText processed={node.description.processed} />
          </div>
        )}

        {node.image && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Image</h3>
            <DrupalEntity entity={node.image} />
          </div>
        )}

        {node.text?.processed && (
          <div className="mb-4 prose">
            <h3 className="mb-1 text-2xl">Text</h3>
            <FormattedText processed={node.text.processed} />
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Report</h2>

        {node.date_published && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Date published</h3>
            <div>{formatDateTime(node.date_published)}</div>
          </div>
        )}

        {node.report_number && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Report number</h3>
            <div>{node.report_number}</div>
          </div>
        )}
      </section>

      {/* <section>
        <h2 className="mb-2 text-4xl">Relationships</h2>

        {node.about && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">About</h3>
            <div>
              {node.about.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )}

        {node.source_organization && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Source organization</h3>
            <DrupalEntity entity={node.source_organization} />
          </div>
        )}

        {node.subject_of && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Subject of</h3>
            <div>
              {node.subject_of.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )}

        {node.work_example && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Work example</h3>
            <DrupalEntity entity={node.work_example} />
          </div>
        )}
      </section> */}

      <section>
        <h2 className="mb-2 text-4xl">Editorial information</h2>

        {node.field_editorial && (
          <div className="mb-4">
            {/* entity_reference_revisions */}
            <pre>{JSON.stringify(node.field_editorial, null, 2)}</pre>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Categories and Services</h2>

        {node.field_tags && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Tags</h3>
            <div>
              {node.field_tags.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )}

        {node.keywords && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Keywords</h3>
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
