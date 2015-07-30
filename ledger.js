
function computeResult() {
  var totalCredit = parseFloat($("#credit01").val()) +
                    parseFloat($("#credit02").val()) +
                    parseFloat($("#credit03").val()) +
                    parseFloat($("#credit04").val()) +
                    parseFloat($("#credit05").val());
  var totalDebit =  parseFloat($("#debit01").val()) +
                    parseFloat($("#debit02").val()) +
                    parseFloat($("#debit03").val()) +
                    parseFloat($("#debit04").val()) +
                    parseFloat($("#debit05").val());

  $("#totalDebit").val(totalDebit.toFixed(2)).hide().fadeIn("slow");
  $("#totalCredit").val(totalCredit.toFixed(2)).hide().fadeIn("slow");

}

function clearForm() {
  $("input").val("");
  $("[id^=credit]").val("0.00");
  $("[id^=debit]").val("0.00");
  $("input#totalCredit").val("0.00");
  $("input#totalCredit").val("0.00");
  $("input#totalDebit").val("0.00");
  $("table").hide().fadeIn("fast");
}

function displayGrandTotal(msg) {
  var div = '<div class="alert alert-info alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> '+msg+'</div>';
  $('#grandTotalDiv').empty();
  $('#grandTotalDiv').append(div);
  $('#grandTotalDiv').hide().fadeIn("slow");

}

function raiseError(msg) {
  var errorDiv = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>ERROR!</strong> '+msg+'</div>';
  $('#errMsgArea').empty();
  $('#errMsgArea').append(errorDiv);
  $('#errMsgArea').hide().fadeIn("slow");
}
