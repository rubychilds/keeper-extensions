// Runs in the context of web pages
alert("Keeping your data safe")

var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log("Hello");
console.log(firstHref);
