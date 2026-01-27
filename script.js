const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');
const saveButton = document.getElementById('saveButton');
const createFileButton = document.getElementById('createFileButton');
const newFileNameInput = document.getElementById('newFileName');
const fileNameDisplay = document.getElementById('fileName');

// Create a new text file when the button is clicked
createFileButton.addEventListener('click', function() {
    fileContent.value = '';
    fileInput.value = '';
    // Download a new empty file with the specified name
    const fileName = newFileNameInput.value || 'newTextFile.txt';
    const link = document.createElement('a');
    const blob = new Blob([''], { type: 'text/plain' });
    link.download = fileName;
    link.href = URL.createObjectURL(blob);
    link.click();
    // Clear the input field after creating the file
    newFileNameInput.value = '';
    // Optionally, you can set focus to the text area for immediate editing
    fileContent.focus();
});


// Load the selected text file and display its content
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
            reader.onload = function(e) {
            fileContent.value = e.target.result;
        };
        reader.readAsText(file);
        // Display the name of the loaded file without .txt extension
        fileNameDisplay.value = file.name.replace(/\.txt$/, '');
    }
});


// Save the edited content back to a text file
saveButton.addEventListener('click', function() {
    const link = document.createElement('a');
    const blob = new Blob([fileContent.value], { type: 'text/plain' });

    //Get original name of the file
    const originalFileName = fileNameDisplay.value || 'textFile.txt';
    link.download = originalFileName;
    link.href = URL.createObjectURL(blob);
    link.click();
});