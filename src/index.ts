// declare interface Component {
//   timer: number,
//   counter: number,
//   clearTimer: Function,
// }

declare namespace wx {
  function nextTick(...ars: any): any;
}

if (!wx.nextTick) {
  (wx.nextTick = setTimeout);
}

//@ts-ignore
Component({
  timer: 0,
  leftCounter: 0,
  /**
   * Component properties
   */
  properties: {
    title: String,
    cancel: Boolean,
    hidden: {
      type: Boolean,
      observer(newVal: boolean) {
        if (newVal) { // 隐藏
          if (this.timer) {
            this.clearTimer();
            wx.nextTick(() => this.setData({ countdownNum: -1 }));
          }
        } else if (!this.timer) {
          //显示 重新开始计时
          this.startTimer(this.properties.duration);
        }
      }
    },
    counter: {
      type: Number,
      value: 10,
      observer(newVal: number, oldVal: number) {
        if (newVal && newVal != oldVal && this.leftCounter > newVal && this.data.countdownNum >= 0) {
          wx.nextTick(() => this.setData({ countdownNum: -1 }));
        }
      }
    },
    duration: {
      type: Number,
      value: 60,
      observer(newVal: number) {
        this.startTimer();
      }
    }
  },
  /**
   * Component initial data
   */
  data: {
    countdownNum: -1,
  },

  detached() {
    this.clearTimer();
  },
  methods: {
    /** 开始计时 */
    startTimer(newVal) {
      this.leftCounter = newVal;
      this.clearTimer();
      this.timer = setInterval(() => {
        if (--this.leftCounter < 0) {
          return this.endTimer();
        } else if (this.leftCounter <= this.properties.counter) {
          this.setData({ countdownNum: this.leftCounter })
        }
      }, 1000);
    },
    /** 计时完成 */
    endTimer() {
      this.clearTimer();
      this.setData({
        hidden: true,
        countdownNum: -1,
      });
      this.triggerEvent('end', { duration: this.properties.duration });
    },
    /** 清除计时器 */
    clearTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = 0;
      }
    }
  }
})
