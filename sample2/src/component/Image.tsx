interface ImageProps {
  url: string;
  width: string;
  height: string;
}

function Image(props: ImageProps) {
  return (
    <>
      <img
        src={props.url}
        style={{
          width: props.width,
          height: props.height,
          display: "block",
          margin: "30px auto 0 auto",
        }}
      />
    </>
  );
}

export default Image;
