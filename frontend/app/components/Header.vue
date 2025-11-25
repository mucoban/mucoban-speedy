<template>
    <div class="header">
        <div class="up-line">
            <div class="container-fluid">
                <div class="row">
                    <div class="col text-start">
                        <a class="contact-btn">+123 45677 789</a>
                        <a class="contact-btn">wanderland@qodeinteractive.com</a>
                    </div>
                    <div class="col text-end">
                        <div class="socials">
                            <span class="text">
                                Socials
                            </span>
                            <span class="slinks">
                                <a href="./" class="slink"><i class="bi bi-facebook"></i></a>
                                <a href="./" class="slink"><i class="bi bi-instagram"></i></a>
                                <a href="./" class="slink"><i class="bi bi-twitter"></i></a>
                                <a href="./" class="slink"><i class="bi bi-youtube"></i></a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>    

        <div class="middle-line">
            <div class="navs">

                <Navs :navs="navsA" />

                <a href="./" class="header-logo">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/logo-img-03.png" />
                </a>

                <Navs :navs="navsB" />
                
            </div>
        </div>           
    </div>
</template>

<script lang="ts" setup>

    const navs = [
        { text: 'Home', url: './', 
            subnavs: [
                { text: 'Sn Home 1', url: './about' },
                { text: 'Sn Home 2', url: './' }
            ]
        },
        { text: 'Products', url: './products' },
        { text: 'Blog', url: './products' },
        { text: 'About', url: './about' }
    ];

    const navsA = navs.slice(0, navs.length / 2);
    const navsB = navs.slice(navs.length / 2);

</script>

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
            padding: 10px 10px;
        }

    }

    .navs {
    
    }

    .nav-holder {
        display: inline-block;
        position: relative;
        padding: 0 50px;

        & > a {
                color: white !important; 
                cursor: pointer;
                text-transform: uppercase;
                font-weight: 500;
                transition: all .3s;
                padding: 5px 15px;

                &:hover {
                    background-color: #59815c;
                }
            }
    }

    .contact-btn {
        color: white;
        cursor: pointer;
        margin-left: 10px;
    }

    .header-logo {
        display: inline-block;
        width: 150px;
    }

    .sub-navs {
        position: absolute;
        top: 68px; left: 45px;
        overflow: hidden;

        &.on {
            .sub-navs-i-holder {
                transform: translate(0%, 0%);
            }
        }
    }

    .sub-navs-i-holder {
        background-color: white;
        min-width: 200px;
        transform: translate(0%, -100%);
        transition: all .3s ease-in;
    }

    .sub-nav-holder {
        a {
            padding: 10px 20px;
            white-space: nowrap;
            color: #333;
            font-weight: 300;
            font-style: italic;
            display: inline-block;
            transition: all .3s;

            &:hover {
                text-decoration: underline !important;
            }
        }
    }
    
</style>