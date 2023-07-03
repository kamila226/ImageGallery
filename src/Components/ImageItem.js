export default function ImageItem(props) {
  return (
    <div className="item--container">
      <div className="image--container">
        <a
          href={props.link}
          className="image--link"
          target="_blank"
          alt=""
          rel="noreferrer"
        >
          <img src={props.url} alt="" />
        </a>
      </div>
      <a
        href={props.userUrl}
        className="username"
        target="_blank"
        rel="noreferrer"
      >
        @{props.user}
      </a>
    </div>
  );
}
