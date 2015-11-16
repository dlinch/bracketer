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

  localStorage.setItem('appendedArray', JSON.stringify(array))
  for(i=0; i<array.length; i++){

    var item = "<p>" + array[i] + "</p>";
    $('#bucket-'+i).empty();
    $('#bucket-'+i).prepend(item);
  }

}

// jQuery to take input items and assign them to an array.
var bracketItems = [];
$('document').ready(function(){

$('#form').on('submit', function(event){

  if ($('#bracketize').hasClass('redBorder'))
  {
    // debugger;
    event.preventDefault();
    console.log("if branch")

    var warning = $("<p><em>Bracket is closed, son!</em></p>")
    $('#bucket-0').before(warning);
  }
  else {
      console.log('else branch')
      event.preventDefault();
      var data = $('#bracketInput').val();
      console.log(data);
      bracketItems.push(data);
      this.reset();
      $('.submitted').append(data + ", ");
}
})

// jQuery Event Listener to invoke appendmachine to add the bracketItems array
// to the divs.

$('#bracketize').on('click', function(){

  var shuffledArray = shuffleArray(bracketItems);
  console.log(shuffledArray);
  appendMachine(shuffledArray);
  $(this).addClass('redBorder');
})


$('#clearBracket').on('click', function(){
  for(i=0; i<bucketNumber; i++){
    $('#bucket-'+i).empty();
    $('#restoreBracket').removeClass('hide')
    bracketItems = [];
    $('#bracketize').removeClass('redBorder');
  }
})

$('#restoreBracket').on('click', function(){
  var restoredBracket = JSON.parse(localStorage.getItem('appendedArray'))
  console.log(restoredBracket);
  appendMachine(restoredBracket);
  $('#bracketize').addClass('redBorder');
  bracketItems= restoredBracket;
})




})
