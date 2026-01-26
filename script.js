const fileInput = document.getElementById('fileInput');
const fileContent = document.getElementById('fileContent');
const saveButton = document.getElementById('saveButton');

fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
            reader.onload = function(e) {
            fileContent.value = e.target.result;
        };
        reader.readAsText(file);
    }
});

saveButton.addEventListener('click', function() {
    const link = document.createElement('a');
    const blob = new Blob([fileContent.value], { type: 'text/plain' });

    //Get original name of the file
    const originalFileName = fileInput.files[0] ? fileInput.files[0].name : 'textFile.txt';
    link.download = originalFileName+'_edited.txt';
    link.href = URL.createObjectURL(blob);
    link.click();
});