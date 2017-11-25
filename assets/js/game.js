$(document).ready(function() {

 var wins = 0;
 var losses = 0;
 var totalscore = 0;
 var randomNumber = "";
 var Isfinished = false;
 setupRandomNumbers();

function setupRandomNumbers () {

   $('#wins').text(wins);
   $('#losses').text(losses);
   $('#score').text(totalscore);
   randomNumber = returnRandomNumber();
   $('#random-number').text(randomNumber);
   $('.diamond').val(returnCrystalRandomNumber());
   $('.ruby').val(returnCrystalRandomNumber());
   $('.sapphire').val(returnCrystalRandomNumber());
   $('.amethyst').val(returnCrystalRandomNumber());

}

function returnCrystalRandomNumber () {

    var randomCrystalNumber = Math.floor((Math.random() * 12) + 1);
    return randomCrystalNumber;
}

function returnRandomNumber () {
    var randomNumber = Math.floor((Math.random() * 100) + 19);
    return randomNumber;
}


$('.crystal').on('click', function(event) {

      // calculate total score
      if (totalscore === 0) {
          totalscore = $(this).val();
          $('#score').text(totalscore);
          console.log(totalscore);
      } else if (parseInt(totalscore) == parseInt(randomNumber)) {
         wins ++;
         $('#wins').text(wins);
         setupRandomNumbers();
         totalscore = 0;
         $('#score').text(totalscore);
      } else if (parseInt(totalscore) > parseInt(randomNumber) ) {        
          losses ++;
          $('#losses').text(losses);
          setupRandomNumbers();
          totalscore = 0;
          $('#score').text(totalscore);
      }
      else {
          totalscore = parseInt(totalscore) + parseInt($(this).val());
          $('#score').text(totalscore);
      } 

   });



});