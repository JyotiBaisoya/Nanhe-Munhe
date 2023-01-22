var Images = [
    "https://cdn.fcglcdn.com/brainbees/banners/microsoftteams-image_(28)1674195835702.png",
    "https://cdn.fcglcdn.com/brainbees/banners/merchan_hp_p10_ashwini_dsktp_feedingacc_21.1.20231674196460081.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp",
    "https://cdn.fcglcdn.com/brainbees/banners/baby_hug_segment_desktop-banner-all_milk_range-994-x-399px1674206863192.gif",
    "https://cdn.fcglcdn.com/brainbees/banners/mktng_hp_diaper_11thjan1674046582770.webp"
   
  ]
  let kavita=document.getElementById("slideshow")
  
  let i = 0;
  
  setInterval(function () {
      Images.forEach((element,index)=>{
          if(i===index){
      let myImg=document.createElement("img")
      myImg.setAttribute("src",element)
      kavita.innerHTML=null
  kavita.append(myImg)
          }
  });
      
     i++
     
   if(i>=Images.length){
      i=0
     }
  }, 3000);

 
document.getElementById("login-register").addEventListener("click",Index);

function Index(){
window.location.href="./login.html";

}