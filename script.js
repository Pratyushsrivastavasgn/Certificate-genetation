
const certificates = {
    "PRAT1239": "certificates/certificate1.pdf",
    "MAHI1112": "certificates/certificate2.pdf",
    "DEF456": "certificates/certificate3.pdf"
};

document.getElementById('downloadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const uniqueId = document.getElementById('uniqueId').value.trim();
    const errorElement = document.getElementById('error');

    if (certificates[uniqueId]) {
    
        window.location.href = certificates[uniqueId];
    } else {
    
        errorElement.style.display = 'block';
    }
});
