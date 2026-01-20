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
                    image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg' }
                },
                { hl1: 'slide 2', 
                    image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide2-bckg.jpg' } 
                },
                { hl1: 'slide 3', 
                    image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide3-bckg.jpg' } 
                },
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
                <div class="col-12 col-md-6 py-5">
                    <div class="text-box">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl-2">TRAVEL ESSENTIALS TIPS</div>
                        <p class="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididu nt ut labore et dolore magna aliqua. Ut enim. ad minim veniam 
                        </p>
                    </div>
                </div>
                <div class="col-12 col-md-6 pb-5">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg" />
                </div>
                <div class="col-12 col-md-6">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-01.jpg" />
                </div>
                <div class="col-12 col-md-6 py-5">
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
                            slidesPerView: 2,
                            spaceBetween: 20,
                            autoplay: {
                                delay: 2500,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true
                            },
                            breakpoints: {
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                                768: {
                                    slidesPerView: 7,
                                    spaceBetween: 30
                                }
                            }
                        }"
                        :slides="[
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-01-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                            { image: { url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/h1-clients-img-02-hover.png' } },
                        ]"
                        />
                </div>
            </div>
            
        </div>
    </div>

    <div class="homep-section fragmented">
        <div class="container">
            <div class="row">
                <div class="ccol-12 col-md-6">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/h1-img-01.png" />
                </div>
                <div class="col-12 col-md-6 py-5">
                    <div class="text-box">
                        <div class="small-hl ">Lorem ipsum dolor</div>
                        <div class="medium-hl-3">TRAVEL ESSENTIALS TIPS</div>
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
                                <textarea placeholder="Message" rows="3"></textarea>
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

    <div class="homep-section icons">
        <div class="container">
            <div class="row">
                <div class="col-6 col-md-3">
                    <div class="icon-box">
                        <div class="icon-holder">
                            <i class="bi bi-airplane-engines-fill"></i>
                        </div>
                        <div class="hl">Çok hızlı</div>
                        <div class="hl-2">Anında açılır</div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="icon-box">
                        <div class="icon-holder">
                            <i class="bi bi-arrows-angle-contract"></i>
                        </div>
                        <div class="hl">Çok hızlı</div>
                        <div class="hl-2">Anında açılır</div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="icon-box">
                        <div class="icon-holder">
                            <i class="bi bi-aspect-ratio"></i>
                        </div>
                        <div class="hl">Çok hızlı</div>
                        <div class="hl-2">Anında açılır</div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div class="icon-box">
                        <div class="icon-holder">
                            <i class="bi bi-award"></i>
                        </div>
                        <div class="hl">Çok hızlı</div>
                        <div class="hl-2">Anında açılır</div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    <div class="homep-section">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center p-5">   
                    <div class="small-hl">Lorem ipsum dolor</div>
                    <div class="medium-hl">FEATURED POSTS</div>
                </div>
                <div class="col-12  py-5">
                    <SwiperHolder
                        :params="{ 
                            speed: 1000,
                            loop: true,
                            slidesPerView: 2,
                            spaceBetween: 30,
                            customNavigation: true,
                            elementMode: 'info-below',
                            breakpoints: {
                                576: {
                                    slidesPerView: 3
                                }
                            },
                            // autoplay: {
                            //     delay: 2500,
                            //     disableOnInteraction: false,
                            //     pauseOnMouseEnter: true
                            // }
                        }"
                        :slides="[
                            { 
                                image: {
                                    mode: 'element',
                                    url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg'
                                },
                                hl1: 'LOREM IPSUM DOLOR SIT AMET', 
                                hl2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                                date: '25.03.2020',
                                author: 'Alisa Michaels'
                            },
                            { 
                                image: {
                                    mode: 'element',
                                    url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg'
                                },
                                hl1: 'LOREM IPSUM DOLOR SIT AMET', 
                                hl2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                                date: '25.03.2020',
                                author: 'Alisa Michaels'
                            
                            },
                            { 
                                image: {
                                    mode: 'element',
                                    url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg'
                                },
                                hl1: 'LOREM IPSUM DOLOR SIT AMET', 
                                hl2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                                date: '25.03.2020',
                                author: 'Alisa Michaels'
                            
                            },
                            { 
                                image: {
                                    mode: 'element',
                                    url: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg'
                                }
                            }
                        ]"
                    />
                </div> 
            </div>
        </div>
    </div>


</template>

<style lang="scss" scoped>

    @import "/assets/css/_variables";


    .homep-section {
        margin: 30px 0;

        &.fragmented {
            background-image: url(/img/fragmented-bg.jpg) !important;
            padding: 100px 0;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }

        &.icons {
            margin: 100px 0;
        }
    }

    .text-box {
        padding: 0 50px;

        @include responsive('large') {
            padding: 0 20px;
        }
    }

    .main-swiper-section {
        height: calc(100vh - 0px);
    }

    .main-swiper-bottom-effect {
        margin-top: -100px;
        position: relative;
        z-index: 1;

        @include responsive('large') {
            display: none;
        }
    }

    .fast-contact-box {
        .line-a {
            display: flex;
            margin-bottom: 10px;
            
            @include responsive('medium') {
               flex-wrap: wrap;
            }

            input { 
                flex-grow: 1;
                
                @include responsive('medium') {
                   &:first-child {
                        margin-bottom: 10px;
                   }
                }
            }
        }
        .line-b {
            display: flex;
            align-items: flex-end;
            
            @include responsive('medium') {
                flex-wrap: wrap;
                justify-content: end;
            }

            textarea { 
                flex-grow: 1;

                @include responsive('medium') {
                    width: 100%;
                    margin-bottom: 10px;
                }
            }
        }
        .gap-bettwen {
            display: inline-block;
            width: 20px;
            flex-shrink: 0;

            @include responsive('medium') {
                display: none;
            }
        }
    }

    .icon-box {
        text-align: center;

        .icon-holder {
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;

            &:hover {
                i {
                    color: #59815c;
                    transform: scale(1.18);
                }
            }
        }

        i {
            font-size: 70px;
            color: #666;
            transition: all 0.3s;
        }

        .hl {
            font-size: 14px;
            font-weight: 300px;
            font-family: Muli, sans-serif;
            color: #555;
        }

        .hl-2 {
            font-family: "Crimson Text", serif;
            color: #aaa;
            font-style: italic;
            font-size: 21px;
        }
    }

</style>