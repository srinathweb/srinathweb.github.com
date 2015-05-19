<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>



<script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>

<script src="http://code.jquery.com/ui/1.11.3/jquery-ui.js"></script>
<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.11.3/themes/smoothness/jquery-ui.css" />

<script>
$(document).ready(function(){
	
	//get data from csv file
	
	var CSV_URL = "http://localhost/datepiker/dates.csv";  //url for csv file
    var CSV_COLUMN = ','   ;                                //delimiter
    var CSV_ROW = '\n';
	 var databaseDates=[];
	
	
	// AJAX query to get the CSV data content
	
	$.get (CSV_URL, null, function (data) {
    var result = parse_csv (data);
    var e = create_select (result);
    document.body.appendChild (e);
     });
	 
	//
	function setExistDays(date) {
    var enabled = true;
    var cssClass = "";

    var day = date.getDate();
    var month = date.getMonth() + 1; //0 - 11
    var year = date.getFullYear();
    var compare = month + "/" + day + "/" + year;
    

      
    if (databaseDates.indexOf(compare) >= 0) cssClass = "exists";

    return new Array(enabled, cssClass);
}
 
	//end ajax call 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	
	// parse the data and datepiker
	
	function parse_csv (data) {
    var result = new Array();
    var rows = data.split (CSV_ROW);

    for (var i in rows) {
        if (i == 0) continue; // skip the first row

        var columns = rows[i].split (CSV_COLUMN);
       // result.push ({ "value": columns[1], "text": columns[0] });
		//var databaseDates = [];
	databaseDates.push(columns[0]);
		
    }

   
  // alert(databaseDates);
   // alert('ready');
	$( ".selector" ).datepicker({
  dayNamesMin: [ "ඉරි","සදු", "අග", "බදා", "බ්‍රහ", "සිකු", "සෙන" ],
     monthNames: [ "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජුනි", "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝම්බර්", "නොවැම්බර්", "දෙසැම්බර්" ],
     beforeShowDay: setExistDays
});
    
   
}
	

// parse the data and datepiker	
	
	
	
	
	
	
	
	
	});
</script>

<style>
.exists a.ui-state-default { background: red;  color: white; }
</style>



</head>

<body>



 <input class="selector" type="text">







</body>
</html>
