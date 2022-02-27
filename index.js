const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function selectItem(e) {
	// Remove all show and border classes
	removeBorder();
	removeShow();
	// Add border to current tab item
	this.classList.add('tab-border');
	// Grab content item from DOM
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	// Add show class
	tabContentItem.classList.add('show');
}

// Remove bottom borders from all tab items
function removeBorder() {
	tabItems.forEach(item => {
		item.classList.remove('tab-border');
    });
}

// Remove show class from all content items
function removeShow() {
	tabContentItems.forEach(item => {
		item.classList.remove('show');
	});
}

// Listen for tab item click
tabItems.forEach(item => {
	item.addEventListener('click', selectItem);
});

//slider

// create an array of image sources;
// create an array of image sources;
let images = [
    'image1.jpg', 'image2.jpg', 'image3.jpg','image4.jpg','image5.jpg', 'image6.jpg', 'image7.jpg','image8.jpg','image9.jpg'
]
let i = 0;

//add initial image to canvas
let canvas = document.getElementById('canvas');
canvas.style.background = `url(./images/${images[0]})`

//add eventListeners to arrows
let arrows = document.querySelectorAll('.arrow');

arrows.forEach(function(arrow){
    arrow.addEventListener('click', function(e){
                if (e.target.id === "left"){
            //check to see if at beginning of array
            i--;
            if (i < 0){
                i = images.length -1;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        } else if (e.target.id === "right") {
            i++;
            if (i >= images.length ){
                i = 0;
            }
            canvas.style.background = `url(./images/${images[i]})`;
        }
    })
});
    
