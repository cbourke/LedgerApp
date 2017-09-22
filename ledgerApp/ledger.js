

/**
 * This function pulls data from the ledger form and
 * sums credits and debits, placing the resulting values
 * in the #totalDebit and #totalCredit input boxes.
 */
function computeResult() {

  //pull the values from the page's form
  var credit1 = parseFloat($("#credit01").val());
  var credit2 = parseFloat($("#credit02").val());
  var credit3 = parseFloat($("#credit03").val());
  var credit4 = parseFloat($("#credit04").val());
  var credit5 = parseFloat($("#credit05").val());

  var debit1 = parseFloat($("#debit01").val());
  var debit2 = parseFloat($("#debit02").val());
  var debit3 = parseFloat($("#debit03").val());
  var debit4 = parseFloat($("#debit04").val());
  var debit5 = parseFloat($("#debit05").val());

  //compute the totals for each
  var totalCredit = credit1 + credit2 + credit3 + credit4 + credit5;
  var totalDebit = debit1 + debit2 + debit3 + debit4 + debit5;

  //check for negative values
  if(credit1 < 0 || debit1 < 0) {
    raiseError("You cannot enter negative values.");
  }

  //place the totals in the page's form and animate them
  $("#totalDebit").val(totalDebit.toFixed(2)).hide().fadeIn("slow");
  $("#totalCredit").val(totalCredit.toFixed(2)).hide().fadeIn("slow");

}

/**
 * This function clears the input form, removing
 * text inputs and putting zero values into credit/debit
 * fields.
 */
function clearForm() {
  $("input").val("");
  $("[id^=credit]").val("0.00");
  $("[id^=debit]").val("0.00");
  $("input#totalCredit").val("0.00");
  $("input#totalCredit").val("0.00");
  $("input#totalDebit").val("0.00");
  $("table").hide().fadeIn("fast");
}

/**
 * This function displays the given message (msg) in an
 * informational div element and adds it to the page in the
 * #grandTotalDiv element
 */
function displayGrandTotal(msg) {
  var div = '<div class="alert alert-info alert-dismissible" role="alert">' +
            '<button type="button" class="close" data-dismiss="alert">' +
            '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> '+
             msg +
            '</div>';
  $('#grandTotalDiv').empty();
  $('#grandTotalDiv').append(div);
  $('#grandTotalDiv').hide().fadeIn("slow");

}

/**
 * This function displays the given message (msg) in an
 * error div element and adds it to the page in the
 * #errMsgArea element
 */
function raiseError(msg) {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert">' +
                 '<button type="button" class="close" data-dismiss="alert">' +
                 '<span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>'+
                 '<strong>ERROR!</strong> '+msg+'</div>';
  $('#errMsgArea').empty();
  $('#errMsgArea').append(errorDiv);
  $('#errMsgArea').hide().fadeIn("slow");
}
