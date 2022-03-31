function Neka()
{
  var predmet = $('#input1').val();
  var godina = $('#input2').val();
  var ects = $('#input3').val();
  var podadatak = "<tr><td>"+ predmet + "</td><td>"+ godina + "</td><td>"+ ects + "</td><td><button id="+"btn1"+">BRISI</button></td></tr>"
  $("#tabla").append(podadatak);
}
$("#tabla").on("click","#btn1",function()
{
  $(this).closest("tr").remove();
});