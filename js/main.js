const emailInput = document.getElementById('email');
const submitBtn = document.getElementById('submit');
const errorMessage = document.getElementById('error-message');
const errorImg = document.getElementById('error-img');

submitBtn.addEventListener('click', function(){
    if (!emailInput.value) {
        errorMessage.style.display = "none";
        errorImg.style.display = "none";
    } else {
        errorMessage.style.display = "block";
        errorImg.style.display = "block";
    }
});