import MKBox from "../MKBox";
import bgImage from "../../assets/images/backgrounds/giorgia-finazzi-p73awrEBovI-unsplash-cropped.jpeg";

const TopBgImg = () => {
  return (
    <div>
      {/* Container for top background Image */}
      <MKBox
        // style={{ border: "10px solid green" }}

        minHeight="300px"
        maxHeight="600px"
        top={0}
        minWidth="100vw"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.2),
              rgba(gradients.dark.state, 0.2)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      />
    </div>
  );
};

export default TopBgImg;
