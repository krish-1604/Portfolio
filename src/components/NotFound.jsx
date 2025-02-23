const NotFound = () => {
    return (
      <div className="flex h-screen items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-orange-500" style={{ fontFamily: "Crygre, sans-serif" }}>
            404 Not Found
          </h1>
          <p className="text-lg text-gray-100 mt-4" style={{ fontFamily: "Crygre, sans-serif" }}>
            The page you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  };
  
  export default NotFound;
  