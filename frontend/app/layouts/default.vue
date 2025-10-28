<template>
    <div class="page-holder">
        <div class="header">
            <div class="container-fluid">
                <div class="holder">
                    <div class="navs">
                        <NuxtLink to="/">Home page</NuxtLink>
                        <NuxtLink to="/product">Product page</NuxtLink>
                        <NuxtLink to="/about">About page</NuxtLink>
                    </div>
                </div>           
            </div>
        </div>
        
        <div class="page-content">
            <slot />
        </div>

        <div class="footer">
            <div class="container-fluid">
                <div class="holder">
                    <p>footer</p>
                </div>           
            </div>
        </div>
    </div>
    
</template>

<style lang="scss">

    .page-holder {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .page-content {
        flex: 2;
    }

    .header { 
        background-color: green;
        padding: 20px;

        .holder {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .navs {
            a {
                color: white; 
                padding: 20px;
            }
        }

    }

    a { text-decoration: unset; }

    .footer {
        background-color: black;
        padding: 20px;
        text-align: center;

        p { color: white; }
    }

</style>
