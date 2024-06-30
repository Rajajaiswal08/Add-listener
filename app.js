var item = document.querySelectorAll("#tab-parent li");
var boxes = document.querySelectorAll(".child");

for(item of item){
item.addEventListener(
    "click",
    function(event){
        var currentActive = document.querySelector(".active");
        currentActive.classList.remove("active");

        
        var currentopen = document.querySelector(".open");
        currentopen.classList.remove("open");
     
        var index = event.target.dataset.index;
            boxes[index].classList.add("open");

            event.target.classList.add("active");
    }
)
}