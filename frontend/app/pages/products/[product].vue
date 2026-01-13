<template>
    <div class="main-holder">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="medium-hl">PRODUCT A</div>
                    <div class="desc">
                        <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/10/blog-post-img-04.jpg" />
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @import "/assets/css/_variables";

    .main-holder {
        margin-bottom: 50px;
    }

    .medium-hl {
        margin: 50px 0;
    }

    .desc {
        max-width: unset;

        img {
            max-width: 100%;
            width: 500px;
            float: right;
            margin-left: 20px;

            @include responsive('medium') {
                margin-left: 0px;
                margin-bottom: 15px;
            }
        }
    }
</style>