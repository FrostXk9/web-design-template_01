const navbar = document.getElementById("headerO");
const mainSec = document.getElementById("mainSec");
const card = document.getElementById("card");
const foot = document.getElementById("foot");
const chatBox = document.getElementById("boxChat");
const contentBox = document.getElementById("upperbox");
const floatingSec = document.getElementById("floatSec");

const imgUrl = {
    img1: 'https://www.pockettactics.com/wp-content/sites/pockettactics/2023/09/apple-event-5-550x309.jpg',
};

window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Delay for 5 seconds (5000 milliseconds)
    setTimeout(function () {
      // Hide the loader after 5 seconds
      loader.style.display = "none";

      // Display the content after 5 seconds
      content.style.display = "block";
    }, 3000); 
});


// window.addEventListener('scroll', function() {
//     const topSection = document.getElementById('mainSec');
//     const content = document.getElementById('content');
//     const topSectionHeight = topSection.offsetHeight;
//     const contentTop = content.getBoundingClientRect().top;

//     // Calculate the opacity based on the scroll position
//     let opacity = 2 - (contentTop / topSectionHeight);
//     opacity = Math.min(1, Math.max(0, opacity)); // Ensure opacity value is between 0 and 1

//     topSection.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
// });

const renderNav = () => {
    navbar.innerHTML = `
        <nav class="navbar navbar-expand-lg" id="navbar">

            <div class="container-fluid">

                <a class="navbar-brand text-white fw-bold fs-4 border-bottom" href="#">Template Co.</a>

                <button class="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon"></span>

                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                        <li class="nav-item">

                            <a class="nav-link active text-white" aria-current="page" href="#">Home</a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link text-white" href="#">About</a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link text-white" href="#">Contact</a>

                        </li>

                        <li class="nav-item">

                            <a class="nav-link text-white" href="#">Our Store</a>

                        </li>

                        <li class="nav-item dropdown">

                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                             More

                            </a>

                            <ul class="dropdown-menu">

                                <li>
                                    <a class="dropdown-item text-black" href="#">Action</a>
                                </li>

                                <li>
                                <a class="dropdown-item text-black" href="#">Another action</a>
                                </li>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item text-black" href="#">Something else here</a>
                                </li>

                            </ul>

                        </li>

                    </ul>

                    <form class="d-flex" role="search">

                        <input id="s-bar" class="form-control me-2 text-white" type="search" placeholder="Search" aria-label="Search">

                        <button class="btn" type="submit" id="butn">Search</button>

                    </form>
                </div>
            </div>
        </nav>
    `
}
renderNav();


const renderMain = () => {
    mainSec.innerHTML =`
        <div class="position-relative overflow-hidden p-3 text-center" id="landBd">

            <div class="col-md-6 p-lg-5 mx-auto my-5">

            <h3 class="fs-5 fw-bold text-center" id="disp">Exellence, New ideas, Solution Based .</h3>

            <h1 class="display-1 fw-bold text-white">Designed for Developers</h1>

            <h3 class="fw-normal mb-3 text-white fs-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>

            <div class="d-flex gap-3 justify-content-center lead fw-normal">

            <a href=""><button class="btn text-white fw-bold fs-4" id="buttonOne">Click me</button></a>

            <a href=""><button class="btn text-white fw-bold fs-4" id="buttonTwo">Click me</button></a>

            </div>

            </div>

            <div class="container">

                <div class="product-device d-none d-md-block" id="iconOne">
                    <div id="innerline">
                        <img src="${imgUrl.img1}" alt="" id="imgOne"/>
                    </div>
                </div>

                <div class="product-device product-device-2 d-none d-md-block" id="iconTwo">
                    <div id="innerlineTwo">
                        <div id="semiSec">
                            <span data-8><i class="fa-brands fa-apple fa-2xl" style="color: #fcfcfc;"></i></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    `
}

renderMain();

const renderX = () => {
    floatingSec.innerHTML = `
    <div class="container-fluid d-flex justify-content-evenly gap-3" id="sale">

    <div class="fs-2">

      Premium

      <br/>

      <p class="text-warning">Product collection</p>

    </div>

    <div class=" d-flex justify-content-center">

      <div class="fs-3 fw-bold mx-3">

       <span class="text-warning">4M+</span>

        <br/>

        <p class="fs-3 fw-bold">Products delivered</p>

      </div>

      <div class="fs-3 fw-bold mx-3">

      <span class="text-warning">1M+</span>

        <br/>

        <p class="fs-3 fw-bold">New Articles</p>

      </div>

      <div class="fs-3 fw-bold mx-3">

      <span class="text-warning">6.4M+</span>

        <br/> 

        <p class="fs-3 fw-bold">Happy Customers </p>

      </div>

    </div>

  </div>
    `
}
renderX();


