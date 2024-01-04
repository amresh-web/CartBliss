import React, { Suspense } from "react";

const Camera = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Camera</h1>
      </Suspense>
    </>
  );
};

export default Camera;
