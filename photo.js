function uploadImage() {
    const fileInput = document.getElementById('photo-file');
    const progressBar = document.getElementById('upload-progress');
    const progressText = document.getElementById('progress-text');

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const fileSize = file.size;
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'index', true);

        xhr.upload.onprogress = function (e) {
            const progressPercentage = (e.loaded / fileSize) * 100;
            progressBar.style.width = progressPercentage + '%';
            progressText.textContent = Math.round(progressPercentage) + '%';
        };

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                
                console.log('Upload successful!');
        
                progressBar.style.width = '0%';
                progressBar.parentElement.style.display = 'none';
                fileInput.removeAttribute('disabled');
                progressText.textContent = '';
            }
        };

        xhr.send(formData);


        progressBar.parentElement.style.display = 'block';
        fileInput.setAttribute('disabled', 'disabled');
        progressText.textContent = 'Uploading...';
    } else {
        alert('Please select a file to upload.');
    }
}

function buyNow() {
    
    alert('Buy Now clicked!');
}