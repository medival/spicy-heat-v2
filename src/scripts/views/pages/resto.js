const Resto = {
  async render() {
    return `
     <section class="hero">
      <h1 class="hero__title"> Welcome <br> to Spicy Heat </h1>
        <img class="hero__image" src="images/heros/hero-image_2.jpg" alt="Hero Image">
      <a href="#main" class="hero__cta"> DISCOVER </a>
     </section>

     <section class="resto" id="main">
      <div class="resto__container">
        <h2 class="resto__label"> Explore Restaurant & Explore Food </h2>
      </div>
     </section>
    `;
  },
 
  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};
 
export default Resto;