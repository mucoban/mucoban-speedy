<template>
    <div class="nav-holder" v-for="{ text, url, subnavs } in navs">
        <NuxtLink :to="url" 
            @mouseenter="turnOnSubNavs"
            @mouseleave="turnOffSubNavs">{{ text }}</NuxtLink>
        <div v-if="subnavs?.length" class="sub-navs" sn-id="sn1" 
            @mouseenter="(event) => turnOnSubNavs(event, true)"
            @mouseleave="(event) => turnOffSubNavs(event, true)"
            >
            <div class="sub-navs-i-holder">
                <div class="sub-nav-holder" v-for="{ text, url } in subnavs">
                    <NuxtLink :to="url">{{ text }}</NuxtLink>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts" setup>
    const { navs } = defineProps([ 'navs' ]);
    
    let timerOffSubNavs: any = {};
    const turnOnSubNavs = (event: any, self?: boolean) => {
        const element = (self ? event.currentTarget : event.currentTarget?.nextSibling);
        const snId = element instanceof HTMLElement ? element.getAttribute('sn-id') : null;
        clearTimeout(timerOffSubNavs[snId || '']);
        element?.classList?.add('on');
    }

    const turnOffSubNavs = (event: any, self?: boolean) => {
        const element = (self ? event.currentTarget : event.currentTarget?.nextSibling);
        const snId = element instanceof HTMLElement ? element.getAttribute('sn-id') : null;
        const nsClassList = element?.classList;
        timerOffSubNavs[snId || ''] = 
            setTimeout(() => {
                if (nsClassList) nsClassList.remove('on');
            }, 500);
    }
</script>