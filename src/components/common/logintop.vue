<template>
    <div>
        <div class="logintop">
            <div></div>
            <div>{{middleTop}}</div>
            <div>
                 <slot name="right"></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:['middleTop']
    }
</script>

<style lang="less" scoped>
.logintop {
    height:12.5vw;
    background-color: white;
    display: flex;
    div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 4.444vw;
    }
}

</style>