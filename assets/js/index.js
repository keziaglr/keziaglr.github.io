import { data } from './data.js'

function setPortfolio(){
    let portfolioContainer = document.getElementById("portfolio-container")
    for (const item of data) {
        const portfolioItem = document.createElement("div");
        if (item.type == "Mobile") {
            portfolioItem.className = "col-lg-4 col-md-6 portfolio-item filter-mobile";
        }else if (item.type == "Web") {
            portfolioItem.className = "col-lg-4 col-md-6 portfolio-item filter-web";
        }else if (item.type == "Game") {
            portfolioItem.className = "col-lg-4 col-md-6 portfolio-item filter-game";
        }else if (item.type == "Desktop") {
            portfolioItem.className = "col-lg-4 col-md-6 portfolio-item filter-desktop";
        }
      
        portfolioItem.innerHTML = `
          <div class="portfolio-wrap">
            <img src="${item.cover}" class="img-fluid" alt="">
            <div class="portfolio-info">
              <h4>${item.name}</h4>
              <p>${item.type}</p>
              <ul class="tech-btn">
                ${item.tech.map(t => `<li class="badge btn-small">${t}</li>`).join('')}
              </ul>
              <div class="portfolio-links">
                <a href="${item.cover}" data-gallery="portfolioGallery" class="portfolio-lightbox" title="${item.name}"><i class="bx bx-expand-alt"></i></a>
                <a href="portfolio-details.html?id=${encodeURIComponent(item.id)}" data-gallery="portfolioDetailsGallery" data-glightbox="type: external" class="portfolio-details-lightbox" title="Portfolio Details"><i class="bx bx-link"></i></a>
              </div>
            </div>
          </div>
        `;
      
        portfolioContainer.appendChild(portfolioItem);
      }

      window.addEventListener('load', () => {
        let portfolioContainer = select('.portfolio-container');
        if (portfolioContainer) {
          let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
          });
    
          let portfolioFilters = select('#portfolio-flters li', true);
    
          on('click', '#portfolio-flters li', function(e) {
            e.preventDefault();
            portfolioFilters.forEach(function(el) {
              el.classList.remove('filter-active');
            });
            this.classList.add('filter-active');
    
            portfolioIsotope.arrange({
              filter: this.getAttribute('data-filter')
            });
          }, true);
        }
    
      });
    
      /**
       * Initiate portfolio lightbox 
       */
      const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
      });
    
      /**
       * Initiate portfolio details lightbox 
       */
      const portfolioDetailsLightbox = GLightbox({
        selector: '.portfolio-details-lightbox',
        width: '90%',
        height: '90vh'
      });
    
      /**
       * Portfolio details slider
       */
      new Swiper('.portfolio-details-slider', {
        speed: 400,
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      });
    
      /**
       * Initiate Pure Counter 
       */
      new PureCounter();
}

setPortfolio()