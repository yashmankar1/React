import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Oops!!!</h2>
        <h1 className="text-5xl font-bold text-gray-800 mb-4">
          Something went wrong!!!
        </h1>
        <h3 className="text-2xl text-gray-600 font-semibold">
          {error.status}: {error.statusText}
        </h3>
      </div>
    </div>
  );
};

export default Error;
