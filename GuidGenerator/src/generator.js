(function () {
    initMono(["_framework/_bin/GuidGeneratorClient.dll"], function () {
        el("loading-indicator").style.display = "none";
        el("generator").style.display = "block";

        generateAndShowNewGuid(); // Generate one by default.
    });

    function generateAndShowNewGuid() {
        var uppercase = el("ckbUppercase").checked ? 1 : 0;
        var stringFormat = el("sltStringFormat").value;
        var result = invokeMonoMethod("GuidGeneratorClient", "GuidGeneratorClient", "GuidHelper", "NewGuid", [stringFormat, uppercase]);
        el("guid-placeholder").innerText = result;
    }

    var eventHandler = function (e) {
        e.preventDefault();
        generateAndShowNewGuid();
    };

    el("btn-action-new-guid").onclick = eventHandler;
    el("ckbUppercase").onchange = eventHandler;
    el("sltStringFormat").onchange = eventHandler;

    function el(id) {
        return document.getElementById(id);
    }
})();