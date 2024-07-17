document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("portfolioModal");
    var modalTitle = document.getElementById("modalTitle");
    var modalDescription = document.getElementById("modalDescription");
    var modalDemoLink = document.getElementById("modalDemoLink");
    var modalGithubLink = document.getElementById("modalGithubLink");
    var modalPaperLink = document.getElementById("modalPaperLink");
    var modalWebsiteLink = document.getElementById("modalWebsiteLink");
    var modalBadges = document.getElementById("modalBadges"); // Badge container
    var carouselImages = document.getElementById("carouselImages"); // Carousel container
    var span = document.getElementsByClassName("close")[0];

    document.querySelectorAll('.portfolio-item').forEach(item => {
        item.addEventListener('click', function() {
            var title = this.getAttribute('data-title');
            var description = this.getAttribute('data-description');
            var demoLink = this.getAttribute('data-demo');
            var githubLink = this.getAttribute('data-github');
            var paperLink = this.getAttribute('data-paper');
            var websiteLink = this.getAttribute('data-website');
            var languages = this.getAttribute('data-languages'); // Assuming languages are stored in a data attribute
            var carouselData = this.getAttribute('data-carousel'); // Get carousel data

            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Clear previous badges
            modalBadges.innerHTML = '';
            if (languages) {
                languages.split(',').forEach(language => {
                    var badge = document.createElement('span');
                    badge.className = 'badge rounded-pill text-bg-dark me-2'; // Bootstrap pill badge
                    badge.textContent = language.trim();
                    modalBadges.appendChild(badge);
                });
            }

            // Conditionally display Demo button
            if (demoLink) {
                modalDemoLink.setAttribute('href', demoLink);
                modalDemoLink.style.display = 'inline-block';
            } else {
                modalDemoLink.style.display = 'none';
            }

            // Conditionally display GitHub button
            if (githubLink) {
                modalGithubLink.setAttribute('href', githubLink);
                modalGithubLink.style.display = 'inline-block';
            } else {
                modalGithubLink.style.display = 'none';
            }

            // Conditionally display Paper button
            if (paperLink) {
                modalPaperLink.setAttribute('href', paperLink);
                modalPaperLink.style.display = 'inline-block';
            } else {
                modalPaperLink.style.display = 'none';
            }

            // Conditionally display Website button
            if (websiteLink) {
                modalWebsiteLink.setAttribute('href', websiteLink);
                modalWebsiteLink.style.display = 'inline-block';
            } else {
                modalWebsiteLink.style.display = 'none';
            }

            // Clear previous carousel images
            carouselImages.innerHTML = '';

            // Add images from the data-carousel attribute to the carousel
            if (carouselData) {
                var images = carouselData.split(',');
                images.forEach((imageSrc, index) => {
                    var carouselItem = document.createElement('div');
                    carouselItem.className = 'carousel-item';
                    if (index === 0) {
                        carouselItem.classList.add('active'); // Set the first item as active
                    }
                    var imgElement = document.createElement('img');
                    imgElement.className = 'd-block w-100';
                    imgElement.src = imageSrc.trim();
                    carouselItem.appendChild(imgElement);
                    carouselImages.appendChild(carouselItem);
                });
            }

            modal.style.display = "block";
        });
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
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

