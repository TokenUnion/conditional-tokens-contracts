module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        coverage: {
            host: "localhost",
            network_id: "*",
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01,
            before_timeout: 0,
            test_timeout: 0
        },
        kovan: {
            host: "localhost",
            port: 8545,
            network_id: "42"
        },
        rinkeby: {
            host: "localhost",
            port: 8545,
            network_id: "4"
        },
    }
}
