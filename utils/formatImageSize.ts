export default function formatImageSize(size: number) {
  if (size < 1000000) {
    const sizeVal = size / 1000;
    return `${sizeVal.toFixed(2)} Kb`;
  } else if (size < 1000000000) {
    const sizeValMB = size / 1000000;
    return `${sizeValMB.toFixed(2)} Mb`;
  } else {
    const sizeValGB = size / 1000000000;
    return `${sizeValGB.toFixed(2)} GB`;
  }
}
