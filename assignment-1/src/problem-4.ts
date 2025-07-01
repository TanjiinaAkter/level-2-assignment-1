//=========================
//  problem - 4
//=========================
type Circle = {
  shape: "circle";
  radius: number;
};
type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};
type union = Circle | Rectangle;
const calculateShapeArea = (param: union): number => {
  if (param.shape === "circle") {
    return parseFloat((Math.PI * param.radius * param.radius).toFixed(2));
  } else if (param.shape === "rectangle") {
    return param.height * param.width;
  } else {
    throw new Error("error");
  }
};
const circleArea: Circle = {
  shape: "circle",
  radius: 5,
};
const rectangleArea: Rectangle = {
  shape: "rectangle",
  width: 4,
  height: 6,
};

const res = calculateShapeArea(rectangleArea);
console.log(res);
