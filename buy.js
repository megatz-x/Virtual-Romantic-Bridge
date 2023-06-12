const sendEthButton = document.getElementById('buy');

let accounts = [];

//Sending Ethereum to an address
    accounts = await ethereum.request({ method: 'eth_requestAccounts', });
    
    const onClickSendTransaction = async () => {
        ethereum.request({
            method: 'eth_sendTransaction',
            params: [
                {
                from: accounts[0],
                to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
                },
            ],
        })
    }

    sendEthButton.onclick = onClickSendTransaction();

    // window.addEventListener('DOMContentLoaded', initialize2);