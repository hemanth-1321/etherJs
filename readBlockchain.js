const { ethers } = require("ethers");
const { providers } = require("ethers");

const provider = new providers.JsonRpcProvider(
  "https://mainnet.infura.io/v3/862aff20daee4d0f9530d9cf2814f44c"
);

const queryBlockchain = async () => {
  try {
    const block = await provider.getBlockNumber();
    console.log(block);
  } catch (error) {
    console.error("Error querying the blockchain:", error);
  }
  const balance = await provider.getBalance(
    "0x7fC27e766B32B147044Fbdb91D41e62b617468E2"
  );

  const balanceEther = ethers.utils.formatEther(balance);
  console.log(balanceEther);
};

queryBlockchain();
