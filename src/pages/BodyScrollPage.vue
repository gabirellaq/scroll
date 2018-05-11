<template>
<div class="homepage">
    <SliderComponent></SliderComponent>
    <div class="RecommendBox">
        <h2 class="recommendTitle">为你推荐</h2>
        <ListComponent :listData="pdlist"></ListComponent>
    </div>
</div>
</template>

<script>
    import MeScroll from 'mescroll.js'
    import axiosRq from '../util/axios'
    export default {
        data () {
            return {
                pdlist: [],
                mescroll: null
            }
        },
        mounted() {
            var self = this;
				self.mescroll = new MeScroll("body", {
					up: {
						callback: self.upCallback, //上拉回调
                        isBounce: false,
                        toTop:{
                            src: "../../static/images/mescroll-totop.png"
                        },
                        empty:{
                            warpId:"dataList",
                            tip : "亲,暂无相关数据哦~" ,
                        },
                        htmlNodata: '<p class="upwarp-nodata">-- 到底了 --</p>'
					}
				});
        },
        methods: {
            //上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
            upCallback: function(page) {
                let self = this;
                axiosRq('GET', '/getCategorysConts', {
                    page: page.num,
                    size: page.size
                }).then(results => {
                    let curPageData = results.data
                    if(page.num == 1) self.pdlist = [];

                    self.pdlist = self.pdlist.concat(curPageData.contList);
                    console.log("page.num="+page.num+", page.size="+page.size+", curPageData.contList.length="+curPageData.contList.length+", self.pdlist.length==" + self.pdlist.length);
                    self.mescroll.endByPage(curPageData.contList.length, curPageData.totalPage);
                }).catch(err => {
                    self.mescroll.endErr()
                })
            }
        },
    }
</script>

<style lang="scss">
    @import '../assets/scss/variables.scss';
    .homepage {
        .RecommendBox {
            background: url("../assets/images/recommend_bg.png") repeat-y;
            background-size: 100% 100%;
            .recommendTitle {
                font-size: $font-title-size;
                padding:10px;
                color:$white-color;
            }
        }
    }
</style>