import React from "react";

interface ErrorProps {
  error: string | null;
}

const Error: React.FC<ErrorProps> = ({ error }) => {
  return (
    error && (
      <div className="bg-red-500 text-white p-4 rounded-md text-[15px] text-center">
        {error}
      </div>
    )
  );
};

export default Error;
