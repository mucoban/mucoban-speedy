<template>
    <div class="header">
        <div class="up-line">
            <div class="container-fluid">
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
                        <a class="contact-btn">+123 45677 789</a>
                        <a class="contact-btn">wanderland@qodeinteractive.com</a>
                    </div>
                </div>
            </div>
        </div>    

        <div class="middle-line">
            <div class="navs">
                <NuxtLink to="/">Home page</NuxtLink>
                <NuxtLink to="/product">Product page</NuxtLink>
                <NuxtLink to="/about">About page</NuxtLink>
            </div>
        </div>           
    </div>
</template>

<style lang="scss">
    .header {
        position: absolute;
        z-index: 100;
        width: 100%;
        padding: 0 30px;

        .up-line {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid white;
            border-bottom-width: 1px;
            padding: 10px 10px;
            font-weight: 300;
            font-size: 14px;
            font-style: italic;

            .socials {
                .text { 
                    color: #fff; 
                }

                .slink {
                    color: #fff; 
                }
            }
        }

        .middle-line {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0px solid white;
            border-bottom-width: 1px;
            padding: 30px 10px;
        }

        .navs {
            a {
                color: white; 
                padding: 20px;
                text-transform: uppercase;
                font-weight: 500;
            }
        }

    }

    .contact-btn {
        color: white;
        cursor: pointer;
        margin-left: 10px;
    }
</style>