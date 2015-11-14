// Function to shuffle array
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

// Function to append shuffled array items to body divs
var appendMachine = function(array){
  var shuffledArray = shuffleArray(array);
  // console.log(shuffledArray);
  for(i=0; i<4; i++){
    var item = shuffledArray[i]
    var concatItem = "<p>" + shuffledArray[i] + "</p>";

    $('#bucket-'+i).append(item)
  }

}
// jQuery to take input items and assign them to an array.
var bracketItems = [];
$('document').ready(function(){

$('#form').on('submit', function(event){

  event.preventDefault();
  var data = $('#form: input');
  bracketItems.push(data);
  console.log(bracketItems[0]);

})

$('#bracketize').on('click', function(){
  appendMachine(bracketItems);
})
})

// jQuery Event Listener to invoke appendmachine to add the bracketItems array
// to the divs.
