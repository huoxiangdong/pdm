<template>
  <!-- 鼠标移动事件 mousemove 执行beginPath($event)函数-->
  <div class="inner draw" @mousemove="beginPath($event)">
  <!-- canvas 
       mousedown 鼠标按下
       mouseup 鼠标松开
       mousemove 鼠标移动
       移动端
       touchstart 手指触碰屏幕
       touchmove 手指在屏幕上滑动
       touchend 手指离开屏幕
  -->
    <div class="wrap">
      <canvas 
        id="canvas" 
        class="fl" 
        width="600" 
        height="400" 
        @mousedown="canvasDown($event)" 
        @mouseup="canvasUp($event)"
        @mousemove="canvasMove($event)"
        @touchstart="canvasDown($event)" 
        @touchend="canvasUp($event)"
        @touchmove="canvasMove($event)"
      >
      </canvas>

      <div id="control" class="fl">
        <!--画笔颜色-->
        <div id="canvas-color">
          <h5>画笔颜色</h5>
          <!-- active 点击选中后边框颜色 -->
          <ul>
            <li v-for="(item,index) in colors" 
                :key="index" 
                :class="{'active':config.lineColor == item}" 
                :style="{ background: item }" 
                @click="setColor(item)">
            </li>
          </ul>
        </div>
        <!--画笔-->
        <div id="canvas-brush">
          <h5>画笔大小</h5>
          <!-- pen.className 画笔图标 -->
          <span 
            v-for="pen in brushs" :key="pen.id"
            :class="[pen.className,{'active': config.lineWidth === pen.lineWidth}]"
            @click="setBrush(pen.lineWidth)"
          ></span>
        </div>
        <!--操作-->
        <div id="canvas-control">
          <h5>操作</h5>
          <span 
            v-for="control in controls" :key="control.id"  
            :title="control.title" 
            :class="control.className"  
            @click="controlCanvas(control.action)"
          ></span>
        </div>
        <!-- 生成图像-->
        <div id="canvas-drawImage">
          <h5>生成图像</h5>
          <button class="drawImage" @click="getImage()">预览</button>
        </div>
      </div>
    </div>
    <!--存放图片-->
    <div id="img-box" v-show="imgUrl.length">
      <div class="img-item" v-for="src in imgUrl" :key="src.id">
        <img :src="src">
        <span class="fa fa-close" @click="removeImg(src)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default { // 默认出口
    data () {
      return {
        // 颜色
        colors: ['#fef4ac', '#0018ba', '#ffc200', '#f32f15', '#cccccc', '#5ab639'],
        brushs: [{
          className: 'small fa fa-paint-brush',
          lineWidth: 3
        }, {
          className: 'middle fa fa-paint-brush',
          lineWidth: 6
        }, {
          className: 'big fa fa-paint-brush',
          lineWidth: 12
        }],
        context: {},
        // 存放保存的状态图片
        imgUrl: [],
        // 鼠标使用中状态标记
        canvasMoveUse: true,

        // 存储当前Canvas状态数组-上一步
        preDrawAry: [],
        // 存储当前表面状态数组-下一步
        nextDrawAry: [],
        // 中间数组
        middleAry: [],

        // 绘画配置参数
        config: {
          lineWidth: 1,
          lineColor: '#f2849e',
          shadowBlur: 2
        }
      }
    },
    // 实例创建完成，还没有挂载
    created () {
      // 触发自定义事件 vm.$on监听自定义事件
      // @param: 事件 传入参数
      //this.$emit('setNav', '在线涂鸦画板')
    },
    // 挂载元素，替换el
    mounted () { // 挂在后，初始化canvas
      //console.log(this.$el)
      // 获取 #canvas元素
      const canvas = document.querySelector('#canvas')
      // 获取canvas绘图环境 挂在到this.context
      this.context = canvas.getContext('2d')
      // 执行initDraw() 获取当前环境数据，push到middleAry数组
      this.initDraw()
      // 设置绘画样式配置
      this.setCanvasStyle()
    /*   添加隐藏footer 没用注释掉
      document.querySelector('#footer').classList.add('hide-footer')
      document.querySelector('body').classList.add('fix-body') */
    },
    // 实例销毁
    destroyed () {
      /* document.querySelector('#footer').classList.remove('hide-footer')
      document.querySelector('body').classList.remove('fix-body') */
    },
    computed: { // 计算值
      controls () {
        return [{
          title: '上一步',
          action: 'prev',
          className: this.preDrawAry.length ? 'active fa fa-reply' : 'fa fa-reply'
        }, {
          title: '下一步',
          action: 'next',
          className: this.nextDrawAry.length ? 'active fa fa-share' : 'fa fa-share'
        }, {
          title: '清除',
          action: 'clear',
          className: (this.preDrawAry.length || this.nextDrawAry.length) ? 'active fa fa-trash' : 'fa fa-trash'
        }]
      }
    },
    // 调用方法
    methods: {
      // 判断浏览器环境，是否为PC端
      isPc () {
        // navigator.userAgent 用户代理头
        const userAgentInfo = navigator.userAgent
        const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        // 标志量
        let flag = true
        for (let v = 0; v < Agents.length; v++) {
          // indexOf 指定的字符串值在字符串中首次出现的位置
          // 不存在返回 -1，即存在返回值大于0
          if (userAgentInfo.indexOf(Agents[v]) > 0) { 
            flag = false
            break
          }
        }
        return flag
      },
      // 删除预览图片
      removeImg (src) {
        // fileter创建一个符合条件的新数组 条件：item !== src
        this.imgUrl = this.imgUrl.filter(item => item !== src)
      },

      // 获取当前环境数据，push到middleAry数组
      initDraw () {
        // 获取当前环境每个像素的数据 获取当前环境每个像素的数据 赋给 preData
        const preData = this.context.getImageData(0, 0, 600, 400)
        //console.log(preData)
        // 空绘图表面进栈
        // push进middleAry数据
        this.middleAry.push(preData)
        //console.log(this.middleAry)
      },
      // 鼠标移动时调用 获取鼠标位于canvas坐标 开始绘制
      // 鼠标移动时的绘制
      canvasMove (e) {
        //console.log(e)
        if (this.canvasMoveUse) {
          console.log('鼠标移动')
          const t = e.target
          //console.log(e)
          let canvasX
          let canvasY
          if (this.isPc()) {
            // parentNode父节点 parentNode当前元素距离某个父辈元素左边缘的距离
            // clientX 鼠标指针向对于浏览器页面（或客户区）的水平坐标
            const canvas = document.querySelector('#canvas') // 获取canvas元素
            // Canvas位于页面坐标
            const rect = canvas.getBoundingClientRect()
            //console.log(e.clientX)
            // 鼠标位于Canvas的坐标 鼠标位于页面坐标 - Canvas位于页面坐标
            canvasX = e.clientX - rect.left
            canvasY = e.clientY - rect.top
          } else {
            canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft
            canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop
          }
          // 创建绘画起始点
          this.context.lineTo(canvasX, canvasY)
          // 绘制
          this.context.stroke()
        }
      },
      beginPath (e) {
        // querySelector 获取#canvas元素
        const canvas = document.querySelector('#canvas')
        // 事件target不为canvas执行 beginPath() 方法
        if (e.target !== canvas) {
          //console.log(e)
          console.log('beginPath')
          // 开始一条路径，或重置当前的路径
          this.context.beginPath()
        }
      },
      // mouseup 鼠标松开时调用
      canvasUp (e) {
        console.log('鼠标松开')
        // 获取当前环境每个像素的数据 获取当前环境每个像素的数据 赋值给 preData
        const preData = this.context.getImageData(0, 0, 600, 400)

        if (!this.nextDrawAry.length) {  // 如果 nextDrawAry数组为空
          // 当前绘图表面进栈
          this.middleAry.push(preData)  // 将绘画push进数组
          //console.log('执行的这里')
        } else {
          //console.log('执行的这里')
          this.middleAry = []
          // concat连接数组
          this.middleAry = this.middleAry.concat(this.preDrawAry)
          this.middleAry.push(preData)
          this.nextDrawAry = []
        }
        this.canvasMoveUse = false
      },
      // 1.mousedown 鼠标按下时调用
      // 鼠标按下开始绘画
      canvasDown (e) {
        console.log('鼠标按下时调用')
        this.canvasMoveUse = true // 鼠标使用状态
        const canvas = document.querySelector('#canvas') // 获取canvas元素
        const rect = canvas.getBoundingClientRect() // canvas坐标
        const canvasX = e.clientX - rect.left
        const canvasY = e.clientY - rect.top
        this.setCanvasStyle() //初始化画笔
        // 开始一条路径，或重置当前的路径
        this.context.beginPath()
        //this.context.moveTo(canvasX, canvasY)
        this.context.moveTo(canvasX,canvasY)
        //this.context.stroke()
        console.log('moveTo', canvasX, canvasY)
        // 当前绘图表面状态
        const preData = this.context.getImageData(0, 0, 600, 400)
        // 当前绘图表面进栈 上一步数组
        this.preDrawAry.push(preData)  // 保存状态
      },
      // 设置颜色
      setColor (color) {
        this.config.lineColor = color
        //console.log(id)
      },
      // 设置笔刷大小
      setBrush (type) {
        this.config.lineWidth = type
      },
      // 操作
      controlCanvas (action) {
        switch (action) {
          case 'prev':
            if (this.preDrawAry.length) {
              const popData = this.preDrawAry.pop()
              const midData = this.middleAry[this.preDrawAry.length + 1]
              this.nextDrawAry.push(midData)
              this.context.putImageData(popData, 0, 0)
            }
            break
          case 'next':
            if (this.nextDrawAry.length) {
              const popData = this.nextDrawAry.pop()
              const midData = this.middleAry[this.middleAry.length - this.nextDrawAry.length - 2]
              this.preDrawAry.push(midData)
              this.context.putImageData(popData, 0, 0)
            }
            break
          case 'clear':
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
            this.preDrawAry = []
            this.nextDrawAry = []
            this.middleAry = [this.middleAry[0]]
            break
        }
      },
      // 生成图片
      getImage () {
        const canvas = document.querySelector('#canvas')
        // toDataURL()保存为图片 默认为 image/png
        const src = canvas.toDataURL()
        //console.log(src)
        // 将图片push到imgUrl数组
        this.imgUrl.push(src)
        console.log(this.imgUrl)
        // 如果不是PC端
        //console.log(this.isPc())
        if (!this.isPc()) {
          // window.open(`data:text/plain,${src}`)
          // window.location获得当前页面的地址 (URL)，并把浏览器重定向到新的页面
          window.location.href = src
        }
      },
      // 设置绘画配置
      setCanvasStyle () {
        this.context.lineWidth = this.config.lineWidth // 当前线条宽度
        this.context.shadowBlur = this.config.shadowBlur // 阴影的模糊级数
        this.context.shadowColor = this.config.lineColor // 阴影的颜色
        this.context.strokeStyle = this.config.lineColor // 笔触的颜色、渐变或模式
      }
    }
  }
