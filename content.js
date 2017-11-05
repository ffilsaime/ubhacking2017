
alert("Test!1");
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log("test");
alert(firstHref);
function getPageHTML(){
	return "<html>" + $("html").html() + "</html>";
}