const renderCards = () => {
    card.innerHTML = `
    <div class="d-flex justify-content-evenly mt-1 col-lg-12 col-md-12 col-sm-12 gap-sm-2 p-3" id="ogContainer"> 
        <div class="card" style="width: 18rem;" id="cardOne">
        <img src="https://cdn-thumbs.imagevenue.com/d3/d2/6e/ME17DVZ0_t.jpg" id="img" class="card-img-top border-bottom" alt="">
            <div class="text-white p-2 fs-4" id="ovTxt">New ideas <i class="fa-regular fa-lightbulb fa-sm" style="color: #ffffff;"></i></div>
            <div class="card-body">
             <p class="card-text">Here's a brief snippet to expand upon the card's title and form the main body of its content.</p>
            </div>
        </div>
        
        <div class="card" style="width: 18rem;" id="cardTwo">
            <img src="https://cdn-thumbs.imagevenue.com/ef/d3/90/ME17DW57_t.jpg" id="img" class="card-img-top border-bottom" alt="">
            <div class="text-white p-2 fs-4" id="ovTxt">Follow us <i class="fa-brands fa-tiktok fa-sm" style="color: #ffffff;"></i></div>
            <div class="card-body">
             <p class="card-text">Here's a brief snippet to expand upon the card's title and form the main body of its content.</p>
            </div>
        </div>

        <div class="card" style="width: 18rem;" id="cardThree">
            <img src="https://cdn-thumbs.imagevenue.com/ec/61/84/ME17DVZC_t.jpg" id="img" class="card-img-top border-bottom" alt="">
            <div class="text-white p-2 fs-4" id="ovTxt">New brand <i class="fa-regular fa-copyright fa-sm" style="color: #ffffff;"></i></div>
            <div class="card-body">
             <p class="card-text">Here's a brief snippet to expand upon the card's title and form the main body of its content.</p>
            </div>
        </div>
    </div>
    `
}

renderCards();


const renderFooter = () => {
    foot.innerHTML = `
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
            <div class="row">
                <div class="col-lg-3 mb-3">
                    <a class="d-inline-flex align-items-center mb-2 text-body-emphasis text-decoration-none" aria-label="Bootstrap">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"/></svg>
                        <span class="fs-5 text-white border-bottom">Template Co.</span>
                    </a>
                    <ul class="list-unstyled small">
                        <li class="mb-2 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li class="mb-2 text-white">licensed MIT, docs CC BY Temp~Co.</li>
                        <li class="mb-2 text-white">Lorem v5.3.2.</li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 offset-lg-1 mb-3">
                    <h5 class="text-white">Links</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">Home</li>
                        <li class="mb-2">Docs</li>
                        <li class="mb-2">Examples</li>
                        <li class="mb-2">Icons</li>
                        <li class="mb-2">Themes</li>
                        <li class="mb-2">Blog</li>
                        <li class="mb-2">Swag Store</li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 mb-3">
                    <h5 class="text-white">Guides</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">Getting started</li>
                        <li class="mb-2">Starter template</li>
                        <li class="mb-2">Webpack</li>
                        <li class="mb-2">Parcel</li>
                        <li class="mb-2">Vite</li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 mb-3">
                    <h5 class="text-white">Projects</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">Bootstrap 5</li>
                        <li class="mb-2">Bootstrap 4</li>
                        <li class="mb-2">Icons</li>
                        <li class="mb-2">RFS</li>
                        <li class="mb-2">Examples repo</li>
                    </ul>
                </div>

                <div class="col-6 col-lg-2 mb-3">
                    <h5 class="text-white">Community</h5>
                    <ul class="list-unstyled">
                        <li class="mb-2">Issues</li>
                        <li class="mb-2">Discussions</li>
                        <li class="mb-2">Corporate sponsors</li>
                        <li class="mb-2">Open Collective</li>
                        <li class="mb-2">Stack Overflow</li>
                    </ul>
                </div>
            </div>
        </div>

    `
}
renderFooter();

// window.addEventListener("mouseover", () => {
//     alert("hello")
// })