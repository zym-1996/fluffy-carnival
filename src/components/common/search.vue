<template>
    <div>
    <div  class="top">
    <van-search placeholder="请输入搜索关键词"/>
    <p @click="$router.back()">取消</p>
    </div>
    <h4>热搜</h4>
    <van-row>
    <van-col span="10"  offset="1">热搜1</van-col>
    <van-col span="10" offset="1">热搜2</van-col>
    <van-col span="10"  offset="1">热搜1</van-col>
    <van-col span="10" offset="1">热搜2</van-col>
    <van-col span="10"  offset="1">热搜1</van-col>
    <van-col span="10" offset="1">热搜2</van-col>
    <van-col span="10"  offset="1">热搜1</van-col>
    <van-col span="10" offset="1">热搜2</van-col>
    <van-col span="10"  offset="1">热搜1</van-col>
    <van-col span="10" offset="1">热搜2</van-col>
    </van-row>
    </div>
</template>

<script>
    export default {
}
</script>

<style lang="less" scoped>
.top {
    display: flex;
    background-color: #fff;
    
}
h4 {
    padding-left: 15px;
}
.van-search {
    width: 90%;
    .van-search__content {
        background-color: #f4f4f4;
         border-radius: 38px;
    }
}
p {
    display: flex;
    font-size: 14px;
      justify-items: center;
        align-items: center;
}
.van-col {
    padding-top: 20px;
}
</style>