</script>

/* 样式 */
<style>
  @media screen and (max-width: 700px) {
    #img-box,
    #canvas-drawImage h5,
    #canvas-brush {
      display: none;
    }
    #canvas-drawImage button{
      width: auto;
      position: absolute;
      flex: 1;
    }
    .wrap #control {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      text-align: center;
    }
  }
  .fix-body {
    position: fixed !important;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
  }
  .inner.draw {
    display: flex;
    flex-direction: row;
    background-color: #fff;
  }
  .draw h5 {
    margin-bottom: 10px;
  }
  #img-box {
    flex: 1;
    padding-left: 10px;
  }
  #img-box .img-item {
    position: relative;
    display: inline-block;
  }
  #img-box .img-item .fa {
    position: absolute;
    cursor: pointer;
    right: 1px;
    top: -1px;
    font-size: 12px;
    font-weight: 1;
    display: none;
    color: #ccc;
  }
  #img-box .img-item:hover .fa {
    display: block;
  }
  #img-box .img-item .fa:hover {
    color: #f2849e;
  }
  #img-box img {
    border: 1px #ccc solid;
    width: 90px;
    height: 60px;
    margin: 5px;
  }
  .wrap{
    width: 740px;
    border: 1px #585858 solid;
    overflow: hidden;
  }
  .fl{
    float: left;
    display: block;
  }
  #canvas{
    border-right: 1px #585858 solid;
    cursor: crosshair;
  }
  #control{
    width: 130px;
    height: 400px;
    margin-left: 4px;
  }
  #control div{
    padding: 5px;
  }
  #canvas-color ul{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  #canvas-color ul li{
    float: left;
    display: inherit;
    width: 13px;
    height: 13px;
    border: 3px #fff solid;
    margin: 8px;
    cursor: pointer;
  }
  #canvas-color .active {
    border: 1px solid #f2849e;
  }
  #canvas-brush span{
    display: inline-block;
    width: 20px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  #canvas-brush .small {
    font-size: 12px;
  }
  #canvas-brush .middle {
    font-size: 14px;
  }
  #canvas-brush .big {
    font-size: 16px;
  }
 
  #canvas-control span{
    display: inline-block;
    font-size: 14px;
    width: 20px;
    height: 15px;
    margin-left: 10px;
    cursor: pointer;
  }
  #canvas-control .active,
  #canvas-brush .active {
    color: #f2849e;
  }
  .drawImage {
    width: 100px;
    height: 30px;
    font-size: 12px;
    line-height: 30px;
  }
</style>