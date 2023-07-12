import { DrupalMedia } from "next-drupal";
import { DrupalImage } from "components/image";

import Image from "next/image";
import { absoluteUrl } from 'lib/absolute-url';

interface MediaImageProps {
  media: {
    image: {
      uri: {
        url: string;
      };
      meta: {
        alt: string;
      };
    };
    thumbnail: {
      meta: {
        width: number;
        height: number;
      };
    };
    name: string; // this works. see http://dev.cluster.io/jsonapi/node/article/6a5bae4c-66b7-48de-a4d3-e505c956bd16/image?resourceVersion=id%3A302
  };
}

export default function MediaImage({ media }: MediaImageProps) {
  const { image, thumbnail, name } = media;

  if (!image) return null;

  const imageUrl = absoluteUrl(image.uri.url);

  return (
    <div className="relative h-0 pb-[75%]">
      <Image
        src={imageUrl}
        // alt={image.meta.alt}
        alt={image.meta?.alt || name}
        title={name} // use name as title
        className="w-full"
        // width={thumbnail.meta.width}
        // height={thumbnail.meta.height}
        width={thumbnail?.meta?.width || 1280} // default width if thumbnail is not available
        height={thumbnail?.meta?.height || 741} // default height if thumbnail is not available
      />
    </div>
  );
}
