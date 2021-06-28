var images = ["https://postimg.cc/DSfmHHct","https://postimg.cc/4ms3Hqjm",
"https://postimg.cc/fVKKxGHy"];

var names = ["My GrandDad, The Oldest. Sadand Shrivastav","My GrandMom, 2nd Oldest. Indra Shrivastav",
"My Dad My Mom And Me All Together,Ashwini Shrivastav, Kunjal Shrivastav And Me Dhruv Shrivastav"]

var i = 0;
function update() {

    i++;
    var number_of_family_member_in_array = 3
    if(i > number_of_family_member_in_array )
  {
        i=0;
  }
var udateedImage = images[i];
var updatedNames = names[i];
document.getElementById("family_img").src= updatedNames;
document.getElementById("family_name").innerHTML= updatedNames;
}

