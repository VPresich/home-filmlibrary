class SliderInterface {
    static touchThreshold = 75;
    #sliderRef;   
    constructor(
      sliderRef,
      elementsList,
      prevBtn,
      nextBtn,
      sliderContent,
      sliderDots
    ) {
      this.#sliderRef = sliderRef;
      this.elementsList = elementsList;
      this.prevBtn = prevBtn;
      this.nextBtn = nextBtn;
      this.sliderContent = sliderContent;
      (this.sliderDots = sliderDots),        
      this.initBtnsFunction();
      this.initTouchFunction();
      this.createDots();
      this.update();
    }
  
    initBtnsFunction() {
      this.prevBtn.addEventListener("click", () => {
        this.#sliderRef.onPrevSlide();
        this.update();
      });
  
      this.nextBtn.addEventListener("click", () => {
        this.#sliderRef.onNextSlide();
        this.update();
      });
    }
  
    initTouchFunction() {
      let startX = 0;
  
      this.sliderContent.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
      });
  
      this.sliderContent.addEventListener("touchmove", (event) => {
        const currentX = event.touches[0].clientX;
        const deltaX = startX - currentX;
  
        if (deltaX > SliderInterface.touchThreshold) {
          this.#sliderRef.onNextSlide();
          startX = currentX;
          this.update();
        } else if (deltaX < -SliderInterface.touchThreshold) {
          this.#sliderRef.onPrevSlide();
          startX = currentX;
          this.update();
        }
      });
    }
  
    createDots() {
      this.sliderDots.innerHTML = ""; 
      for (let ind = 0; ind < this.elementsList.length; ind += 1) {
        const dot = document.createElement("div");
        dot.className = "slider-dot";
        dot.addEventListener("click", () => {
          this.#sliderRef.goToSlide(ind);
          this.update();
        });
        this.sliderDots.appendChild(dot);
      }
    }
  
    update() {  
    //   this.updateContent();
      this.updateButtons();
      this.updateDisplayDots();
    } 

    updateContent() {   
        const slideNumber = this.#sliderRef.currentSlide;
        const imgRef = this.elementsList[slideNumber].querySelector('.gallery-img');
        
        this.sliderContent.src = imgRef.dataset.source;        
        this.sliderContent.alt = imgRef.alt;
    }
  
    updateButtons() {   
      this.prevBtn.disabled = this.#sliderRef.isExistPrev();
      this.nextBtn.disabled = this.#sliderRef.isExistNext();
    }
  
    updateDisplayDots() {   
      const children = this.sliderDots.children;
      for (let i = 0; i < children.length; i += 1) {
        if (i === this.#sliderRef.currentSlide) {
          children[i].classList.add("active-dot");
        } else {
          children[i].classList.remove("active-dot");
        }
      }
    }
  }
  
  export default SliderInterface;
  