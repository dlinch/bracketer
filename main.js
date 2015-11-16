// Function to shuffle array
var bucketNumber = 4;
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
  console.log(shuffledArray);
  localStorage.setItem('shuffledItems', shuffledArray)
  for(i=0; i<shuffledArray.length; i++){

    var item = "<p>" + shuffledArray[i] + "</p>";
  // console.log(shuffledArray[0]);
    $('#bucket-'+i).prepend(item);
  }

}

// jQuery to take input items and assign them to an array.
var bracketItems = [];
$('document').ready(function(){

$('#form').on('submit', function(event){

  event.preventDefault();
  var data = $('#bracketInput').val();
  console.log(data);
  bracketItems.push(data);
  this.reset();

})

// jQuery Event Listener to invoke appendmachine to add the bracketItems array
// to the divs.

$('#bracketize').on('click', function(){
  appendMachine(bracketItems);
})
})

$('#clearBracket').on('click', function(){
  for(i=0; i<bucketNumber; i++){
    $('#bucket-'+i).innerHTML("");
  }
})
