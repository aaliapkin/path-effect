// svg parser

const element = document.querySelector("svg g");
console.log(element);

let coords = [];
const shapes = [];

const analyze = function (found) {
  const operation = found[0];
  switch (operation) {
    case "M":
      analyzeM(found.slice(1));
      break;
    case "c":
      analyzeC(found.slice(1));
      break;
    case "s":
      analyzeS(found.slice(1));
      break;
  }
};

const analyzeM = function (found) {
  const [x, y] = found.split(",");
  coords = [{ x: +x - 300, y: +y - 200 }];
  shapes.push(coords);
};

const analyzeC = function (found) {
  found = found.replace(/\-/g, ",-");
  found = found.replace(/\s/g, "");
  if (found[0] === ",") {
    found = found.slice(1);
  }
  const arr = found.split(",");
  let x = 0;
  let y = 0;
  x = +arr[4];
  y = +arr[5];
  const last = coords[coords.length - 1];
  x += last.x;
  y += last.y;
  coords.push({ x, y });
};

const analyzeS = function (found) {
  found = found.replace(/\-/g, ",-");
  found = found.replace(/\s/g, "");
  if (found[0] === ",") {
    found = found.slice(1);
  }
  const arr = found.split(",");
  let x = 0;
  let y = 0;
  x = +arr[2];
  y = +arr[3];
  const last = coords[coords.length - 1];
  x += last.x;
  y += last.y;
  coords.push({ x, y });
};

const RegEx = { seg: /[A-Za-z][^A-Za-z]+/g };

const children = [].slice.call(element.children);
children.forEach((el) => {
  const d = el.getAttribute("d");
  let found;
  let i = 0;
  while ((array1 = RegEx.seg.exec(d)) !== null) {
    found = array1[0];
    analyze(found);
    i++;
    if (i > 1000) {
      break;
    }
  }
});

console.log(JSON.stringify(shapes, null, 2));
