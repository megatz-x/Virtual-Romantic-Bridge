

const initialize = () => {
    //Basic Actions Section
    const buttonText = document.getElementById('buttonText');
    const onboardButton = document.getElementById('connectButton');

    const networks = {
        bsc: {
          chainId: `0x${Number(56).toString(16)}`,
          chainName: "Binance Smart Chain Mainnet",
          nativeCurrency: {
            name: "Binance Chain Native Token",
            symbol: "BNB",
            decimals: 18
          },
          rpcUrls: [
            "https://bsc-dataseed1.binance.org",
            "https://bsc-dataseed2.binance.org",
            "https://bsc-dataseed3.binance.org",
            "https://bsc-dataseed4.binance.org",
            "https://bsc-dataseed1.defibit.io",
            "https://bsc-dataseed2.defibit.io",
            "https://bsc-dataseed3.defibit.io",
            "https://bsc-dataseed4.defibit.io",
            "https://bsc-dataseed1.ninicoin.io",
            "https://bsc-dataseed2.ninicoin.io",
            "https://bsc-dataseed3.ninicoin.io",
            "https://bsc-dataseed4.ninicoin.io",
            "wss://bsc-ws-node.nariox.org"
          ],
          blockExplorerUrls: ["https://bscscan.com"]
        }
      };
    
      const changeNetwork = async () => {
        window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...networks["bsc"]
              }
            ]
          });
      };

    //Created check function to see if the MetaMask extension is installed
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };
  
    
    //We create a new MetaMask onboarding object to use in our app
    // const onboarding = new MetaMaskOnboarding({ forwarderOrigin });

    async function onClickConnect() {

        try {
        // Will open the MetaMask UI
        // You should disable this button while the request is pending!

        await changeNetwork();

        await ethereum.request({ method: 'eth_requestAccounts' });
        //we use eth_accounts because it returns a list of addresses owned by us.
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        //We take the first address in the array of addresses and display it
        let accDisplay = accounts[0];
        let accLength = accDisplay.length;
        if (accLength >= 8){
            let accFront = accDisplay.substring(0,5)
            let accBack = accDisplay.substring(accLength - 5 , accLength)
            buttonText.innerText = accFront + '...' + accBack;
        }
        } catch (error) {
        console.error(error);
        }
    };
    
    const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
            //If it isn't installed we ask the user to click to install it
            buttonText.innerText = 'Install MetaMask';
            //When the button is clicked we call th is function
            onboardButton.href = "https://metamask.io/download/";
            onboardButton.target = "_blank"

        } else {
            //If it is installed we change our button text
            buttonText.innerText = 'Conect MetaMask';
            //When the button is clicked we call this function to connect the users MetaMask Wallet
            onboardButton.onclick = onClickConnect;
        }

    };

        MetaMaskClientCheck();
  };

  window.addEventListener('DOMContentLoaded', initialize);