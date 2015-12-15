var inject = require('../../../lib/inject.js');

//JOB Screen specific Code
//add summary button
var bar = document.getElementsByClassName("btn-group pull-left text-left");

var summarybutton = document.createElement("a");
summarybutton.id = "lighthouseSummaryButton";
summarybutton.classList.add("btn");
summarybutton.classList.add("btn-sm");
summarybutton.classList.add("btn-default");
summarybutton.style.marginLeft = "20px";
summarybutton.style.background = "#175781";
summarybutton.style.borderColor = "#0f3a57";
summarybutton.style.color = "white";
summarybutton.href = "#"

summarybutton.innerHTML = "<img width='16px' style='width:16px;vertical-align: top;margin-right:5px' src='" + chrome.extension.getURL("icons/lh.png") + "'>Summary (Filtered)";
bar[0].appendChild(summarybutton);

var statsbutton = document.createElement("a");
statsbutton.id = "lighthouseStatsButton";
statsbutton.classList.add("btn");
statsbutton.classList.add("btn-sm");
statsbutton.classList.add("btn-default");
statsbutton.style.marginLeft = "20px";
statsbutton.style.background = "rebeccapurple";
statsbutton.style.borderColor = "#4c2673";
statsbutton.style.color = "white";
statsbutton.href = "#"

statsbutton.innerHTML = "<img width='16px' style='width:16px;vertical-align:top;margin-right:5px' src='" + chrome.extension.getURL("icons/lh.png") + "'>Statistics (Filtered)";
bar[0].appendChild(statsbutton);

var exportbutton = document.createElement("a");
exportbutton.id = "lighthousExportButton";
exportbutton.classList.add("btn");
exportbutton.classList.add("btn-sm");
exportbutton.classList.add("btn-default");
exportbutton.style.marginLeft = "20px";
exportbutton.style.background = "#d2322d";
exportbutton.style.borderColor = "#edadab";
exportbutton.style.color = "white";
exportbutton.href = "#"

exportbutton.innerHTML = "<img width='16px' style='width:16px;vertical-align:top;margin-right:5px' src='" + chrome.extension.getURL("icons/lh.png") + "'>Advanced Export (Filtered)";
bar[0].appendChild(exportbutton);

//inject our JS resource
inject('jobs/jobs.js');
