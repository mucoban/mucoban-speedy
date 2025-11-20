<template>
    <div class="page-holder">
        
        <Header />

        <div class="page-content">
            <slot />
        </div>

        <Footer />
        
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

</style>
