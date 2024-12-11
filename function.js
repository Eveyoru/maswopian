function splitWord(word) {
    const mid = Math.floor(word.length / 2);
    return [word.slice(0, mid), word.slice(mid)];
}

function maswapianTransform(word) {
    // Return numbers and punctuation as-is
    if (!isNaN(word) || /^[?;!*%.,:]$/.test(word)) return word;

    // Handle ending punctuation
    const punctuation = word.match(/[?;!*%.,:]$/);
    const hasPunctuation = punctuation !== null;
    const coreWord = hasPunctuation ? word.slice(0, -1) : word;

    // Split word into two parts and transform
    const [part1, part2] = splitWord(coreWord);
    const transformed = "ma" + part2 + part1 + "da";

    // Reattach punctuation if needed
    return hasPunctuation ? transformed + punctuation[0] : transformed;
}

function reverseMaswapianTransform(word) {
    // Return numbers and punctuation as-is
    if (!isNaN(word) || /^[?;!*%.,:]$/.test(word)) return word;

    // Handle ending punctuation
    const punctuation = word.match(/[?;!*%.,:]$/);
    const hasPunctuation = punctuation !== null;
    const coreWord = hasPunctuation ? word.slice(0, -1) : word;

    // Check if the word starts with "ma" and ends with "da"
    if (coreWord.startsWith("ma") && coreWord.endsWith("da")) {
        const stripped = coreWord.slice(2, -2);
        const mid = stripped.length - Math.floor(stripped.length / 2);
        const part1 = stripped.slice(mid);
        const part2 = stripped.slice(0, mid);
        const original = part1 + part2;

        // Reattach punctuation if needed
        return hasPunctuation ? original + punctuation[0] : original;
    }

    return word; // Return the word unchanged if it doesn't match
}

function convertToMaswapian() {
    const inputText = document.getElementById('inputText').value.trim();
    if (!inputText) {
        alert("Please enter some text.");
        return;
    }

    const words = inputText.split(/\s+/); // Split text into words
    const converted = words.map(maswapianTransform).join(" ");
    displayOutput(converted);
}

function convertToNormal() {
    const inputText = document.getElementById('inputText').value.trim();
    if (!inputText) {
        alert("Please enter some text.");
        return;
    }

    const words = inputText.split(/\s+/); // Split text into words
    const converted = words.map(reverseMaswapianTransform).join(" ");
    displayOutput(converted);
}

function displayOutput(text) {
    const outputBox = document.getElementById('outputBox');
    outputBox.style.display = 'block';
    outputBox.textContent = text;
}