// tab切换
var tabHeader = document.querySelector('.tab-header'),
		tabList = document.querySelectorAll('.tab-header>li'),
		listContainer = document.querySelectorAll('.list-container');

tabHeader.addEventListener('click', function(e) {
	var clickNode = e.target; 
	if(clickNode.tagName.toLowerCase() === 'li'){
			for(var i=0; i<tabHeader.children.length;i++){
				tabList[i].classList.remove('active');
			}
			clickNode.classList.add('active');
			var index = [].indexOf.call(tabList,clickNode);
			//tabLis返回的是类数组对象，没有indexOf方法，所以要用到call，call()的官方解释，“调用一个对象的一个方法，以另一个对象替换当前对象。”，
			for(var i=0; i<listContainer.length;i++){
				listContainer[i].classList.remove('active');
			}
			listContainer[index].classList.add('active');
		}
})


// 点击出现模态框
var btn = document.querySelector('.btn button'),
		overlay = document.querySelector('.overlay'),
		modal = document.querySelector('.modal');

btn.addEventListener('click', function(e) {
	e.stopPropagation();
	overlay.setAttribute('style', 'display: block');
});

modal.addEventListener('click', function(e) {
	e.stopPropagation();
	if (e.target.classList.contains('cancle-btn')) {
		overlay.setAttribute('style', 'display: none');
	}
})