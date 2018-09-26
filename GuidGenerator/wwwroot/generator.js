(function () {
    initMono(["_framework/_bin/GuidGeneratorClient.dll"], function () {
        el("loading-indicator").style.display = "none";
        el("generator").style.display = "block";

        generateAndShowNewGuid(); // Generate one by default.
    });

    el("btn-action-new-guid").onclick = function (e) {
        e.preventDefault();
        generateAndShowNewGuid();
    };

    function generateAndShowNewGuid() {
        var uppercase = el("ckbUppercase").checked ? 1 : 0;
        var result = invokeMonoMethod("GuidGeneratorClient", "GuidGeneratorClient", "GuidHelper", "NewGuid", ["D", uppercase]);
        el("guid-placeholder").innerText = result;
    }

    function el(id) {
        return document.getElementById(id);
    }
})();