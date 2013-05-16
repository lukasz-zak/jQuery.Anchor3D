$(function(){
    console.log('This would be the main JS file.');
    
    $(".example1 a").anchor3D();
    
    $("footer a").anchor3D({
        linkHoverBg: "blue",
        linkHoverColor: 'yellow'
    });
});
