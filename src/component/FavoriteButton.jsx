// import React, { useState } from "react";
// import "../style/FavoriteButton.css";
// import axios from "axios";

// const FavoriteButton = ({ movie, setMovie }) => {
//   // const [addContent, setAddContent] = useState(false);
//   const [error, setError] = useState(null);

//   const onAddContent = async () => {
//     try {
//       const data = await axios.post(`http://localhost:4000/movielike/${id}`);
//       console.log(data);
//     } catch (e) {
//       setError(e);
//     }
//   };

//   return (
//     <div className="buttonFixed">
//       <button type="submit" className="FavoriteBt" onClick={onAddContent}>
//         버튼
//       </button>
//     </div>
//   );
// };

// export default FavoriteButton;
