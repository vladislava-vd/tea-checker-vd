class TeaChecker {
    constructor(teaToken) {
        this.teaToken = teaToken;
    }

    // Method to check the total supply of tokens
    getTotalSupply() {
        return this.teaToken.totalSupply;
    }

    // Method to check the symbol of the token
    getSymbol() {
        return this.teaToken.symbol;
    }

    // Method to check the balance of a specific holder
    getBalance(holder) {
        return this.teaToken.balanceOf(holder);
    }

    // Method to check if a holder exists
    isHolder(holder) {
        return this.teaToken.holders.has(holder);
    }
}

// Example usage:
const teaToken = new TeaVD("CryptoTea", "TEA", 1000000, 18);
teaToken.mint(1000, "Developer1");
const teaChecker = new TeaChecker(teaToken);
console.log(teaChecker.getTotalSupply()); // Output: 1001000
console.log(teaChecker.getSymbol()); // Output: TEA
console.log(teaChecker.getBalance("Developer1")); // Output: 1000
console.log(teaChecker.isHolder("Developer2")); // Output: false
