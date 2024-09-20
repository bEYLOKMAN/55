function zamanAsimi()
{
   if (beklemeSuresi>0)
   {
      setTimeout("zamanAsimi()",1000)
      goster(true);
      beklemeSuresi--;
   }
   else goster(false);
}
function goster(ne)
{
   for (var i=0;i<tuslar.length;i++)
   {
      tuslar[i].disabled = ne;
      tuslar[i].value = ne?beklemeSuresi:"İndir";
   }
}

var beklemeSuresi = 25;
var tuslar;
window.onload=function()
