<template>
    <div class="main-swiper-section">
        <SwiperHolder
            :params="{ 
                speed: 1000,
                loop: true,
                pagination: { clickable: true },
                customNavigation: true
             }"
            :slides="[
                { 
                    hl1: 'slide 1', 
                    hl2:'Slide 2', 
                    btn: { text: 'About', bgColor: 'green', color: 'white', link: './about' },
                    image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg' 
                },
                { hl1: 'slide 2', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide2-bckg.jpg'},
                { hl1: 'slide 3', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide3-bckg.jpg'},
            ]"
            />
    </div>
    <div class="homep-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center p-5">   
                    <div class="small-hl">Lorem ipsum dolor</div>
                    <div class="medium-hl">Travel essentials tips</div>
                </div>
                <div class="col-6  py-5">
                    <div class="">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl">Travel essentials tips</div>
                        <p class="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        </p>
                    </div>
                </div>
                <div class="col-6">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg" />
                </div>
                <div class="col-6">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg" />
                </div>
                <div class="col-6 py-5">
                    <div class="">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl">Travel essentials tips</div>
                        <p class="">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    <div class="homep-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center p-5">   
                    <div class="small-hl">Brands</div>
                </div>
                <div class="col-12">
                    <SwiperHolder
                        :params="{ 
                            speed: 1000,
                            loop: true,
                            slidesPerView: 7,
                            spaceBetween: 30,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            }
                        }"
                        :slides="[
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-01-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                            { image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png'},
                        ]"
                        />
                </div>
            </div>
            
        </div>
    </div>

</template>

<style lang="scss">

    .homep-section {
        margin: 30px 0;
    }

    .small-hl {
        color: #aaa;
        font-size: 20px;
    }

    .medium-hl {
        color: #000;
        font-size: 35px;
    }

    .main-swiper-section {
        height: calc(100vh - 0px);
    }

</style>