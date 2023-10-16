// src/components/ImageEditor.js

import React from "react";
import { fabric } from "fabric";

const ImageEditor: React.FC<{ image: any }> = ({ image }) => {
  //   const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = new fabric.Canvas("image-canvas");

    if (image) {
      fabric.Image.fromURL(image.path);
      const imgElement = new Image();
      imgElement.src = URL.createObjectURL(image);

      console.log(imgElement.src);

      const fabricImage = new fabric.Image(imgElement);
      console.log(fabricImage);
      console.log("img_fab", fabricImage);

      canvas.add(fabricImage);
      canvas.bringToFront(fabricImage);
    }
  }, [image]);

  return <canvas id="image-canvas" width="400" height="400" />;
};

export default ImageEditor;
