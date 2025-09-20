document.addEventListener('DOMContentLoaded', function() {

    const termsCheckbox = document.getElementById('termsCheckbox');
    const submitButton = document.getElementById('signupButton');
    

    if (termsCheckbox && submitButton) {

        termsCheckbox.addEventListener('change', function() {
            
            submitButton.disabled = !this.checked;
            

            console.log('Checkbox status:', this.checked);
            console.log('Button disabled:', submitButton.disabled);
        });
        

        console.log('Terms and conditions script loaded successfully');
    } else {

        console.error('Required elements not found');
    }
});