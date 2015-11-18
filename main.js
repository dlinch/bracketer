var seedSelection = 4;
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
  for(i=0; (i<array.length && i<seedSelection); i++){
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

      if(bracketItems.length>0){
        var textArray= data.split(',')
        // if (textArray[textArray.length]===""){
        //   textarray.pop();
        // }
        bracketItems = bracketItems.concat(textArray)
        $('.submitted').empty();
      } else{
      bracketItems = data.split(',')
    }

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





$('#bracketSize').change(function(){
  $('select option:selected').each(function(){

    $('.container').empty();
    $('#bracketize').removeClass('redBorder');

    var columnFunction = function(){
      for (var i = 0; i < bracketColumns[textSeedSize]; i++) {
        var newColumn = $('<div id="column-'+i+'" class="col-xs-'+Math.floor(12/bracketColumns[textSeedSize])+'"></div>')
        $('.container').append(newColumn);
      }
    }

    var seedSize = ($(this).val())
    seedSelection = seedSize
    console.log(seedSize)

    bucketNumber = 2*parseInt(seedSize)-2;
    console.log(bucketNumber)

    var textSeedSize = "seed"+seedSize

    console.log(bracketColumns[textSeedSize])


    //--------------------4 Seed Styling-------------
    if(bracketColumns[textSeedSize]===4){
        columnFunction();

        for(i=0; i<bucketNumber; i++){

          var newBucket = $('<div id="bucket-'+ i + '" class="col-xs-12 bucket"></div>')
          if(i<2){
            $('#column-0').append(newBucket);
          }

          else if (i<4){
            $('#column-3').append(newBucket);
          }

          else if (i<5){
            $('#column-1').append(newBucket);
          }

          else {
            $('#column-2').append(newBucket);
          }
        }
    }

    //--------------------8 Seed Styling-------------
    if(bracketColumns[textSeedSize]===6){

        columnFunction();

        for(i=0; i<bucketNumber; i++){
          var newBucket = $('<div id="bucket-'+ i + '" class="col-xs-12 bucket"></div>')
          if(i<4){
            $('#column-0').append(newBucket);
          }

          else if(i<8){
            $('#column-5').append(newBucket);
          }

          else if(i<10){
            $('#column-1').append(newBucket);
          }

          else if(i<11){
            $('#column-2').append(newBucket);
          }

          else if(i<12){
            $('#column-3').append(newBucket);
          }

          else {
            $('#column-4').append(newBucket);
          }
        }
    }

    //--------------------16 Seed Styling-------------
    if(bracketColumns[textSeedSize]===8){

        columnFunction();

        for(i=0; i<bucketNumber; i++){
          var newBucket = $('<div id="bucket-'+ i + '" class="col-xs-12 bucket"></div>')
          if(i<8){
            $('#column-0').append(newBucket);
          }

          else if(i<16){
            $('#column-7').append(newBucket);
          }

          else if(i<20){
            $('#column-1').append(newBucket);
          }

          else if(i<22){
            $('#column-2').append(newBucket);
          }

          else if(i<23){
            $('#column-3').append(newBucket);
          }

          else if(i<24){
            $('#column-4').append(newBucket);
          }

          else if(i<26){
            $('#column-5').append(newBucket);
          }

          else if(i<30){
            $('#column-6').append(newBucket);
          }
          else {
            alert('Too many items! We left off the rest.')
          }
        }
    }



    //--------------------32 Seed Styling-------------
    if(bracketColumns[textSeedSize]===10){

        columnFunction();

        for(i=0; i<bucketNumber; i++){
          var newBucket = $('<div id="bucket-'+ i + '" class="col-xs-12 bucket"></div>')
          if(i<16){
            $('#column-0').append(newBucket);
          }

          else if(i<32){
            $('#column-9').append(newBucket);
          }

          else if(i<39){
            $('#column-1').append(newBucket);
          }

          else if(i<44){
            $('#column-2').append(newBucket);
          }

          else if(i<46){
            $('#column-3').append(newBucket);
          }

          else if(i<47){
            $('#column-4').append(newBucket);
          }

          else if(i<48){
            $('#column-5').append(newBucket);
          }

          else if(i<50) {
            $('#column-6').append(newBucket);
          }

          else if(i<54) {
            $('#column-7').append(newBucket);
          }

          else if (i<63){
            $('#column-8').append(newBucket);
          }
          else {
            alert('Too many items! We left off the rest.')
          }

        }
    }

    //--------------------64 Seed Styling-------------
    if(bracketColumns[textSeedSize]===12){

      columnFunction();

      for(i=0; i<bucketNumber; i++){
        var newBucket = $('<div id="bucket-'+i+'" class="col-xs-12 bucket"></div>')

        if(i<32){
          $('#column-0').append(newBucket);
        }

        else if(i<64){
          $('#column-11').append(newBucket);
        }

        else if(i<80){
          $('#column-1').append(newBucket);
        }

        else if(i<88){
          $('#column-2').append(newBucket);
        }

        else if(i<92){
          $('#column-3').append(newBucket);
        }

        else if(i<94){
          $('#column-4').append(newBucket);
        }

        else if(i<95){
          $('#column-5').append(newBucket);
        }

        else if(i<96){
          $('#column-6').append(newBucket);
        }

        else if(i<98){
          $('#column-7').append(newBucket);
        }

        else if(i<102){
          $('#column-8').append(newBucket);
        }

        else if (i<110){
          $('#column-9').append(newBucket);
        }

        else if(i<126){
          $('#column-10').append(newBucket);
        }

        else {
          alert('Too many items! We left off the rest.')
        }
      }


    }




})
})
// Column sizing object
//-------------------------------------------------------
var bracketColumns = {
  seed4: 4,
  seed8: 6,
  seed16: 8,
  seed32: 10,
  seed64: 12
}

// NFL AJAX call on button progress
// -------------------------------------------------------------
$('#nfl').on('click', function(){

  $.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.fantasydata.net/nfl/v2/JSON/Teams/2015REG",
    beforeSend: function(xhrObj){
      xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', apiKey);
    },
    type: "GET",
    data: "{body}",
  })

  .done(function(data){
    $('option[value="32"]').attr('selected', true);
    $('#bracketSize').trigger('change');
    console.log(data);
    var nflTeams=[];
    for(i=0; i<data.length;i++){
      var team = data[i]
      nflTeams[i]= team['Name']
      }
    var nflShuffle = shuffleArray(nflTeams);
    appendMachine(nflShuffle);
    })

  .fail(function(){
    alert("Didn't work, yo!")
  })


})



}) // End of document.ready function
