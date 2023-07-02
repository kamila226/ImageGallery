import { useEffect, useState } from "react";

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
    <div className="item--container" key={image.id}>
      <div className="image--container">
        <a href={image.link} className="image--link" target="_blank">
          <img src={image.url} />
        </a>
      </div>
      <a href={image.userUrl} className="username" target="_blank">
        @{image.user}
      </a>
    </div>
  ));

  return <>{imgEl}</>;
}
