chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
	if (request.message=="browserAction"){
		var link = $('h3.r')
		link.click(function(){
			var d = this.nextSibling
			var description = $(d).find('span.st').text()
			var index = description.lastIndexOf("-")
			if (index>=0){
				var description = description.slice(index+2,description.length-1)
			}
			chrome.runtime.sendMessage({"message":"linkClicked","description":description})
		})		
	}
})

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){
		if (request.newmessage=="newKeyName"){
					console.log(request.msg)
					var p = document.getElementsByTagName('p')
					for (n=0;n<p.length;n++){
						console.log(p[n].textContent)
						if (p[n].textContent.includes(request.msg)){
							console.log('found a match at paragraph' + p[n])
							var newStr = p[n].textContent.replace(request.msg,"<span style='background-color:yellow'>" + request.msg + "</span>")
							p[n].innerHTML=newStr
					        $('html, body').animate({
					        scrollTop: $('p:eq('+n+')').offset().top + 'px'
					        }, 'fast')			
							return
						}
						else{console.log('no match found')}
					}
			}
		}
)
//})	
//})
