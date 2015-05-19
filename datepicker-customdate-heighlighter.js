//csv data parsing functions  related to http://stackoverflow.com/questions/8442830/open-excel-file-and-export-to-json question

(function ( $ ) {
     $.fn.highlightdater = function(options) {
	  var databaseDates=[];
	  var tooltipdays=[];
	
	
	// default settings
	var settings = $.extend({
    CSV_URL         : '',
    CSV_COLUMN        : ',',
    CSV_ROW    : '\n',
    
      }, options);
	
	//end default settings
	

	
  // AJAX query to get the CSV data content
	
	$.get (settings.CSV_URL,null, function (data) {
     var result = parse_csv (data);
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
    var rows = data.split (settings.CSV_ROW);

    for (var i in rows) {
        if (i == 0) continue; // skip the first row

         var columns = rows[i].split (settings.CSV_COLUMN);
       // result.push ({ "value": columns[1], "text": columns[0] });
		//var databaseDates = [];
	     databaseDates.push(columns[0]);
		
    }
  
}
	

// parse the data and datepiker	
	
	 this.datepicker({
      beforeShowDay: setExistDays,
	  
    });
    
    return this;
		
	//	
		
		
    };
 
}( jQuery ));
