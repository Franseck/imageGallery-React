import data from "../data";
import "../scss/photos.scss";

const Photos = () => {
  return (
 <div className="kapsa">
      {data.map((item) => {
        const { src, photographer } = item;
        return (
      
          <div className="photos">
            <div className="photoContainer">
              <img src={src.large} alt={photographer} />
            </div>
            <div className="info">
              <p>Photographer : {photographer}</p>
            </div>
          </div>
    
        );
      })}
    </div>
  );
};

export default Photos;
