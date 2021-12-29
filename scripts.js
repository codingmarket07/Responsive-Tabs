var tabs = document.querySelectorAll(".tabs_header ul li");
var tabs_content = document.querySelectorAll(".tabs_content");

tabs.forEach(function(tab, tab_index){
	tab.addEventListener("click", function(){
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})
		tab.classList.add("active");

		tabs_content.forEach(function(content, content_index){
			if(content_index == tab_index){
				content.style.display = "block";
			}
			else{
				content.style.display = "none";
			}
		})

	})
})