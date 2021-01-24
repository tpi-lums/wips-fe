document.getElementById('ss-form').addEventListener('submit', async(e) => {

    e.preventDefault();
   
    let body = {};
    for (let elem of e.target) {
        body[elem.name] = elem.value;
    }

    let response = await fetch('{{api}}/sendMessage', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    });

    let res = await response.json();
    
    if (response.status == 200) {
        setCaptchaError();
        for (let elem of e.target) {
            elem.disabled = true;
        }   
        let prompt = document.getElementById('form-prompt');     
        prompt.classList.remove('is-hidden');
    } else {
        if (res.err == 'BAD_CAPTCHA') {
            setCaptchaError('Invalid captcha code!')
        }
    }


});

async function loadCaptcha() {
    try {
        let response = await fetch('{{api}}/getCaptcha');
        let res = await response.json();
        document.getElementsByName('captchaKey')[0].value = res.key;
        document.getElementById('captcha').src = 'data:image/png;base64,' + res.captcha;
    } catch (e) {
        setCaptchaError('Failed to load captcha!');
    }
}

function setCaptchaError(err) {
    let classList = document.getElementsByName('captchaValue')[0].classList;
    let captchaError = document.getElementById('captcha-error');
    if (err && err != '') {
        classList.add('is-danger');
        captchaError.innerText = err;
    } else {
        classList.remove('is-danger');
        captchaError.innerText = '';
    }
}

loadCaptcha();

