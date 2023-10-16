// src/components/ImageProcessingApp.js

import React, { useState } from "react";
import ImageUploader from "./ImageUploader";
import ImageEditor from "./ImageEditor";

const ImageProcessingApp = () => {
  const [uploadedImage, setUploadedImage] = useState();
  console.log(uploadedImage);

  return (
    <div>
      <ImageUploader setUploadedImage={setUploadedImage} />
      {uploadedImage && <ImageEditor image={uploadedImage} />}
    </div>
  );
};

export default ImageProcessingApp;
