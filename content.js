alert("Test!");
debug("test");
var firstHref = $("a[href^='http']").eq(0).attr("href");
alert(firstHref);
debug(firstHref);
