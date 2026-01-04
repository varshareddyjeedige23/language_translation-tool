async function translateText() {

    const text = document.getElementById("inputText").value;
    const source = document.getElementById("sourceLang").value;
    const target = document.getElementById("targetLang").value;

    if (text.trim() === "") {
        alert("Please enter text");
        return;
    }

    try {
        const url =
            "https://translate.googleapis.com/translate_a/single?client=gtx"
            + "&sl=" + source
            + "&tl=" + target
            + "&dt=t&q=" + encodeURIComponent(text);

        const response = await fetch(url);
        const result = await response.json();

        document.getElementById("outputText").value =
            result[0][0][0];

    } catch (error) {
        alert("Translation failed");
        console.error(error);
    }
}
