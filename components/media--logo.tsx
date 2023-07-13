// ./components/media--logo.tsx

import { DrupalMedia } from "next-drupal";
import Image from "next/image";
import { absoluteUrl } from 'lib/absolute-url';

interface MediaLogoProps {
  media: {
    uri: {
      url: string;
    };
    name: string;
  };
}

export default function MediaLogo({ media }: MediaLogoProps) {
  const { uri, name } = media;

  if (!uri) return null;

  const imageUrl = absoluteUrl(uri.url);

  return (
    <div className="relative h-0 pb-[75%]">
      <Image
        src={imageUrl}
        alt={name}
        title={name}
        className="w-full"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
