// 2016/3/16
window.onload = function () {
  imageLocation('pbl', 'pic')
  var a = 9

  $(window).scroll(function () {
    if (checkFlag) {
      var cparent = document.getElementById('pbl')

      for (var i = 0; i < 1; i++) {
        if (a == 60) a = 1
        // console.log(i);
        var addHtml =
          '<li class="pic"><a href="#"><img src="../../assets/images/wx' +
          a +
          '.jpeg"><p>只为伊人 莞尔一笑</p><p>成功的背后，需要你默默的付出和不懈的坚持</p><em>三月风</em></a></li>'
        $('#pbl ul').append(addHtml)
        a++
      }
    }
    imageLocation('pbl', 'pic')
  })
}

function checkFlag() {
  var cparent = document.getElementById('pbl')
  var ccontent = getChildElement(cparent, 'pic')
  var lastContentHeight = ccontent[ccontent.length - 1].offsetTop
  // 滚动条对顶部的偏移
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
  var pageheight = document.documentElement.clientHeight || document.body.clientHeight
  //console.log(lastContentHeight+":"+scrollTop+":"+pageheight);
  if (lastContentHeight < scrollTop + pageheight) {
    return true
  }
}

function imageLocation(parent, content) {
  // 得到pbl
  var imageParent = document.getElementById(parent)
  var imageContent = getChildElement(imageParent, content) //得到数组
  // alert(imageContent.length);
  var imageWidth = imageContent[0].offsetWidth + 20 //得到图片的宽度
  // alert(imageWidth);
  var num = Math.floor(1200 / imageWidth)
  // alert(num);
  imageParent.style.cssText = 'width:' + imageWidth * num + 'px;margin: 0 auto'

  // 获取图片的高度
  var BoxHeightArr = []
  for (var i = 0; i < imageContent.length; i++) {
    if (i < num) {
      // 获取第一行图片的高度
      BoxHeightArr[i] = imageContent[i].offsetHeight
      // alert(BoxHeightArr);
    } else {
      var minheight = Math.min.apply(null, BoxHeightArr)
      var minIndex = getminheightLocation(BoxHeightArr, minheight)
      imageContent[i].style.position = 'absolute'
      imageContent[i].style.top = minheight + 10 + 'px'
      // 得到当前左边距
      imageContent[i].style.left = imageContent[minIndex].offsetLeft + 'px'
      // var n = BoxHeightArr[minIndex];
      // var z = imageContent[i].offsetHeight;
      // console.log(n,z);
      BoxHeightArr[minIndex] = BoxHeightArr[minIndex] + imageContent[i].offsetHeight + 10
    }
  }
}

// 得到高度最小的第一行的盒子
function getminheightLocation(BoxHeightArr, minHeight) {
  for (var i in BoxHeightArr) {
    if (BoxHeightArr[i] == minHeight) {
      return i
    }
  }
}

// 得到所有子元素
function getChildElement(parent, content) {
  var contentArr = []
  // 得到所有的子元素
  var allcontent = parent.getElementsByTagName('*')

  for (var i = 0; i < allcontent.length; i++) {
    if (allcontent[i].className == content) {
      contentArr.push(allcontent[i])
    }
  }
  return contentArr
}
