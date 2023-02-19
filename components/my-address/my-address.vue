<template>
  <view>
    <!-- 收货地址 -->
    <view class="address-choose-box" v-if="JSON.stringify(address) === '{}'">
      <button type="primary" size="mini" class="btnChooseAddress" @click="chooseAddress">请选择收货地址+</button>
    </view>
    <!-- 收货信息 -->
    <view class="address-info-box" v-else @click="chooseAddress">
      <view class="row1">
        <view class="row1_left">
          <view class="username">收货人：<text>{{address.userName}}</text></view>
        </view>
        <view class="row1_right">
          <view class="phone">电话：<text>{{address.telNumber}}</text></view>
          <!-- <uni-icons type="arrowright" size="16"></uni-icons> -->
        </view>
      </view>
      <view class="row2">
        <view class="row2_left">收货地址：</view>
        <view class="row2_right">{{addstr}}</view>
      </view>
    </view>
    <!-- 下边框 -->
    <image src="/static/cart_border@2x.png" class="address-border"></image>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    name: "my-address",
    data() {
      return {
        // address: {}
      };
    },
    methods: {
      ...mapMutations('m_user', ['updateAddress']),
      async chooseAddress() {
        const [err, succ] = await uni.chooseAddress().catch(err => err)
        if (err === null && succ.errMsg === 'chooseAddress:ok') {
          // this.address = succ
          this.updateAddress(succ)
        }
      }
    },
    computed: {
      ...mapState('m_user', ['address']),
      ...mapGetters('m_user', ['addstr'])
      // addstr() {
      //   if (!this.address.provinceName) return ''
      //   return this.address.provinceName + this.address.cityName + this.address.countyName + this.address.detailInfo
      // }
    }
  }
</script>

<style lang="scss">
  .address-choose-box {
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .address-info-box {
    height: 90px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    padding: 0 5px;

    .row1 {
      display: flex;
      justify-content: space-between;

      .row1_left {
        display: flex;
        align-items: center;

        .phone {
          margin-right: 5px;
        }
      }
    }

    .row2 {
      display: flex;
      align-items: center;
      margin-top: 10px;

      .row2_left {
        white-space: nowrap;
      }
    }
  }

  .address-border {
    display: block;
    width: 100%;
    height: 5px;
  }
</style>
