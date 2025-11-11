<template>
    <div class="main-swiper-section">
        <SwiperHolder
            :slides="[
                { title: 'slide 1', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide1-bckg.jpg' },
                { title: 'slide 2', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide2-bckg.jpg'},
                { title: 'slide 3', image: 'https://wanderland.qodeinteractive.com/wp-content/uploads/2019/11/h1-rev-slide3-bckg.jpg'},
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
        height: calc(100vh - 64px);
    }

</style>