// create slider container
function create_slide(img_src, img_alt){
    /* block
    <div class="slide-viewing">
        <div class="slider-content">
            <div class="slider-img">
                <img src="images/photo_2023-10-25_05-48-32.jpg" alt="" />
            </div>
        </div>
    </div>
    */
    let slider_block = document.querySelector('.slider');
    let block = document.createElement('div');
    let block_content = document.createElement('div');
    let block_img = document.createElement('div');
    let img = document.createElement('img');

    block_content.className = 'slider-content';
    block_img.className = 'slider-img';
    block.className = 'slide-viewing'
    img.src = img_src;
    img.alt = img_alt;

    block_img.append(img);
    block_content.append(block_img);
    block.append(block_content);
    slider_block.append(block);
}

create_slide("images/photo_2023-10-25_05-48-32.jpg", "annoucment");
create_slide("images/photo_2023-10-26_10-42-07.jpg", "annoucment");
create_slide("images/photo_2023-10-24_12-58-08.jpg", "annoucment");
create_slide("images/photo_2023-10-26_10-43-34.jpg", "annoucment");
create_slide("images/photo_2023-10-26_10-43-40.jpg", "annoucment");

// slider
let slider = document.querySelector('.slider');
let prevButton = document.querySelector('.prev-button');
let nextButton = document.querySelector('.next-button');
let slides = Array.from(slider.querySelectorAll('.slide-viewing'));
let slideCount = slides.length;
let slideIndex = 0;

// set events
nextButton.addEventListener('click', showNextSlide);;
prevButton.addEventListener('click', showPreviousSlide);

//func events
function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}
function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

//update content
function updateSlider() {
    slides.forEach((slide, index) => {
        slide.id="slide-"+index;
        if (index === slideIndex) {
            slide.style.display = 'block';
        } 
        else {
            slide.style.display = 'none';
        }
    });
}

//slider init
updateSlider();

    