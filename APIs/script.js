console.log('We are learning APIs')

// const handleApiCalling = ()=>{


//     //GET (by default)
    //const apiCall = fetch('https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app/ashish.json')


    // //POST
    // const apiCall = fetch('https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app/ashish.json',
    //     {
    //         "method": "POST",
    //         "headers": {
    //             "Content-type" : "application/JSON; charset=UTF-8"
    //         },
    //         "body": JSON.stringify({
    //             name: "Ketchum"
    //         })
    //     }
    // )
    

//DELETE
// const apiCall = fetch('https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app/ashish-NpK4n77AaBGs-oRAiMh.json',
//         {
//             "method": "DELETE",
//         })      


//PATH
// const apiCall = fetch('https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app/ashish-.json',
//         {
//             "method": "PATCH",
//             "headers": {
//                 "Content-type" : "application/JSON; charset=UTF-8"
//             },
//             "body": JSON.stringify({
//                 place :"BLR"
//             })
//         })

//Promise ka wait -
//     apiCall
//     .then(response => console.log(response))
//     .catch(err => console.log(err))
// }


//or we can use async await
const handleApiCalling = async ()=>{

    const apiCall = fetch('https://lb-mernbatch-default-rtdb.asia-southeast1.firebasedatabase.app/ashish.json')

    console.log(apiCall)
}