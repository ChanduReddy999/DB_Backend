const env = () => {
    return process.env.NODE_ENV === 'production' ? { endpoint: '/prod/v1', port: 3000 } : { endpoint: '/dev/v1', port: 1000 }
}

module.exports = {
    ...env()
}