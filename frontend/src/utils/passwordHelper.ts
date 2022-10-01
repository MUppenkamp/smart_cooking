export const hidePassword = (password: string) => {
    return password.replace(/./g, '*');
}

export const saveHiddenPassword = (currPassword: string, changedPassword: string) => {
    return (currPassword || '') + changedPassword[changedPassword.length - 1]
}
