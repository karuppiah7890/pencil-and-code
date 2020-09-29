function run() {
    const htmlInput = document.getElementById("html-input")
    const htmlOutput = document.getElementById("html-output")
    htmlInput.addEventListener("keyup", function () {
        htmlOutput.setAttribute("srcdoc", htmlInput.value)
    })
}

if (["complete", "interactive"].includes(document.readyState) &&
    document.body) {
    run();
} else {
    document.addEventListener("DOMContentLoaded", run, false);
}