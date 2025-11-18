const cardsContainer = document.querySelector('.cards-container');
const cardsControlsContainer = document.querySelector('.cards-controls');
const cardsControls = ['previous', 'next'];
const cardsItems = document.querySelectorAll('.card-item');

class Carousel {
  constructor(container, items, controls){
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery(){
    this.carouselArray.forEach(el => {
      el.classList.remove('card-item1', 'card-item2', 'card-item3', 'card-item4', 'card-item5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) =>{
      el.classList.add(`card-item${i+1}`);
    });
  }

  setCurrentState(direction){
    if(direction.className === 'cards-controls-previous'){
      this.carouselArray.unshift(this.carouselArray.pop());
    } else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      const btn = document.createElement("button");
      btn.className = `cards-controls-${control}`;
      btn.innerText = control;
      cardsControlsContainer.appendChild(btn);
    });
  }

  useControls(){
    const triggers = [...cardsControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(cardsContainer, cardsItems, cardsControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
exampleCarousel.updateGallery();