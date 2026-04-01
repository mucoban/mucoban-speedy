<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="medium-hl">BLOG</div>
            </div>
            <div v-for="num in [0,1,2,3,4]" class="col-6 col-md-4">
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

<script setup lang="ts">
const config = useRuntimeConfig();

const { data: fetchedSeoData } = await useFetch(`${config.public.api}seo-data`);

const seoData = (fetchedSeoData as any)?.value?.find((d: any) => d.page_name === 'general')?.data?.en;

const seoMeta: any = {};

if (seoData) {
    if (seoData.title) {
        seoMeta.title = seoData.title;
        seoMeta.ogTitle = seoData.title;
    }
    
    if (seoData.description) {
        seoMeta.description = seoData.description;
        seoMeta.ogDescription = seoData.description;
    }

    if (seoData.image) {
        seoMeta.ogImage = seoData.image;
        seoMeta.twitterCard = 'summary_large_image';
    }
}

useSeoMeta(seoMeta);

</script>