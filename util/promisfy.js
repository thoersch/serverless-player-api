const promisify = fn => {
    return new Promise((resolve, reject) => {
        fn((error, result) => {
            if (error) {
                reject(error)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports.promisify = promisify;