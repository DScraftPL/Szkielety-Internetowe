let metoda = value => {
    if(value.includes(' ')) {
        return value[0] + ' ' + value[value.indexOf(' ') + 1]
    }
    return value[0]
}

export default metoda