var randomNumber = function (){
  return Math.floor(Math.random()*33)
}

var shuffleArray = function(array){
  var currentIndex= array.length, temporaryValue, randomIndex;
  while (currentIndex !==0 ){
    randomIndex= Math.floor(Math.random()*currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex]=array[randomIndex];
    array[randomIndex]= temporaryValue;
  }
  return array;
}
var bracketItems = [];

var appendMachine = function(array){
  var shuffledArray = shuffleArray(array);
  console.log(shuffledArray);
  for(i=0; i<4; i++){
    var item = "<p>" + shuffledArray[i] + "</p>";

    $('#bucket-'+i).append(item)
  }

}


$('document').ready(function(){

$('#form').on('submit', function(event){
  event.preventDefault();
  var data = $('#form:input');
  bracketItems.push(data);
  console.log(bracketItems);

})

})

$('#bracketize').on('click', function(){
  appendMachine(bracketItems);
})
