var $ = require("jquery");
var _ = require("lodash");


var list = [ "john", "justin", "kelly", "nathan", "leo"];

function addList(){
	var newItem = $("#newItem").val();
	list.push(newItem);
	printList();
	$("newItem").val("");
}

function printList(){
	var ourList = $("#nameList");
	ourList.html("");
	_(list).forEach(function(el){
		ourList.append("<li>" + el + "</li>");
	});
}

$(document).ready(printList);

window.addlist = addlist;
window.printList = printList;
message()



