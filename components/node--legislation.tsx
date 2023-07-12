import { DrupalNode } from 'next-drupal';
import { FormattedText } from 'components/formatted-text';
import { MediaLegislationObject } from 'components/media--legislation_object';
import { DrupalEntity } from 'components/entity';

import { formatDateTime } from "lib/format-date";


interface NodeLegislationProps {
  node: DrupalNode;
}

export function NodeLegislation({ node, ...props }: NodeLegislationProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl">{node.title}</h1>

      <section>
        <h2 className="mb-2 text-4xl">General</h2>

        {node.text?.processed && (
          <div className="mb-4 prose">
            <h3 className="mb-1 text-2xl">Text</h3>
            <FormattedText processed={node.text.processed} />
          </div>
        )}

        {node.description?.processed && (
          <div className="mb-4 prose">
            <h3 className="mb-1 text-2xl">Description</h3>
            <FormattedText processed={node.description.processed} />
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Content</h2>

        {node.has_part && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Items</h3>
            <div>
              {node.has_part.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Legislation</h2>

        {node.abstract && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Abstract</h3>
            <div>{node.abstract}</div>
          </div>
        )}

        {node.creative_work_status && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Creative work status</h3>
            <div>{node.creative_work_status}</div>
          </div>
        )}

        {node.date_published && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Date published</h3>
            <div>{formatDateTime(node.date_published)}</div>
          </div>
        )}

        {node.legislation_date && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation date</h3>
            <div>{formatDateTime(node.legislation_date)}</div>
          </div>
        )}

        {node.legislation_date_version && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation date version</h3>
            <div>{formatDateTime(node.legislation_date_version)}</div>
          </div>
        )}

        {node.legislation_legal_force && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation legal force</h3>
            <div>{node.legislation_legal_force}</div>
          </div>
        )}
      </section>

      <section>
        <h2 className="mb-2 text-4xl">Links</h2>

        {node.is_based_on && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Is based on</h3>
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-sky-600"
              href={node.is_based_on.uri}
            >
              {node.is_based_on.title || node.is_based_on.uri}
            </a>
          </div>
        )}
      </section>



      <section>
        <h2 className="mb-2 text-4xl">Relationships</h2>

        {/* {node.about && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">About</h3>
            <div>
              {node.about.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )} */}

        {node.legislation_applies && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation applies</h3>
            <DrupalEntity entity={node.legislation_applies} />
          </div>
        )}

        {node.legislation_changes && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation changes</h3>
            <DrupalEntity entity={node.legislation_changes} />
          </div>
        )}

        {node.legislation_consolidates && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation consolidates</h3>
            <DrupalEntity entity={node.legislation_consolidates} />
          </div>
        )}

        {/* {node.legislation_jurisdiction && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation jurisdiction</h3>
            <DrupalEntity entity={node.legislation_jurisdiction} />
          </div>
        )} */}

        {/* {node.legislation_passed_by && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation passed by</h3>
            <DrupalEntity entity={node.legislation_passed_by} />
          </div>
        )} */}

        {/* {node.legislation_responsible && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation responsible</h3>
            <DrupalEntity entity={node.legislation_responsible} />
          </div>
        )} */}

        {node.legislation_transposes && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation transposes</h3>
            <DrupalEntity entity={node.legislation_transposes} />
          </div>
        )}

        {/* {node.subject_of && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Subject of</h3>
            <div>
              {node.subject_of.map((item, i) => (
                <DrupalEntity key={i} entity={item} />
              ))}
            </div>
          </div>
        )} */}

        {node.work_example && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Work example</h3>
            <DrupalEntity entity={node.work_example} />
          </div>
        )}
      </section>



      <section>
        <h2 className="mb-2 text-4xl">Identifiers</h2>

        {node.legislation_identifier && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation identifier</h3>
            <a
              className="underline text-blue-600 hover:text-blue-800 visited:text-sky-600"
              href={node.legislation_identifier.uri}
            >
              {node.legislation_identifier.title ||
                node.legislation_identifier.uri}
            </a>
          </div>
        )}
      </section>

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

        {node.legislation_type && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Legislation type</h3>
            <DrupalEntity entity={node.legislation_type} />
          </div>
        )}
      </section>
    </article>
  );
}
