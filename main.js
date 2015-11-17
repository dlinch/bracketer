
// Function to shuffle array
//-------------------------------------------------------
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
//-------------------------------------------------------
var appendMachine = function(array){

  localStorage.setItem('appendedArray', JSON.stringify(array))
  for(i=0; i<array.length; i++){

    var item = "<p>" + array[i] + "</p>";
    $('#bucket-'+i).empty();
    $('#bucket-'+i).prepend(item);
  }

}

// jQuery to take input items and assign them to an array.
//-------------------------------------------------------
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

    if($('#bracketInput').hasClass('hide')){
      event.preventDefault();
      var data = $('textarea').val();
      console.log("textarea input")
      bracketItems = data.split(',')

      for(i=0; i<bracketItems.length; i++){
      $('.submitted').append('<p>'+ bracketItems[i]  + ',&nbsp;</p>')
      }
      this.reset();
    }
      else {
      event.preventDefault();
      var data = $('#bracketInput').val();
      console.log(data);
      bracketItems.push(data);
      this.reset();
      $('.submitted').append('<p>' + data + ',&nbsp;</p>');
}
}
})

// jQuery Event Listener to invoke appendmachine to add the bracketItems array
// to the divs.
//-------------------------------------------------------
$('#bracketize').on('click', function(){

  var shuffledArray = shuffleArray(bracketItems);
  console.log(shuffledArray);
  appendMachine(shuffledArray);
  $(this).addClass('redBorder');
})

// Clear bracket and submission div
//-------------------------------------------------------
$('#clearBracket').on('click', function(){
  for(i=0; i<bucketNumber; i++){
    $('#bucket-'+i).empty();
    }
    $('.submitted').empty();
    $('#restoreBracket').removeClass('hide')
    bracketItems = [];
    $('#bracketize').removeClass('redBorder');
    $('body p').remove();

})

// Restore most recent bracket from local storage
//-------------------------------------------------------
$('#restoreBracket').on('click', function(){
  var restoredBracket = JSON.parse(localStorage.getItem('appendedArray'))
  console.log(restoredBracket);
  appendMachine(restoredBracket);
  $('#bracketize').addClass('redBorder');
  bracketItems= restoredBracket;
  // $('submitted').append(restoredBracket[i]+", ");
})


// Toggle between list input and single item input
//-------------------------------------------------------
  $('#listButton').on('click', function(){
    $('textarea').toggleClass('hide');
    $('#bracketInput').toggleClass('hide')
  })

// Remove most recent item added to submission staging area
//---------------------------------------------------------
$('#removeLast').on('click', function(){
  bracketItems.pop();
  console.log(bracketItems);

  $('p:last-child').remove();
})

// Remove current buckets on page, append new buckets based on selected option.
//----------------------------------------------------------------
var bucketNumber = 4;
$('#bracketSize').change(function(){
  $('select option:selected').each(function(){
    $('.container').empty();
    $('#bracketize').removeClass('redBorder');
    bucketNumber = parseInt(2*($(this).val())-1);
    for(i=0; i<bucketNumber; i++){
      var newBucket = $('<div id="bucket-'+ i + '" class="bucket">'+i+'</div>')
      $('.container').append(newBucket);
    }
  })
})







}) // End of document.ready function
