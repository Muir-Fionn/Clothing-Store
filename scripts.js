document.onreadystatechange = () => {
 if (document.readyState === 'complete') {
   slideshow.buildSlider();
   setInterval(slideshow.changeSlide, 3000);
 }
};

var slideshow = {
  slides: document.querySelectorAll('.slide'),
  radios: document.querySelector('.radios'),
  index: 0,
  total: 0,

  showSlide: function(slideNum) {
    var btns = this.radios.children;
    this.slides[this.index].classList.remove('active');
    this.slides[slideNum].classList.add('active');

    btns[slideNum].classList.add('selected');
    btns[this.index].classList.remove('selected');

    this.index = slideNum;
  },

  changeSlide: function() {
    if(slideshow.index == slideshow.total - 1){
      slideshow.showSlide(0)
    }else {
      slideshow.showSlide(slideshow.index + 1)
    }
  },

  buildSlider: function() {
    this.total = this.slides.length;
    for(var i=0; i < this.total; i++) {
      var radio = document.createElement('div');
      radio.classList.add('radio');
      if(i==0) {radio.classList.add('selected')};
      this.radios.appendChild(radio);
    }

    this.addRadioClickEvents(this.radios.children);
  },

  addRadioClickEvents: function(btns) {
    for(var i=0; i < btns.length; i++){
      btns[i].addEventListener('click', function(){
        var index = Array.prototype.indexOf.call(btns, this);
        slideshow.showSlide(index);
      });
    }
  }
}
