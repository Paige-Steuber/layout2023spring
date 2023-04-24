let map_btn = document.getElementById("img_map_icon");
let inventory_btn = document.getElementById("inventory_btn");

let heart = document.getElementById("heart_interaction");
let heart_click = 0;

let popup_box = document.getElementById("pop_up_box");
let popup_img = document.getElementById("popup_img");
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
    popup_img.src="assets/MAP_POPUP.svg"

};

inventory_btn.onclick = function(){
    popup_box.classList.toggle('active');
    popup_box.style.opacity = 1;
    popup_box.style.display = "block";
    popup_img.src="assets/INVENTORY_POPUP.svg"

};



heart.onclick = function(){
    console.log("heart");
    heart_click +=1;

    if(heart_click == 1){
        heart.src="assets/HEART_HEALTH_QUARTER.svg"
    }
    if(heart_click == 2){
        heart.src="assets/HEART_HEALTH_HALF.svg"
    }
    if(heart_click == 3){
        heart.src="assets/HEART_HEALTH_LAST_QUARTER.svg"
    }
    if(heart_click == 4){
        heart.src="assets/HEART_HEALTH_EMPTY.svg"
        heart.classList.toggle('beat');
        
    }
    if(heart_click == 5){
        heart_click =0;
        heart.src="assets/HEART_HEALTH_FULL.svg"
        heart.classList.toggle('beat');

    }

};