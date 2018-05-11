// tab切换
var tabHeader = document.querySelector(".tab-header"),
		tabList = document.querySelectorAll(".tab-header li"),
		itemList = document.querySelectorAll(".item-container ul"),
		load = document.querySelector(".load"),
		shade = document.querySelector(".shade");

tabHeader.addEventListener('click', function(e) {
	var target = e.target;
	if (target.tagName.toLowerCase() === 'li') {
		for (var i = 0; i < tabList.length; i++) {
			tabList[i].classList.remove("active");
		}
		target.classList.add("active");
	}
	var index = [].indexOf.call(tabList, target);
	if (index == 0) {
		tabList[0].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0;");
		tabList[1].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0.125rem;");
		tabList[2].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0;");
		load.setAttribute("style", "display: none");
		shade.setAttribute("style", "height: 100%");
	}
	if (index == 1) {
		tabList[0].setAttribute("style", "border-radius: 0.125rem 0.125rem 0.125rem 0;");
		tabList[1].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0;");
		tabList[2].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0.125rem;");
		load.setAttribute("style", "display: block");
		shade.setAttribute("style", "height: 16rem");
	}
	if (index == 2) {
		tabList[0].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0;border-right:0.025rem solid #99999a;");
		tabList[1].setAttribute("style", "border-radius: 0.125rem 0.125rem 0.125rem 0;");
		tabList[2].setAttribute("style", "border-radius: 0.125rem 0.125rem 0 0;border-left: 0;");
		load.setAttribute("style", "display: none");
		shade.setAttribute("style", "height: 16rem");
	}
	if (target.tagName.toLowerCase() === 'li') {
		for (var i = 0; i < itemList.length; i++) {
			itemList[i].classList.remove("active");
		}
		itemList[index].classList.add("active");
	}
})

// 点击搜索框弹出模态框
var search = document.querySelector('.search input'),
		startSearch = document.querySelector('.start-search'),
		backBtn = document.querySelector('.back-btn'),
		modal = document.querySelector('.modal'),
		shade = document.querySelector('.shade');

search.addEventListener('click', function(e) {
	e.stopPropagation();
	shade.setAttribute('style', 'display: block')
})

document.addEventListener('click', function(e) {
    shade.setAttribute('style', 'display:none');
    showJudge()
});

backBtn.addEventListener('click', function(e) {
	e.stopPropagation();
    shade.setAttribute('style', 'display:none');
    showJudge()
});

startSearch.addEventListener('click', function(e) {
	e.stopPropagation();
    shade.setAttribute('style', 'display:none');
    showJudge()
});

 modal.addEventListener('click', function(e) {
    e.stopPropagation();
    shade.setAttribute('style', 'display: block');
});

 // 模态框搜索条件选择
var cityHeader = document.querySelector('.city-list ul'),
		cityList = document.querySelectorAll('.city-item li span'),
		yeildHeader = document.querySelector('.yeild-list ul'),
		yeildList = document.querySelectorAll('.yeild-list ul li span'),
		industryHeader = document.querySelector('.industry-item'),
		industryList = document.querySelectorAll('.industry-item li span');

cityHeader.addEventListener('click', function(e) {
	e.stopPropagation();
	var clickNode = e.target;
	if (clickNode.tagName.toLowerCase() === "span") {
		for (var i = 0; i < cityList.length; i++) {
			cityList[i].classList.remove('active')
		}
		clickNode.classList.add('active');
	}
})

yeildHeader.addEventListener('click', function(e) {
	e.stopPropagation();
	var clickNode = e.target;
	if (clickNode.tagName.toLowerCase() === "span") {
		for (var i = 0; i < yeildList.length; i++) {
			yeildList[i].classList.remove('active')
		}
		clickNode.classList.add('active');
	}
})

industryHeader.addEventListener('click', function(e) {
	e.stopPropagation();
	var clickNode = e.target;
	if (clickNode.tagName.toLowerCase() === "span") {
		for (var i = 0; i < industryList.length; i++) {
			industryList[i].classList.remove('active')
		}
		clickNode.classList.add('active');
	}
})


// 如果模态框隐藏，则重置选择
function showJudge() {
	var style = shade.getAttribute('style');
	if (style === 'display:none') {
		for (var i = 0; i < cityList.length; i++) {
			cityList[i].classList.remove('active');
		}
		cityList[0].classList.add('active');

		for (var i = 0; i < yeildList.length; i++) {
			yeildList[i].classList.remove('active')
		}
		yeildList[0].classList.add('active');

		for (var i = 0; i < industryList.length; i++) {
			industryList[i].classList.remove('active')
		}
		industryList[0].classList.add('active');
	}
}
