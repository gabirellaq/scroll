<template>
<div class="sliderList">
    <swiper :options="swiperOption" v-if="sliderList">
        <swiper-slide 
            v-for="(item,index) in sliderList.contList"
            :key="index">
            <img :src="item.pic">
            <h2>{{item.name}}</h2>
            <p>
                <span>{{item.nodeInfo.name}}</span> |
                <span>♥ {{item.linkType}}</span>
            </p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</div>
</template>

<script>
    import axiosRq from '../util/axios'
    export default {
        data () {
            return {
                sliderList: [],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                }
            }
        },
        methods: {
            //slider
            getSlider () {
                axiosRq('GET', '/lastLike')
                    .then(results => {
                        this.sliderList = results.data.dataList[0]
                    })
            }
        },
        mounted() {
            this.getSlider();
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    .sliderList {
        .swiper-container {
            img {
                width: 100%;
            }
        }
        .swiper-slide {
            position: relative;
            &:before {
                content: '';
                @include position(absolute,0,0,0,0);
                background: url(../assets/images/actwap_cover.png) repeat-x;
                background-size: auto 100%;
            }
            h2 {
                @include position($state:absolute,$bottom: 0.7rem);
                padding:10px;
                font-size: $font-title-size;
                color: $white-color;
                font-weight:bold;
            }
            p {
                @include position($state:absolute,$bottom: 5px);
                padding:10px;
                font-size: $font-des-size;
                color: darken($white-color, 15%);
            }
        }
        .swiper-pagination {
            text-align: right;
        }
        .swiper-pagination-bullet {
            width:6px;
            height:6px;
            background: darken($white-color, 15%);
            &:last-child {
                margin-right:10px;
            }
        }
        .swiper-pagination-bullet-active {
            background: $yellow-color;
        }
    }
</style>