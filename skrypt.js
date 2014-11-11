var licznik = 0;
var str = 1;

	var rysowanie= function(licznik) {
		if (licznik===0)
		{
			$('#glokno').load('galeria1.html');
		}
		if (licznik===1)
		{
			$('#glokno').load('galeria2.html');
		}
		if (licznik===2)
		{
			$('#glokno').load('galeria3.html');
		}
	}


$(document).ready(function(){
	

/*window.onbeforeunload = function(e) {
	console.log(str);
  	if (licznik===1)
	{
		console.log(str;
		$('#middle').load('galeria.html');
	}
	if (licznik===2)
	{
		console.log(str);
		$('#middle').load('info.html');
	}
};*/

	szerOkn = window.innerWidth;
	wysOkn = window.innerHeight;
	$("#naglowek").css("font-size",szerOkn/24);
			if (szerOkn <= 640)
		{
			$('#header').hide();
			$('#header_mini').show();
		}
		if (szerOkn > 640)
		{
			$('#header').show();
			$('#header_mini').hide();
		}
	$('.okno').css('padding-top',(wysOkn-200)/2);
	$( window ).resize(function() {
		szerOkn = window.innerWidth;
		wysOkn = window.innerHeight;
		
		//dynamiczna zmiana wielkości nagłówka
		$("#naglowek").css("font-size",szerOkn/24);
		
		//dynamiczne ukrywanie menu i włączanie menu ukrytego pod logiem
		if (szerOkn <= 640)
		{
			$('#menu').hide(1000);
			$('#header_mini').show();
		}
		if (szerOkn > 640)
		{
			$('#menu').show(1000);
			$('#header_mini').hide();
		}
		$('.okno').css('padding-top',(wysOkn-200)/2);
	});

		$('.galeria').click(function() {
			$('#middle').load('galeria.html');
			$('#header').css('top','12px');
			$('#middle1').load('galeria.html');
			$('#middle1').css('position','absolute');
			$('#header').css('margin-top','-12px');
			$('#footer1').css('position','absolute');
			$('#footer1').css('bottom','0px');
			str = 1;
		});
		$('.info').click(function() {
			$('#middle').load('info.html');
			$('#header').css('top','12px');
			$('#middle1').load('info.html');
			$('#middle1').css('position','absolute');
			$('#header').css('margin-top','-12px');
			$('#kontener').css('top','200px');
			$('#footer1').css('position','absolute');
			$('#footer1').css('bottom','0px');
			str = 2;
		});

	$('.info').click(function() {

		str = 2;
	});
	
	$('#przycisk').click(function() {
		var wartosc1 = $('input[name=checkListItem1]').val()
		var wartosc2 = $('input[name=checkListItem2]').val()
		var wartosc3 = $('input[name=checkListItem3]').val()
		var wartosc4 = document.getElementById("wiadomosc").value;
		if (wartosc1==='')
		{
			$('#1 a').remove();
			$('#1').append('<a>Wypełnij pole!</a>');
			$('input[name=checkListItem1]').css('outline-color','#FF0000');
			$('input[name=checkListItem1]').css('outline-style','solid');			
		}
		else
		{
			$('#1 a').remove();
			$('input[name=checkListItem1]').css('outline-color','none');
			$('input[name=checkListItem1]').css('outline-style','none');
		}
		if (wartosc2==='')
		{
			$('#2 a').remove();
			$('#2').append('<a>Wypełnij pole!</a>');
			$('input[name=checkListItem2]').css('outline-color','#FF0000');
			$('input[name=checkListItem2]').css('outline-style','solid');			
		}
				else
		{
			$('#2 a').remove();
			$('input[name=checkListItem2]').css('outline-color','none');
			$('input[name=checkListItem2]').css('outline-style','none');
		}
		if (wartosc4==='' || wartosc4==='Wypełnij pole!')
		{
			$('#wiadomosc').text('');
			$('#wiadomosc').append('Wypełnij pole!');
			$('#wiadomosc').css('outline-color','#FF0000');
			$('#wiadomosc').css('outline-style','solid');			
		}
		else
		{
			$('#wiadomosc').css('outline-color','none');
			$('#wiadomosc').css('outline-style','none');
		}
		
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test(wartosc3) || wartosc3==='')
		{
			$('#3 a').remove();
			$('#3').append('<a>Wypełnij pole!</a>');
			$('input[name=checkListItem3]').css('outline-color','#FF0000');
			$('input[name=checkListItem3]').css('outline-style','solid');
		 	alert("Błędny mail!");
		}
		else
		{
			$('#3 a').remove();
			$('input[name=checkListItem3]').css('outline-color','none');
			$('input[name=checkListItem3]').css('outline-style','none');
		}
	});
	
	
	$('#prawa').click(function() {
		licznik = licznik+1;
		licznik = licznik % 3;
		rysowanie(licznik);
		
	});		
	$('#lewa').click(function() {
		if (licznik===0) {licznik=licznik+3;}
		licznik = licznik-1;
		licznik = licznik % 3;
		rysowanie(licznik);
	});
	
	
	//size = screen.width/50
});