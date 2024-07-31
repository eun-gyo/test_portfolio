$(function(){

    $('h1').on('click',function(){
        $(this).css({'color':'red'})
    })

})

let title = document.getElementById('tit')
title.addEventListener("click",function(){
    this.style.color="blue";
})