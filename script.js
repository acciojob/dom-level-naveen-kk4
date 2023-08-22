//your JS code here. If required.
let element = document.getElementsByTagName("ul")[0];
let children = element.children;
let level = 0;
for(let child of children){
	level++;
	if(child.id==="level")window.alert(level);
}