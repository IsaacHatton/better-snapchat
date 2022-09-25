import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Loading } from '@nextui-org/react';
import React from 'react';

const PREVIEW_IMAGE_SELECTOR = 'img[loading="lazy"]';

export default function SaveButton({ parentNode }: { parentNode: ParentNode }) {
  const [loading, setLoading] = React.useState(false);

  async function downloadImage() {
    const img = parentNode.querySelector(PREVIEW_IMAGE_SELECTOR);

    if (img == null) {
      return;
    }

    setLoading(true);

    const src = img.getAttribute('src') as string;
    const image = await fetch(src);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'snapchat';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setLoading(false);
  }

  return (
    <Button
      auto
      isDisabled={loading}
      onPress={() => downloadImage()}
      icon={!loading ? <FontAwesomeIcon icon={faDownload} fixedWidth /> : null}
    >
      {loading ? <Loading color="currentColor" size="sm" /> : null}
    </Button>
  );
}
