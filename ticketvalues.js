var existingTimeout = null;

$(document).ready(setTimeout(function() {
	displayPointsHeader();

	$('#js-work-quickfilters a').on('click', function() {
		if (existingTimeout != null) {
			clearTimeout(existingTimeout);
			existingTimeout = null;
		}
		existingTimeout = setTimeout('displayPointsHeader()', 1000);
	});
		
},2000));

function displayPointsHeader() {
	existingTimeout = null;
	var headers = $('.ghx-column-headers .ghx-column');
	var swimlanes = $('.ghx-swimlane .ghx-column');
	var overallSum = 0;
	swimlanes.each(function(idx, val) {
		var sum = 0;
		$(val).find('div.ghx-issue .ghx-corner .aui-badge').each(function(idx, val) {
			if (!isNaN(parseInt($(val).text()))) {
				sum += parseInt($(val).text());
			}
		});
		overallSum += sum;

		$(headers[idx]).prepend('<div class="ghx-end" style="float:right;"><div class="ghx-corner"><span class="aui-badge" title="Total Story Points">' + sum + '</span></div></div>').find('h2').css('display', 'inline');
	});

	var selector = $('.js-quickfilter-button.ghx-active');
	if (selector.find('.points').length == 0) {
		selector.append(' (<span class="points">' + overallSum + '</span>)');
	} else {
		selector.find('.points').text(overallSum);
	}
}
