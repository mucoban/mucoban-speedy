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
                    hl1: 'LOREM IPSUM DOLOR SIT AMET', 
                    hl2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
                    btn: { text: 'READ MORE', color: 'white', link: './about' },
                    image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg' 
                },
                { hl1: 'slide 2', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide2-bckg.jpg'},
                { hl1: 'slide 3', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide3-bckg.jpg'},
            ]"
            />
    </div>
    <div class="main-swiper-bottom-effect">
        <img src="/img/ms-bottom-effect.png" />
    </div>
    <div class="homep-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center p-5">   
                    <div class="small-hl">Lorem ipsum dolor</div>
                    <div class="medium-hl">TRAVEL ESSENTIALS TIPS</div>
                </div>
                <div class="col-6  py-5">
                    <div class="text-box">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl-2">TRAVEL ESSENTIALS TIPS</div>
                        <p class="desc">
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
                    <div class="text-box">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl-2">TRAVEL ESSENTIALS TIPS</div>
                        <p class="desc">
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

    <div class="homep-section fragmented">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png" />
                </div>
                <div class="col-6 py-5">
                    <div class="text-box">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl-2">TRAVEL ESSENTIALS TIPS</div>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        </p>
                        <div class="fast-contact-box">
                            <div class="line-a">
                                <input placeholder="Name" />
                                <div class="gap-bettwen"></div>
                                <input placeholder="E-mail" />
                            </div>
                            <div class="line-b">
                                <textarea placeholder="Message"></textarea>
                                <div class="gap-bettwen"></div>
                                <button class="btn btn-primary cus">
                                    Send
                                    <i class="bi bi-arrow-up-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

</template>

<style lang="scss">

    .homep-section {
        margin: 30px 0;

        &.fragmented {
            background-image: url(/img/fragmented-bg.jpg) !important;
            padding: 100px 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }

    .small-hl {
        font-family: "Crimson Text", serif;
        color: #aaa;
        font-style: italic;
        font-size: 21px;
    }

    .medium-hl {
        color: #222;
        font-size: 50px;
        font-weight: 500;
    }
   
    .medium-hl-2 {
        color: #222;
        font-size: 30px;
        font-weight: 500;
    }

    .desc {
        color: #666;
        font-weight: 300;
        max-width: 400px;
        font-family: Muli,sans-serif;
    }

    .text-box {
        padding: 0 50px;
    }

    .main-swiper-section {
        height: calc(100vh - 0px);
    }

    .main-swiper-bottom-effect {
        margin-top: -100px;
        position: relative;
        z-index: 1;
    }

    .fast-contact-box {
        .line-a {
            display: flex;
            margin-bottom: 10px;
            input { flex-grow: 1; }
        }
        .line-b {
            display: flex;
            textarea { flex-grow: 1; }
        }
        .gap-bettwen {
            display: inline-block;
            width: 20px;
        }
    }

</style>