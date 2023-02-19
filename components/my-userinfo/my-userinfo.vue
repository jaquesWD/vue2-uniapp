<template>
  <view class="my-userinfo-container">
    <!-- 头像昵称 -->
    <view class="top-box">
      <image :src="userinfo.avatarUrl" class="avatar"></image>
      <view class="nickname">{{ userinfo.nickName }}</view>
    </view>

    <!-- 面板 -->
    <view class="panel_list">
      <!-- ① -->
      <view class="panel">
        <view class="panel_body">
          <view class="panel_item">
            <text>9</text>
            <text>收藏的店铺</text>
          </view>
          <view class="panel_item">
            <text>7</text>
            <text>收藏的商品</text>
          </view>
          <view class="panel_item">
            <text>8</text>
            <text>关注的商品</text>
          </view>
          <view class="panel_item">
            <text>5</text>
            <text>足迹</text>
          </view>
        </view>
      </view>

      <!-- ② -->
      <view class="panel">
        <view class="panel_title">我的订单</view>
        <view class="panel_body">
          <view class="panel_item">
            <image src="/static/my-icons/icon1.png" class="icon"></image>
            <text>待付款</text>
          </view>
          <view class="panel_item">
            <image src="/static/my-icons/icon2.png" class="icon"></image>
            <text>待收货</text>
          </view>
          <view class="panel_item">
            <image src="/static/my-icons/icon3.png" class="icon"></image>
            <text>退货/退款</text>
          </view>
          <view class="panel_item">
            <image src="/static/my-icons/icon4.png" class="icon"></image>
            <text>全部订单</text>
          </view>
        </view>
      </view>

      <!-- ③ -->
      <view class="panel">
        <view class="panel_list_item">
          <text>收货地址</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel_list_item">
          <text>联系客服</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel_list_item" @click="logout">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'
  export default {
    name: "my-userinfo",
    data() {
      return {

      };
    },
    computed: {
      ...mapState('m_user', ['userinfo']),
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo', 'updateToken', 'updateAddress']),
      async logout() {
        const [err, succ] = await uni.showModal({
          title: '提示',
          content: '确认退出登录吗？'
        }).catch(err => err)

        if (succ && succ.confirm) {
          this.updateUserInfo({})
          this.updateToken('')
          this.updateAddress({})
        }
      }
    }
  }
</script>

<style lang="scss">
  .my-userinfo-container {
    height: 100%;
    background-color: #f4f4f4;

    .top-box {
      height: 400rpx;
      background-color: #c00000;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .avatar {
        display: flex;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        border: 2px solid white;
        box-shadow: 0 1px 5px black;
      }

      .nickname {
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
      }
    }

    .panel_list {
      padding: 0 10px;
      position: relative;
      top: -10px;

      .panel {
        background-color: #FFFFFF;
        border-radius: 3px;
        margin-bottom: 9px;

        .panel_title {
          line-height: 45px;
          padding-left: 10px;
          font-size: 15px;
          border-bottom: 1px solid #f4f4f4;
        }

        .panel_body {
          display: flex;
          justify-content: space-around;

          .panel_item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-around;
            font-size: 13px;
            padding: 10px 0;

            .icon {
              width: 35px;
              height: 45px;
            }
          }
        }

        .panel_list_item {
          height: 45px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 15px;
          padding: 0 10px;
        }
      }
    }
  }
</style>
