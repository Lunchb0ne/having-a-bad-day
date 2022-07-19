import { Component, createEffect, createSignal, Setter } from "solid-js";

type ImageLoaderProps = {
  url: string;
  alt?: string;
};
const ImageLoader: Component<ImageLoaderProps> = ({
  url,
  alt = "Fetched Image",
}) => {
  const [imageFetched, setImageFetched] = createSignal(false);
  createEffect(() => {
    console.log("Image is now:", url);
    setImageFetched(false);
  });
  return (
    <img
      class={`mx-auto object-cover rounded-lg h-96 w-96 bg-grey-200 shadow-sm ${
        imageFetched() ? "" : "animate-pulse"
      }`}
      src={url}
      alt={alt}
      onLoad={() => {
        console.log("Image has been Loaded");
        setImageFetched(true);
      }}
    />
  );
};

export default ImageLoader;
