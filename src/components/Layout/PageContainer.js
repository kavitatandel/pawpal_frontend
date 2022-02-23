// Images
import regBkImg from "assets/images/backgrounds/agustina-gabes-FSIxZmwEDqI-unsplash.jpeg";
import CenteredFooter from "components/Layout/CenteredFooter";
import Header from "components/Layout/Header";
// Material Kit 2 React components
import MKBox from "components/MKBox";

const PageContainer = () => {
  return (
    <>
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={-1}
        width="100%"
        minHeight="90vh"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.3),
              rgba(gradients.dark.state, 0.3)
            )}, url(${regBkImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></MKBox>

      <CenteredFooter minHeight="10vh" />
    </>
  );
};

export default PageContainer;
