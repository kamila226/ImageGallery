import { useEffect, useState } from "react";
import ImageItem from "./ImageItem";

export default function Images() {
  const [images, setImages] = useState([
    {
      id: "",
      url: "",
      link: "",
      user: "",
      userUrl: "",
    },
  ]);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=mFQQSfmfGNJb06oec39_NemgZ3PEOwaqv0sCI7s-kZg"
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(
          data.map((image) => ({
            id: image.id,
            url: image.urls.small,
            link: image.links.html,
            user: image.user.first_name,
            userUrl: image.user.links.html,
          }))
        );
      });
  }, []);

  const imgEl = images.map((image) => (
    <ImageItem
      key={image.id}
      url={image.url}
      link={image.link}
      user={image.user}
      userUrl={image.userUrl}
    />
  ));
  return <>{imgEl}</>;
}
