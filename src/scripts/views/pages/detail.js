import UrlParser from '../../routes/url-parser';
import RestoDBSource from '../../data/resto-source';
import { createHeroTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
     return `
      <div id="resto" class="resto"> </div>
    `;
  },
 
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoDBSource.detailResto(url.id);

    console.log(detailResto);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML +=  createHeroTemplate(detailResto);
  },
};
 
export default Detail;