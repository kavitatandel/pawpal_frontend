import MKBox from "components/MKBox";

const MapWrapper = () => {
  return (
    <div>
      style=
      {{
        margin: "0 auto",
        padding: 0,
        top: 0,
        left: 0,
        // border: " 2px solid red",
        height: "auto",
        width: "100%",
      }}
      >
      <MKBox
        height="auto"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0),
              rgba(gradients.dark.state, 0)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {props.children}
      </MKBox>
    </div>
  );
};

export default MapWrapper;
