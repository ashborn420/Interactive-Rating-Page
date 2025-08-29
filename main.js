let liNum = document.querySelectorAll("li");
let subBtn = document.querySelector("button");
let rate = document.querySelector(".rate");


liNum.forEach(function(ele){
    ele.onclick = function() {
        liNum.forEach(function(ele){
            ele.classList.remove("active");
            ele.style.backgroundColor = "hsl(210, 19%, 18%)";   
        })
        this.classList.add("active");
        this.style.backgroundColor = "white";
        if (ele.classList.contains("active")){
            rate.innerHTML = ele.innerHTML;
        }
        
    }
})



subBtn.onclick = function() {
    let ratingDiv = document.getElementById("rating");
    let thanksDiv = document.querySelector(".thanks");
    ratingDiv.style.setProperty("display", "none");
    thanksDiv.style.setProperty("display", "flex");
    if (rate.innerHTML === ""){
            let sel = document.querySelector(".select");
            sel.innerHTML = "You Didn't Select a Rating ";
        }
}