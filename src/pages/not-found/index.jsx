import not_found from "../../assets/not_found.gif";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={not_found} alt="not found" className="w-full h-full" />
    </div>
  );
};

export default NotFound;
