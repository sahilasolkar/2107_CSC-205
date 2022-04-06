function highlight(param) {

    //alert("workingfine!");

    // Select the whole paragraph
    var ob = new Mark(document.querySelector(".select"));

    // First unmark the highlighted word or letter
    ob.unmark();

    // Highlight letter or word
    ob.mark(
        document.getElementById("searchbox").value,
        { className: 'a' + param }
    );
}