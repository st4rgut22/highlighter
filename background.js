chrome.browserAction.onClicked.addListener(function(tab){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	    var activeTab = tabs[0];
		chrome.tabs.sendMessage(activeTab.id,{"message":"browserAction"})
	  });
})
chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if (request.message=="linkClicked"){
		var d = request.description
		console.log(d)
		if (d.indexOf('.')>=0){ //this will always evaluate to true and execute, leaving empty string ||||
			var d = d.slice(0,d.indexOf('.')) //get a snippet of text
		}
	}
	setTimeout(function(){chrome.storage.local.set({"keyName": d});},2000)
})
/*
chrome.runtime.onMessage(function(request,sender,sendResponse){
	if (request.message=="linkClicked"){
		var description = request.description
	}
	var description = d
	var higlightThis = document.match("description")
	chrome.highlight(highlightThis)
})*/