$(document).ready(setTimeout(function() {
	var headers = $('.ghx-column').not('.ui-sortable');
	var swimlanes = $('.ghx-column.ui-sortable');
	swimlanes.each(function(idx, val) {
		var sum = 0;
		$(val).find('div.ghx-issue .ghx-corner .aui-badge').each(function(idx, val) {
			if (!isNaN(parseInt($(val).text()))) {
				sum += parseInt($(val).text());
			}
		});

		$(headers[idx]).prepend('<div class="ghx-end" style="float:right;"><div class="ghx-corner"><span class="aui-badge" title="Total Story Points">' + sum + '</span></div></div>');
	});
},2000));
