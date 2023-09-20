// Awards and accreditations Filters
$('.awardsAllBtn').click(function() {
   $('#awardsAwards, #awardsCorpCert, #awardsIndiCert').removeClass('hide');
});

$('.awardsAwardsBtn').click(function() {
		$('#awardsAwards, #awardsCorpCert, #awardsIndiCert').removeClass('hide');
  	$('#awardsCorpCert, #awardsIndiCert').addClass('hide');
});

$('.awardsCorpCertBtn').click(function() {
		$('#awardsAwards, #awardsCorpCert, #awardsIndiCert').removeClass('hide');
  	$('#awardsAwards, #awardsIndiCert').addClass('hide');
});

$('.awardsIndiCertBtn').click(function() {
		$('#awardsAwards, #awardsCorpCert, #awardsIndiCert').removeClass('hide');
  	$('#awardsAwards, #awardsCorpCert').addClass('hide');
});



