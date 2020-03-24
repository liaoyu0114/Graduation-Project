<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">在线点餐平台</div>
    </nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" class="tabcontrol-fixed"
                 @tabClick="tabClick" ref="tabControlFixed" v-show="isShowTabControl"></tab-control>

    <location :location-data="$store.state.locationData" :i-p-info="$store.state.IPInfo"></location>
    <scroll class="scroll" ref="scroll"
            :probe-type="3"
            :pull-up-load="true"
            @scrollPosition="currentPosition">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <tab-control :titles="['流行', '新款', '精选']"
                   @tabClick="tabClick" ref="tabControl"></tab-control>
      <goods-list :goods="goods"></goods-list>
    </scroll>

  </div>
</template>

<script>
  import AMap from 'AMap'
  import Location from './childComs/Location'
  import HomeSwiper from './childComs/HomeSwiper'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl';
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "Home",
    components: {
      Location,
      HomeSwiper,
      GoodsList,
      Scroll,
      TabControl,
      NavBar
    },
    data() {
      // debugger
      return {
        tabOffsetTop: 0,
        result: {},
        //是否展示吸顶效果的tabControl
        isShowTabControl: false,
        //已滑动距离
        scrolledPosition: 0,
        banners: [
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ee2ecf4.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ee2ecf4.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ec1c603.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ec1c603.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ed215ff.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ed215ff.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ef31513.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234ef31513.jpg"
          },
          {
            image: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234f02f89a.jpg",
            link: "http://pic1.win4000.com/wallpaper/2020-02-11/5e4234f02f89a.jpg"
          }
        ],
        goods: [
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          },
          {
            image: "http://pic1.zhimg.com/50/v2-a1daed32cac3a2904997f1f7e0b60d9b_hd.jpg",
            title: "狗子们，情人节到了快来选个头像吧"
          }
        ]
      };
    },
    activated() {
      /**
       * 每次重新进入home组件，scrollerHeight都会被重置为0
       * 于是使用vuex记录离开时的scrollerHeight
       * 再次进入home组件时，将beterscroll的scrollerHeight设置为保存的scrollerHeight
       */
      this.$refs.scroll.scroll.scrollerHeight = this.$store.state.homeScrollHeight;
      this.$refs.scroll.urefresh();
      //返回离开前的位置，即保留用户以滑动的状态
      this.$refs.scroll.uscrollTo(0, this.scrolledPosition, 0);
      this.$refs.scroll.urefresh();
    },
    deactivated() {
      //获取已经滑动的高度
      this.scrolledPosition = this.$refs.scroll.getPositionY();
      //记录此时可滚动区域高度
      this.$store.commit('changeHomeScrollHeight', this.$refs.scroll.scroll.scrollerHeight);
      //取消全局事件监听 事件名，响应方法名
      this.$bus.$off('imageLoad', this.itemImgListener);
    },
    methods:{
      currentPosition(position) {
        // this.listenShowBackTop(position);

        //吸顶TabControl的隐藏/显示，使用v-if。
        this.isShowTabControl = -position.y > this.tabOffsetTop;
      },
      swiperImageLoad(){
        // //所有组件都有$el ,用于获取组件内元素
        this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      },
      tabClick(index) {
        // switch (index) {
        //   case 0 :
        //     this.currentType = 'pop';
        //     break
        //   case 1 :
        //     this.currentType = 'new';
        //     break
        //   case 2 :
        //     this.currentType = 'sell';
        //     break
        // }
        //同步吸顶tabcontrol和滚动tabcontrol的选中状态
        this.$refs.tabControl.currentIndex = index;
        this.$refs.tabControlFixed.currentIndex = index;
      }
    },

  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-ele-blue);
    color: white;
  }
  .scroll {
    position: relative;
    top: 0;
    height: calc(100vh - 86px - 93px);
    right: 0;
    left: 0;
    background: white;
    overflow: hidden;
  }
  @media screen and (min-width: 500px){
    .scroll, .tabcontrol-fixed {
      width: 500px !important;
    }
  }
  .tabcontrol-fixed {
    position: absolute;
    top: 126px;
    width: 100vw;
    z-index: 9;
  }
</style>
