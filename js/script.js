  $(function () {

	var Spantext = ["1", "2", "3","4","5","6","7"];
	var index = 0;

setInterval(function() {
    $("span").text(Spantext[index]);
    index = (index + 1) % Spantext.length;
}, 100);

  })