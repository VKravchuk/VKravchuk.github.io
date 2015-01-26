function Slider (element) {
	this.element = document.getElementById(element);
	return this.init();
};
Slider.prototype = {
	init : function(){
		this.setup();
		this.controllersCreate();
		that = this;
		this.next.onclick = function(){that.scrollSlides(true)};
		this.prev.onclick = function(){that.scrollSlides(false)};
		return this.slides;
	},
	setup : function(){
		var slider = document.createElement('div');
		slider.className = 'slider';

		this.slider = document.body.insertBefore(slider, this.element);
		this.slider.appendChild(this.element);

		this.element.classList.add('slider-wrapper');
		this.slides = this.element.children;

		this.currentSlide = 0;
		for( var i = 0; i < this.slides.length; i++){
			this.slides[i].classList.add('slide');
			if(i == this.currentSlide){
				this.slides[i].style.opacity = 1;
			}
		};
	},
	controllersCreate : function(){
		var control = document.createElement('div');
		control.className = 'slider-controller';
		this.control = this.slider.appendChild(control);

		var prev = document.createElement('span');
		prev.className = 'prev';
		this.prev = this.control.appendChild(prev);

		var next = document.createElement('span');
		next.className = 'next';
		this.next = this.control.appendChild(next);

	},
	scrollSlides : function(direction){
		var slidesNumber = this.slides.length;
		if(direction){
			if(this.currentSlide <  slidesNumber - 1){
				this.currentSlide++;
			}
			else{
				this.currentSlide = slidesNumber - 1;
			};

		}
		else{
			if(this.currentSlide >  0){
				this.currentSlide--;
			}
			else{
				this.currentSlide = 0;
			}
		}
		for( var i = 0; i < slidesNumber; i++){
			if(i == this.currentSlide){
				this.slides[i].style.opacity = 1;
			}
			else{
				this.slides[i].style.opacity = 0;				
			}
		};
	}
}
window.onload = function(){
	var slider = new Slider('slider');
	console.log(slider);	
}