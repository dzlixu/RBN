/**
 * 装饰器模式
 */
var tree = {};
tree.decorate = function (){
	alert('Make sure the tree won\'t fall');
}
tree.getDecorator = function(deco){
	tree[deco].prototype = this;
	return new tree[deco];
}

tree.RedBalls = function(){
	this.decorate = function(){
		this.RedBalls.prototype.decorate();
		alert('Put on some red balls');
	}
}

tree.BlueBalls = function(){
	this.decorate =function(){
		this.BlueBalls.prototype.decorate();
		alert('Add blue balls');
	}
}
tree.Angel = function(){
	this.decorate = function(){
		this.Angel.prototype.decorate();
		alert('An angel on the top');
	}
}

tree = tree.getDecorator('BlueBalls');
tree = tree.getDecorator('Angel');
tree = tree.getDecorator('RedBalls');

tree.decorate();