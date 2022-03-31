function Neka()
{
  var predmet = $('#input1').val();
  var godina = $('#input2').val();
  var ects = $('#input3').val();
  var podadatak = "<tr><td id="+"predmetid"+">"+ predmet + "</td><td id="+"godinaid"+">"+ godina + "</td><td id="+"ectsid"+">"+ ects +"</td><td><button id="+"btn1"+">BRISI</button></td><td><input type="+"checkbox"+" id="+"btn2"+"></input></td></tr>";
  $("#tabla").append(podadatak);
}
$("#tabla").on("click","#btn1", function(){
  $(this).closest("tr").remove();
});
$("#tabla").on("change","#btn2", function(){
  if($(this).is(":checked"))
  {
      $(this).closest("tr").css("background-color","red");
  }
  else
  {
      $(this).closest("tr").css("background-color","yellow");
  }

});

$('#input4').on('keyup', function() {
  var value = $(this).val();
  var nekaj = new RegExp(value, "i");

  $('#tabla').find('tr').each(function() 
  {
      if(($(this).find('td#predmetid').text().search(nekaj) >= 0))
      {
          $(this).show();
      }
      else if(($(this).find('td#godinaid').text().search(nekaj) >= 0))
      {
          $(this).show();
      }
      else if(($(this).find('td#ectsid').text().search(nekaj) >= 0))
      {
          $(this).show();
      }
      else
      {
          $(this).not('.thead').hide();
      }
  });
});