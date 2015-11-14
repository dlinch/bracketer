var randomNumber = function (){
  return Math.floor(Math.random()*33)
}

var shuffleArray = function(array){
  var currentIndex= array.length, temporaryValue, randomIndex;
  while (currentIndex !==0 ){
    randomIndex= Math.floor(Math.random()*currentIndex);
    currrentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex]=array[randomIndex];
    array[randomIndex]= temporaryValue;
  }
  return array;
}
var bracketItems = [];

$('document').ready(function(){

$('#form').on('submit', function(event){
  event.preventDefault();
  var data = $('#form:input');
  bracketItems.push(data);
  console.log(data);
})

})


var shuffledArray = shuffleArray(bracketItems);

for(i=0; i<32; i++){
  $('#bucket-'+i).append(shuffledArray[i])
}
