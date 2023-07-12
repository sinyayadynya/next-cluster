import { DrupalMedia } from "next-drupal";

interface MediaLegislationObjectProps {
  media: DrupalMedia;
}

export function MediaLegislationObject({ media, ...props }: MediaLegislationObjectProps) {
  return (
    <div {...props}>
      {media.legislation_object && (
        <div className="mb-4">
          <h3 className="sr-only">Document</h3>
          {/* file */}
          <pre>{JSON.stringify(media.legislation_object, null, 2)}</pre>
        </div>
      )}

      {media.content_url && (
        <div className="mb-4">
          <h3 className="mb-1 text-2xl">Content URL</h3>
          {/* file */}
          <pre>{JSON.stringify(media.content_url, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
