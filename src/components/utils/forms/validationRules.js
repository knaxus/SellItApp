const validation = (value, rules) => {
    let valid = true;
    for(let rule in rules) {
        switch(rule) {
            case "isRequired":
                valid = valid && validateRequired(value);
                break;
            case "isEmail":
                valid = valid && validateEmail(value);
                break;
            default:
                valid = true;
        }
    }
    return valid;
}

const validateRequired = value => {
    if(value !== '')
        return true;
    else
        return false;
}

const validateEmail = email => {
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(String(email).toLowerCase());
}

export default validation;