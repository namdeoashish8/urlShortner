//Data Base

//adding Key value pairs
const mapper = {
    'ashish' : "https://github.com/namdeoashish8/learnbay",
    'X' : 'https://twitter.com'
}

const urlParams=new URLSearchParams(window.location.search)
const query = urlParams.get('q')


//Redirection now
if(mapper[query]){
    console.log('redirect')
    window.location.href= mapper[query]
}