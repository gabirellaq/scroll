<template>
<ul id="dataList" class="recommentlist" v-cloak>
    <li v-for="(item,index) in listData" :key="index">
        <a>
            <span class="view">
                <img :src="item.pic">
                <span class="time">{{item.duration | transformVideoDuration}}</span>
            </span>
            <span class="title">{{item.name}}</span>
        </a>
        <span class="source">
            <img :src="item.nodeInfo.logoImg">
            <span>{{item.nodeInfo.name}}</span>
        </span>
    </li>
</ul>
</template>

<script>
    import MeScroll from 'mescroll.js'
    import axiosRq from '../util/axios'
    export default {
        props: ['listData'],
        data () {
            return {
                
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    .recommentlist {
        padding: 10px;
        //column-count: 2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        li {
            width: 192px;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            margin-bottom: 10px;
            flex-wrap: wrap;
            justify-content: flex-start;
            background-color: $white-color;
            > a {
                display: block;
                > .view {
                    display: block;
                    position: relative;
                    img {
                        background-color: $border-color;
                        width: 100%;
                        height: 108px;
                    }
                    > .time {
                        background-color: rgba($black-color, .7);
                        border-radius: 2px;
                        color: $white-color;
                        padding: 2px 5px;
                        font-size: $font-des-size;
                        @include position($right: 10px, $bottom: 10px)
                    }
                }
                .title {
                    display: block;
                    color: $font-title-color;
                    font-size: $font-title-size;
                    text-align: left;
                    padding: 5px 10px;
                    overflow: hidden;
                    height:0.9rem;
                }
            }
            .source {
                display: block;
                color: $font-des-color;
                font-size: $font-des-size;
                text-align: left;
                padding: 5px 10px;
                @include textoverflow();
                img, span {
                    vertical-align: middle;
                }
                img {
                    width: 24px;
                    border-radius:50%;
                    overflow: hidden;
                    margin-right: 5px;
                }
            }
        }
    }
</style>