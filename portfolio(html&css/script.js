window.onscroll= function (){
    const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const currentHeight = document.documentElement.scrollTop;

    var scrollProgresspercentage = (currentHeight/totalHeight) * 100;
    document.getElementById('scroll-bar').style.width = scrollProgresspercentage + "%";
    
    console.log(scrollProgresspercentage);
}