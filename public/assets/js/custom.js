$(document).ready(function() {
    $(this).on('click', '#sortable', function() {
        $( "#sortable" ).sortable({
        axis: "x", // allow sorting only in horizontal direction
        revert: true, // animate the card back to its original position when sorting is cancelled
        cursor: "grabbing" // set the cursor style while dragging
    });
    $( "#sortable" ).disableSelection();
    })
    $(this).on('click', '#sortable2', function() {
        $( "#sortable2" ).sortable({
        axis: "x", // allow sorting only in horizontal direction
        revert: true, // animate the card back to its original position when sorting is cancelled
        cursor: "grabbing" // set the cursor style while dragging
    });
    $( "#sortable2" ).disableSelection();
    })
    $(this).on('click', '#sortable3', function() {
        $( "#sortable3" ).sortable({
        axis: "x", // allow sorting only in horizontal direction
        revert: true, // animate the card back to its original position when sorting is cancelled
        cursor: "grabbing" // set the cursor style while dragging
    });
    $( "#sortable3" ).disableSelection();
    })
    $(this).on('click', '#sortable4', function() {
        $( "#sortable4" ).sortable({
        axis: "x", // allow sorting only in horizontal direction
        revert: true, // animate the card back to its original position when sorting is cancelled
        cursor: "grabbing" // set the cursor style while dragging
    });
    $( "#sortable4" ).disableSelection();
    })
})