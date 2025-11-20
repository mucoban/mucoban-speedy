<template>
    <div class="header">
        <div class="container-fluidx">
            <div class="up-line">
                <div class="navs">
                    <NuxtLink to="/">Home page</NuxtLink>
                    <NuxtLink to="/product">Product page</NuxtLink>
                    <NuxtLink to="/about">About page</NuxtLink>
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
            padding: 30px 10px;
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
</style>