import { createOptimizedPicture } from '../../scripts/aem.js';

export default async function decorate(block) {
  const isJSON = block.classList.contains('articles');
  const link = block.querySelector('a'); 
  
  async function fetchJson(link) {
    const response = await fetch(link?.href);
  
    if (response.ok) {
      const jsonData = await response.json();
      const data = jsonData?.data;
      return data;
    }
    return 'an error occurred';
  }
  
  const ul = document.createElement('ul');
  const rows = [...block.children];
  if (isJSON && rows.length > 0) {
    block.removeChild(rows[0]);
  }
  
  rows.slice(isJSON ? 1 : 0).forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) {
        div.className = 'cards-card-image';
      } else if (div.children.length === 1 && div.querySelector('span')) {
        div.className = 'cards-card-icon';
      } else {
        div.className = 'cards-card-body';
      }
    });
    ul.append(li);
  });
  if (isJSON) {
    const cardData = await fetchJson(link);

    cardData.forEach((item) => {
      const picture = createOptimizedPicture(item.image, item.title, false, [{ width: 320 }]);
      picture.lastElementChild.width = '320';
      picture.lastElementChild.height = '180';

      const createdCard = document.createElement('li');

      createdCard.innerHTML = `
        <a class="cards-card-body" href=${item.url}>
          <div class="card-image">
            ${picture.outerHTML}
          </div>
          <div class="card-info">
            <div>${item.title}</div>
            <p>${item.description}</p>
          </div>
        </div>
      `;
      ul.append(createdCard);
    });
  }

  block.innerHTML = '';
  block.append(ul);
}