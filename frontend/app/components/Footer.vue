<template>
    <div class="footer">
        <div class="up-line">
            <div class="container">
                <div class="row">
                    <div class="col-3">
                        <a href="./" class="bottom-logo">
                            <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2019/12/logo-footer.png" alt="">
                        </a>
                        <div class="bottom-list">
                            <div class="hl">About the blog</div>
                            <div class="text">Lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eiusmod mas.</div>
                        </div>
                    </div>
                    <div class="col-9 mb-4">
                        <p class="remark">
                            Based in Utah, USA, Wanderland is a blog by Markus Thompson. His posts
                            explore outdoor experiences through photos and diaries with tips & tricks.
                        </p>
                        <div class="bottom-lists">
                            <div class="bottom-list" v-for="value in [0,1,2,3]">
                                <div class="hl">List A</div>
                                <div class="items">
                                    <div class="item"><a href="./">Item 1 abcabcabcabc</a></div>
                                    <div class="item"><a href="./">Item 2</a></div>
                                    <div class="item"><a href="./">Item 3</a></div>
                                    <div class="item"><a href="./">Item 4</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
        </div>
        <div class="bottom-line">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="socials">
                            <span class="text">
                                Socials
                            </span>
                            <span class="slinks">
                                <a href="./" class="slink">f</a>
                                <a href="./" class="slink">i</a>
                                <a href="./" class="slink">t</a>
                                <a href="./" class="slink">y</a>
                            </span>
                        </div>
                    </div>
                    <div class="col text-end">
                        All Rights Reserved
                    </div>
                </div>          
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .footer {
        background-color: rgb(59, 59, 59);
        color: white;

        p { color: white; }

        .up-line {
            padding: 50px;
        }

        .bottom-line {
            background-color: black;
            color: #ddd;
            display: flex; 
            justify-content: space-between;
            padding: 20px;
        }

        .bottom-logo {
            display: inline-block;
            margin-bottom: 20px;

            img {
                max-width: 144px;
            }
        }

        .bottom-lists {
            display: flex;
            justify-content: space-between;
        }

        .bottom-list {
            .hl {
                font-size: 20px;
                font-weight: bold;
                text-transform: uppercase;
                margin-bottom: 20px;
            }

            .text { color: #aaa; }

            .items {}

            .item {
                color: white;
                a {
                    color: #ccc;
                    text-decoration: none;
                }
            }
        }


        .remark {
            font-style: italic;
            color: #aaa; 
            margin-bottom: 46px;
        }
    }
</style>