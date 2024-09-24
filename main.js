/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftArr = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_id, _name) {
    const nft = {
        "id": _id,
        "name": _name
    };
    nftArr.push(nft);
    console.log("NFT " + _name +  " Successfully Minted\n");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("Current NFTs");
    for(i = 0; i < nftArr.length; i++){
        console.log("ID: " + nftArr[i].id + " Name: " + nftArr[i].name);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nCurrent Total NFTs: " + nftArr.length)
}

// call your functions below this line
mintNFT(1, "Test");
mintNFT(2, "FEU");
mintNFT(3, "Tech");
listNFTs();
getTotalSupply();
