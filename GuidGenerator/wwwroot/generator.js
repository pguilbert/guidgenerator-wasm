(function () {
    initMono(["_framework/_bin/GuidGeneratorClient.dll"], function () {
        el("loadingIndicator").style.display = "none";
        el("generator").style.display = "block";

        generateAndShowNewGuid(); // Generate one by default.
    });

    el("btn-action-new-guid").onclick = function (e) {
        e.preventDefault();
        generateAndShowNewGuid();
    };

    function generateAndShowNewGuid() {
        var result = invokeMonoMethod("GuidGeneratorClient", "GuidGeneratorClient", "GuidHelper", "NewGuid", []);
        el("guid-placeholder").innerText = result;
    }

    function el(id) {
        return document.getElementById(id);
    }
})();