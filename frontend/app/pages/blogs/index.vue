<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="medium-hl">BLOG</div>
            </div>
            <div v-for="num in [0,1,2,3,4]" class="col-4">
                <div class="main-holder">
                    <div class="image-holder">
                        <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg" />
                    </div>
                    <div class="info-box">
                        <div class="detail-line">
                            <span><i class="bi bi-calendar"></i>01.01.1990</span>
                            <span><i class="bi bi-pencil"></i>Charles Mars</span>
                        </div>
                        <div class="medium-hl-2">abc</div>
                        <div class="desc">
                            abc2
                            abc2
                            abc2
                        </div>
                        <div  class="btn-holder">
                            <a class="btn"
                                :href="'/blogs/abc-abc'">More <i class="bi bi-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .medium-hl {
        margin: 50px 0;
    }

    .main-holder {
        margin-bottom: 60px;
    }

    .btn {
        padding: 6px 0px;

        &:hover {
            color: green;
        }
    }
</style>