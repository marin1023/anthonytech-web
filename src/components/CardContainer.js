import { useMemo } from "react";
import "./CardContainer.css";

const CardContainer = ({
  imageCaption,
  serviceDescription,
  solutionDescription,
  propWidth,
  propHeight,
  propAlignSelf,
}) => {
  const copyStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propHeight, propAlignSelf]);

  return (
    <div className="cards">
      <img className="image-lummi1" alt="" src={imageCaption} />
      <div className="copy1" style={copyStyle}>
        <div className="feature-title">{serviceDescription}</div>
        <div className="feature-description">{solutionDescription}</div>
      </div>
    </div>
  );
};

export default CardContainer;
