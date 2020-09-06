import ProviderSMTP from '../../../../SMTP/ProviderSMTP';

export const emailService = async function (username, email) {
    ProviderSMTP.sendEmail(username, email)
        .then(response => {
            console.log(response);
            return response
        })
        .catch(error => {
            console.log(error);
            return error
        })
}

export const emailServiceResetPassword = async function (username, email, token) {
    ProviderSMTP.sendEmailResetPassword(username, email, token)
        .then(response => {
            console.log(response);
            return response
        })
        .catch(error => {
            console.log(error);
            return error
        })
}




