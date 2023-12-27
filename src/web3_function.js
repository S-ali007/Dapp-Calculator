const Web3 = require("web3");
const web3 = new Web3.Web3("http://127.0.0.1:8545");

const Calculator = require("./contract/Calculator.json");

// To check if the connection is established------------------------------------
// async function connection() {
//   const accounts = await web3.eth.getAccounts();
//   console.log("Connected accounts:", accounts,"Connection Successfull !");
// }

// Function to create an instance for the contract-------------------------------
// async function createContractInstance() {
//     const accounts = await web3.eth.getAccounts();

//     const networkId = await web3.eth.net.getId();
//     console.log("Network ID:", networkId);

//     const { address } = Calculator.networks[networkId];

//     const instance = new web3.eth.Contract(
//         Calculator.abi,
//         address
//     );

//     // console.log("Contract Instance:", instance);
//     console.log("Contract Address:", address);
//     // console.log( "Accounts",accounts)

//     return { instance, accounts };

//   }

// connecting metamask---------------------
async function connectWeb3Metamask() {
  const web3 = new Web3.Web3(Web3.Web3.givenProvider || window.ethereum);
  const account = await web3.eth.requestAccounts();

  const networkId = await web3.eth.net.getId();
  // console.log("Network ID:", networkId);
  const { address } = Calculator.networks[networkId];
  const instance = new web3.eth.Contract(Calculator.abi, address);
  return { instance, account };
}


async function addFunction(contractInstance, account, num1, num2) {
  try {
    const res = await contractInstance.methods
      .addNum(Number(num1), Number(num2))
      .send({ from: account });
    console.log("response of addition", res);

    // Retrieve the result directly from the transaction receipt
    const result = res.events.success.returnValues.value;
    console.log("Result of Addition:", result);

    return result;
  } catch (error) {
    console.error("Error in addFunction:", error);
    throw error;
  }
}
async function subFunction(contractInstance, account, num1, num2) {
  try {
    const res = await contractInstance.methods
      .subNum(Number(num1), Number(num2))
      .send({ from: account });
    console.log("response of Subtraction", res);

    // Retrieve the result directly from the transaction receipt
    const result = res.events.success.returnValues.value;
    console.log("Result of Subtraction:", result);

    return result;
  } catch (error) {
    console.error("Error in subFunction:", error);
    throw error;
  }
}
async function mulFunction(contractInstance, account, num1, num2) {
  try {
    const res = await contractInstance.methods
      .mulNum(Number(num1), Number(num2))
      .send({ from: account });
    console.log("response of Multiplication", res);

    // Retrieve the result directly from the transaction receipt
    const result = res.events.success.returnValues.value;
    console.log("Result of Multiplication:", result);

    return result;
  } catch (error) {
    console.error("Error in Multiplication:", error);
    throw error;
  }
}
async function divFunction(contractInstance, account, num1, num2) {
  try {
    const res = await contractInstance.methods
      .divNum(Number(num1), Number(num2))
      .send({ from: account });
    console.log("response of Division", res);

    // Retrieve the result directly from the transaction receipt
    const result = res.events.success.returnValues.value;
    console.log("Result of Division:", result);

    return result;
  } catch (error) {
    console.error("Error in Division:", error);
    throw error;
  }
}

// connection();
// createContractInstance();

module.exports = {
  // createContractInstance,
  addFunction,
  subFunction,
  mulFunction,
  divFunction,
  connectWeb3Metamask,
};
