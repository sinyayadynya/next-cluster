import { DrupalMedia } from "next-drupal";

interface LegislationObjectProps {
  media: DrupalMedia;
}

function FileLink({ file, name }) {
    const baseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL;
    const fileUrl = `${baseUrl}${file.uri.url}`;

    return (
      <div>
        <a href={fileUrl} download>
          {name || file.filename}
        </a>
      </div>
    );
  }



export function LegislationObject({ media, ...props }: LegislationObjectProps) {
    return (
      <div {...props}>
        {media.field_media_file && (
          <div className="mb-4">
            <h3 className="sr-only">Document</h3>
            {/* file */}
            <FileLink file={media.field_media_file} name={media.name} />
          </div>
        )}

        {media.content_url && (
          <div className="mb-4">
            <h3 className="mb-1 text-2xl">Content URL</h3>
            {/* file */}
            <FileLink file={media.content_url} name={media.name} />
          </div>
        )}
      </div>
    );
  }
