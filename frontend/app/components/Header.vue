<template>
    <div class="header" :class="{ 'pos-init': route.path !== '/',  'mobile-menu-on': mobileMenuOn }">
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

            <a href="./" class="header-mobil-logo">
                <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/logo-img-03.png" />
            </a>

            <div class="burger" @click="setMobileMenuOn()">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="navs">

                <div class="mm-close-btn" @click="setMobileMenuOff()">
                    <i class="bi bi-x-square-fill"></i>
                </div>

                <Navs :navs="navsA" @nav-clicked="setMobileMenuOff" />

                <a href="./" class="header-logo">
                    <img src="https://wanderland.qodeinteractive.com/wp-content/uploads/2020/01/logo-img-03.png" />
                </a>

                <Navs :navs="navsB" @nav-clicked="setMobileMenuOff" />
                
            </div>
        </div>           
    </div>
</template>

<script lang="ts" setup>
    const route = useRoute();

    const navs = [
        { text: 'Home', url: '/', 
            subnavs: [
                { text: 'Sn Home 1', url: './about' },
                { text: 'Sn Home 2', url: './' }
            ]
        },
        { text: 'Products', url: '/products',subnavs: [
                { text: 'Sn Home 1', url: './about' },
                { text: 'Sn Home 2', url: './' }
            ] },
        { text: 'Blog', url: '/blogs' },
        { text: 'Contact', url: '/contact' }
    ];

    const navsA = navs.slice(0, navs.length / 2);
    const navsB = navs.slice(navs.length / 2);

    const mobileMenuOn = ref(false);

    const setMobileMenuOn = () => {
        mobileMenuOn.value = true;
    }

    const setMobileMenuOff = () => {
        mobileMenuOn.value = false;
    }

</script>

<style lang="scss" scoped>
    @import "/assets/css/_variables";

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


            @include responsive('small') {
                & .row .col:first-child {
                    display: none;
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

            @include responsive('large') {
                justify-content: space-between;
                align-items: center;
            }
        }

        &.pos-init {
            background-color: #969696;
            position: initial;
        }

    }

    .navs {

        .mm-close-btn {
            position: absolute;
            top: 30px;
            right: 30px;
            cursor: pointer;
            
            i {
                font-size: 20px;
                color: #fff;
            }
        }

        @at-root .header.mobile-menu-on & {
            transform: translateX(0%);
        }

        @include responsive('large') {
            position: fixed;
            background: #484642;
            width: 100%;
            height: 100vh;
            top: 0;
            left: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transform: translateX(100%);
            transition: all .6s;
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

        @include responsive('large') {
            display: none;
        }
    }

    .burger {
        display: none;
        width: 60px;
        cursor: pointer;
        margin-top: 20px;
        transition: all .2s;

        span {
            display: block;
            background-color: white;
            height: 5px;
            margin-bottom: 10px;
        }

        @at-root .header.mobile-menu-on & {
            transform: translateX(-30px);
        }

        @include responsive('large') {
            display: block;
        }
    }

    .header-mobil-logo {
        display: none;
        width: 150px;

        @include responsive('large') {
            display: block;
        }
    }

    .mm-close-btn {
        display: none;

        @include responsive('large') {
            display: block;
        }
    }
    
</style>