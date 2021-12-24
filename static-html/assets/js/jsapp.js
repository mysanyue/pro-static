window.onload = function(){
	imgLocation("container","box")

	var imgData = {"data":[{"src":"wx2.jpeg"},{"src":"wx2.jpeg"},{"src":"wx5.jpeg"},{"src":"wx6.jpeg"}]};
	window.onscroll = function(){
		if(checkFlag){
			// 创建节点动态加载数据
			var cparent = document.getElementById('container');
			for(var i = 0; i < imgData.data.length; i++) {
				var ccontent = document.createElement("div");
				ccontent.className = "box";
				cparent.appendChild(ccontent);
				var boximg = document.createElement("div");
				boximg.className = "box_img";
				ccontent.appendChild(boximg);
				var img = document.createElement("img");
				img.src = "../assets/images/" + imgData.data[i].src;
				boximg.appendChild(img);
			}
		}
		// 再次调用imgLocation加载瀑布流
		imgLocation('container','box');
	}

};

function checkFlag(){
	var cparent = document.getElementById('container');
	var ccontent = getChildElement(cparent,"box");
	var lastContentHeight = ccontent[ccontent.length-1].offsetTop;
	// 滚动条对顶部的偏移
	var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
	var pageheight = document.documentElement.clientHeight||document.body.clientHeight;
	//console.log(lastContentHeight+":"+scrollTop+":"+pageheight);
	if(lastContentHeight < scrollTop+pageheight){
		return true;
	}
}


function imgLocation(parent,content){
	// 将parent下的所有内容全部取出
	var cparent = document.getElementById(parent);	
	var ccontent = getChildElement(cparent,content); //得到数组
	var imgWidth = ccontent[0].offsetWidth+7; //得到图片的宽度
	// var n = document.documentElement.clientWidth  //得到屏幕的宽度
	var num = Math.floor(document.documentElement.clientWidth / imgWidth);
	cparent.style.cssText="width:"+imgWidth*num+"px;margin: 0 auto";

	// 获取图片高度的数组
	var BoxHeightArr = [];
	for(var i = 0; i < ccontent.length; i++){
		if(i < num){
			// 获取第一行图片的高度
			BoxHeightArr[i] = ccontent[i].offsetHeight;
		}
		else{
			// 得到数组的最小值
			var minheight = Math.min.apply(null,BoxHeightArr);
			var minIndex  = getminheightLocation(BoxHeightArr,minheight);
			ccontent[i].style.position = "absolute";
			ccontent[i].style.top = minheight+"px";
			// ccontent[minIndex].offsetLeft 得到当前局左的位置
			ccontent[i].style.left = ccontent[minIndex].offsetLeft+"px";
			// 当前高度最小的盒子加上追加的盒子的高度
			BoxHeightArr[minIndex] = BoxHeightArr[minIndex]+ccontent[i].offsetHeight;
		}
	}
}

function getminheightLocation(BoxHeightArr,minHeight){
	for(var i in BoxHeightArr){
		if(BoxHeightArr[i] == minHeight){
			return i;
		}
	}
}

//得到所有的子元素
function getChildElement(parent,content){
	var contentArr = [];
	//得到所有的子元素
	var allcontent = parent.getElementsByTagName('*');
	for(var i = 0; i < allcontent.length; i++){
		// 如果className == "box" 就添加到数组
		if(allcontent[i].className == content){
			contentArr.push(allcontent[i]);
		}
	}
	return contentArr;
}
