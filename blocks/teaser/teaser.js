export default function decorate(block) {
  const imgElement = block.querySelector('img');

  if (imgElement) {
    const imgSrc = imgElement.src;
    block.style.backgroundImage = `url(${imgSrc})`;
  }
}
