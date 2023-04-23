let map_btn = document.getElementById("img_map_icon");

let heart = document.getElementById("heart_interaction");
let heart_click = 0;

let popup_box = document.getElementById("pop_up_box");
let close_btn = document.getElementById("close_btn");

close_btn.onclick = function(){
    console.log("bye");
    popup_box.classList.toggle('active');
    popup_box.style.opacity = 0;
    popup_box.style.display = "none";

};

map_btn.onclick = function(){
    console.log("hi");
    popup_box.classList.toggle('active');
    popup_box.style.opacity = 1;
    popup_box.style.display = "block";

};

heart.onclick = function(){
    console.log("heart");
    heart_click +=1;

    if(heart_click == 1){
        heart.src="assets/COMPASS_TOP.svg"
    }

};