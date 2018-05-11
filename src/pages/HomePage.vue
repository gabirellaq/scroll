<template>
<div class="homepage">
    <div class="header">MESCROLL EXAMPLES</div>
    <div>
        <ul id="homeList" class="homeTab">
            <li v-for="(item,index) in homeTab" :key="index">
                <router-link :to="item.href">
                    <span class="view">
                        <img :src="item.pic">
                    </span>
                    <span class="title">{{item.name}}</span>
                </router-link>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        data () {
            return {
                homeTab: [
                    {
                        "pic": "../../static/images/bodyscrollpage.png",
                        "name": "【body为滚动区域】 无需设置高度，写法简单，适用于无标题界面，避免滚动条穿顶",
                        "href": "/BodyScrollPage"
                    },
                    {
                        "pic": "../../static/images/bodyscrollpage.png",
                        "name": "列表刷新加载",
                        "href": "/ListScrollPage"
                    },
                    {
                        "pic": "../../static/images/bodyscrollpage.png",
                        "name": "Tab刷新加载",
                        "href": "/ListScrollPage2"
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    .homeTab {
        padding: 10px;
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