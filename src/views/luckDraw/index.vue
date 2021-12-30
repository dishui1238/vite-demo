<!--
 * @Author: your name
 * @Date: 2021-12-27 16:53:51
 * @LastEditTime: 2021-12-27 17:39:05
 * @LastEditors: Please set LastEditors
 * @Description: 抽奖大转盘
 * @FilePath: /vite-demo/src/views/luckDraw/index.vue
-->

<template>
  <div>
    <LuckyWheel
      ref="myLucky"
      width="300px"
      height="300px"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      @start="startCallback"
      @end="endCallback"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, unref } from 'vue'

export default defineComponent({
  setup() {
    const myLucky = ref<any>(null);
    // 点击抽奖按钮会触发star回调
    function startCallback() {
      // 调用抽奖组件的play方法开始游戏
      unref(myLucky).play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设后端返回的中奖索引是0
        const index = 1
        // 调用stop停止旋转并传递中奖索引
        unref(myLucky).stop()
      }, 3000)
    }
    // 抽奖结束会触发end回调
    function endCallback(prize: any) {
      console.log('prize---',prize)
    }

    return {
      blocks: ref([{ padding: '13px', background: '#617df2' }]),
      prizes: ref([
        { fonts: [{ text: '0', top: '10%' }], background: '#e9e8fe', range: 10 },
        { fonts: [{ text: '1', top: '10%' }], background: '#b8c5f2', range: 10 },
        { fonts: [{ text: '2', top: '10%' }], background: '#e9e8fe', range: 20  },
        { fonts: [{ text: '3', top: '10%' }], background: '#b8c5f2', range: 20  },
        { fonts: [{ text: '4', top: '10%' }], background: '#e9e8fe', range: 20  },
        { fonts: [{ text: '5', top: '10%' }], background: '#b8c5f2', range: 20  },
      ]),
      buttons: ref([
        { radius: '50px', background: '#617df2' },
        { radius: '45px', background: '#afc8ff' },
        {
          radius: '40px', background: '#869cfa',
          pointer: true,
          fonts: [{ text: '开始\n抽奖', top: '-20px' }]
        },
      ]),
      startCallback,
      endCallback,
      myLucky,
    }
  }
})
</script>

<style scoped>
</style>
