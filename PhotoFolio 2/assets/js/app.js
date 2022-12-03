"use strict";
let footer=document.querySelector("#footer");
let head=document.querySelector("head");
let root=document.querySelector("#root");
head.innerHTML=HeadView();
root.innerHTML+=Root();

function Root(){
    return`
    ${HeaderView()}
    ${HeroView()}
    ${MainView()}
    ${FooterView()}
    ${FootView()}
    `
}
function HeadView(){
 
}
function HeaderView(){

}
function HeroView(){

}
function MainView(){

}

