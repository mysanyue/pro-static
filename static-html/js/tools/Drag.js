class Drag {
  constructor(el) {
    this.el = el;
    // 鼠标摁下时的元素的位置
    this.startOffset = {};
    // 鼠标摁下时鼠标的坐标
    this.startPoint = {};

    let move = (e) => {
      this.move(e);
    };

    let end = (e) => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseup", end);
    };

    el.addEventListener("mousedown", (e) => {
      this.start(e);
      document.addEventListener("mousemove", move);
      document.addEventListener("mouseup", end);
    });
  }

  // 摁下时的处理函数
  start(e) {
    let { el } = this;
    this.startOffset = {
      x: el.offsetLeft,
      y: el.offsetTop
    };
    this.startPoint = {
      x: e.clientX,
      y: e.clientY
    };
  }

  //移动时的处理函数
  move(e) {
    let { el, startOffset, startPoint } = this;
    let nowPoint = {
      x: e.clientX,
      y: e.clientY
    };
    let dis = {
      x: nowPoint.x - startPoint.x,
      y: nowPoint.y - startPoint.y
    }
    el.style.left = dis.x + startOffset.x + "px";
    el.style.top = dis.y + startOffset.y + "px";
  }
}