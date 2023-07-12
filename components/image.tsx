import Image from "next/image";
import { DrupalFile } from "next-drupal";
import { absoluteUrl } from "lib/absolute-url";

interface DrupalImageProps {
  image: DrupalFile;
}

export function DrupalImage({ image, ...props }: DrupalImageProps) {
    // console.log(image);

  return (
    <figure {...props}>
      {/* <Image
        src={absoluteUrl(image.uri.url)}
        // src={absoluteUrl(image?.uri?.url)}

        width={768}
        height={400}
        // layout="responsive"
        // objectFit="cover"
        alt={image.resourceIdObjMeta.alt}
        priority
      /> */}

{/* type, id, drupal_internal__fid, langcode, filename, uri, filemime, filesize, status, created, changed, links, resourceIdObjMeta, uid, relationshipNames */}

    {image.id}

      {image.resourceIdObjMeta.title && (
        <figcaption className="py-2 text-sm text-center text-gray-600">
          {image.resourceIdObjMeta.title}
        </figcaption>
      )}
    </figure>
  );
}
