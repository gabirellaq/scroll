<template>
<div class="listscrollpage">
    <div class="header">MESCROLL2</div>
    <ul id="dataList" class="recommentlist" v-cloak>
        <li v-for="(item,index) in pdlist " :key="index">
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
</div>
</template>

<script>
    import MeScroll from 'mescroll.js'
    import axiosRq from '../util/axios'
    export default {
        data() {
            return {
                mescroll: null,
                pdlist: []
            }
        },
        mounted: function() {
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
                }
            });
            
        },
        methods: {
            upCallback: function(page) {
                var self = this;
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
        }
    }
    
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.recommentlist {
    margin-top: 44px;
}
</style>