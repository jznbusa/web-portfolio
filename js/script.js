document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("portfolioModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");
    var carouselIndicators = document.getElementById("carouselIndicators");
    var carouselInner = document.getElementById("carouselInner");

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var description = this.getAttribute('data-description');
            var images = this.getAttribute('data-images').split(',');

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Clear previous carousel items
            carouselIndicators.innerHTML = '';
            carouselInner.innerHTML = '';

            // Add new carousel items
            images.forEach((image, index) => {
                var indicator = document.createElement('li');
                indicator.setAttribute('data-target', '#carouselExampleIndicators');
                indicator.setAttribute('data-slide-to', index);
                if (index === 0) indicator.classList.add('active');
                carouselIndicators.appendChild(indicator);

                var carouselItem = document.createElement('div');
                carouselItem.classList.add('carousel-item');
                if (index === 0) carouselItem.classList.add('active');
                var img = document.createElement('img');
                img.classList.add('d-block', 'w-100');
                img.src = image;
                carouselItem.appendChild(img);
                carouselInner.appendChild(carouselItem);
            });

            $('#portfolioModal').modal('show');
        });
    });

    document.querySelector('.close').addEventListener('click', function() {
        $('#portfolioModal').modal('hide');
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            $('#portfolioModal').modal('hide');
        }
    });
});



// Code for expertise tab

const tabs = document.querySelector(".expertise-nav");
const tabButton = document.querySelectorAll(".expertise-link");
const contents = document.querySelectorAll(".expertise-tab");

tabs.onclick = e =>{
    e.preventDefault();
    const id = e.target.dataset.id;
    if(id){
        tabButton.forEach(btn =>{
            btn.classList.remove("active");
        });
        e.target.classList.add('active');
        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}

// slider for services

var swiper = new Swiper(".service-swiper",{
    slidesPerView : 3,
    spaceBetween : 35,
    navigation:{
        nextEl : ".swiper-button-next",
        prevEl : ".swiper-button-prev",
    },
    breakpoints : {
        //when window width is >= 320
        320:{
            slidesPerView: 1,
        },
        //when width >= 640px
        640:{
            slidesPerView:3,
            spaceBetween:35
        }
    }
});

/*
//portfolio-filter

const filterContainer = document.querySelector(".portfolio-filter"),
galleryItems = document.querySelectorAll(".portfolio-item");

filterContainer.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.classList.contains("portfolio-nav-link")){
        filterContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const filterValue = e.target.getAttribute("data-id");
        galleryItems.forEach((item)=>{
            if(item.classList.contains(filterValue) || filterValue === "all"){
                item.classList.remove("hide");
                item.classList.add("show");
            } else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
})*/

// js for fixed header

function stickyElement(e){
    var header = document.querySelector("#slide-carousel");
    var headerHeight = getComputedStyle(header).height.split('px')[0];
    headerHeight = headerHeight/2;
    var navbar = document.querySelector(".header-fixed");
    var scrollValue = window.scrollY;
    if (scrollValue > headerHeight){
        navbar.classList.add('header-sticky');
    } else{
        navbar.classList.remove("header-sticky");
    }
}

window.addEventListener('scroll',stickyElement);


// Theme switch

function isLight(){
    return localStorage.getItem("light-theme");
}

function toggleRootClass(){
    document.querySelector(":root").classList.toggle("light");
}

function toggleLocalStorageItem(){
    if(isLight()){
        localStorage.removeItem("light-theme");
    } else{
        localStorage.setItem("light-theme","set");
    }
}

if (isLight()){
    toggleRootClass();
}

document.querySelector(".theme-toggle").addEventListener("click",() => {
        toggleLocalStorageItem();
        toggleRootClass();
});


// Responsive navbar toggle

const hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",function(){
    document.querySelector(".portfolio-navbar").classList.toggle("show");
});

