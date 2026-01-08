<template>
    <div class="nav-holder" v-for="({ text, url, subnavs }, index) in navs">
        <NuxtLink :to="url" 
            @click="navClicked"
            @mouseenter="(event) => turnOnSubNavs(event, false, 2)"
            @mouseleave="(event) => turnOffSubNavs(event, false, 2)">{{ text }}</NuxtLink>

        <button v-if="subnavs?.length" @click="(event) => turnOnSubNavs(event, false)">
            <i class="bi bi-chevron-down"></i>
        </button>

        <div v-if="subnavs?.length" class="sub-navs" :sn-id="'sn' + index" 
            @click="navClicked"
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
    const emit = defineEmits([ 'navClicked' ]);
    
    let timerOffSubNavs: any = {};

    const getElement = (event: any, self?: boolean, nextTimes?: number) => {
        const element = (self ? event.currentTarget : nextTimes === 2 ? event.currentTarget?.nextSibling?.nextSibling : event.currentTarget?.nextSibling);
        return element;
    }

    const turnOnSubNavs = (event: any, self?: boolean, nextTimes?: number) => {
        const element = getElement(event, self, nextTimes);
        const snId = element instanceof HTMLElement ? element.getAttribute('sn-id') : null;
        clearTimeout(timerOffSubNavs[snId || '']);
        document.body.querySelector('.on[sn-id]')?.classList?.remove('on');
        element?.classList?.add('on');
    }

    const turnOffSubNavs = (event: any, self?: boolean, nextTimes?: number) => {
        const element = getElement(event, self, nextTimes);
        const snId = element instanceof HTMLElement ? element.getAttribute('sn-id') : null;
        const nsClassList = element?.classList;
        timerOffSubNavs[snId || ''] = 
            setTimeout(() => {
                if (nsClassList) nsClassList.remove('on');
            }, 500);
    }

    const navClicked = () => {
        emit('navClicked');
    }
    
</script>

<style scoped>

    .nav-holder {
        display: inline-block;
        position: relative;
        padding: 0 50px;
        text-align: center;

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

                @media screen and (max-width: 992px) {
                    padding: 5px 0px;
                }
            }

        button {
            display: none;
            border: none;
            background: none;
            color: white;
            padding: 0px;
            margin-left: 7px;

            @media screen and (max-width: 992px) {
                display: inline-block;
            }
        }

        @media screen and (max-width: 992px) {
            margin-bottom: 25px;
        }
    }

    .sub-navs {
        position: absolute;
        top: 68px; left: 45px;
        overflow: hidden;
        height: 0px;

        &.on {
            height: unset;
            
            .sub-navs-i-holder {
                transform: translate(0%, 0%);
            }
        }

        @media screen and (max-width: 992px) {
            position: static;

            &.on {
                .sub-navs-i-holder {
                    display: block;
                }
            }
        }
    }

    .sub-navs-i-holder {
        background-color: white;
        min-width: 200px;
        transform: translate(0%, -100%);
        transition: all .3s ease-in;

        @media screen and (max-width: 992px) {
            transition: none;
            transform: translate(0%, 0%);
            display: none;
        }
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