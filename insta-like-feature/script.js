var con = document.querySelector(".middle");
var like =document.querySelector(".liking");
const likedHeart = document.getElementById('likedHeart');

con.addEventListener("dblclick", function(){
    like.style.transform ='translate(-50%, -50%) scale(1)'
    like.style.opacity=0.8
    likedHeart.classList.toggle('liked');

    setTimeout(function(){
        like.style.transform ='translate(-50%, -50%) scale(0)'
    },2000)
    setTimeout(function(){
        like.style.opacity=0
    },1000)

    if (likedHeart.classList.contains('liked')) {
        unlikedHeart.style.display = 'none';
        
      } else {
        unlikedHeart.style.display = 'block';
        like.style.opacity=0;
      }
})
