import {useNavigate} from "react-router-dom";


export const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleBackClick} className="text-black-500 flex items-center">
      <span className="mr-2">&larr;</span> Back
    </button>
  )
}