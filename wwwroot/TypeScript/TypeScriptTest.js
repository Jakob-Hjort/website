var TypeScriptConstant = 300;
$(document).ready(function () {
    $("#txtTest").val("margin-left " + TypeScriptConstant.toString() + "px");
    $("#txtTest").css("margin-left", TypeScriptConstant);
    $(".ClassMustBePlacedManyTimesAtOneHTMLPage").css("margin-left", TypeScriptConstant + 50);
    $("#IdMustOnlyBePlacedOneTimeAtOneHTMLPage").css("margin-left", TypeScriptConstant - 50);
});
//# sourceMappingURL=TypeScriptTest.js.map