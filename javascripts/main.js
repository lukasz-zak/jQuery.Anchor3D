$(function(){
    console.log('This would be the main JS file.');
    
    $(".example1 a").anchor3D();
    
    $(".example2 a").anchor3D({
        linkHoverBg: "#c5000c"
    });
    
    $(".example3 a").anchor3D({
        linkHoverBg: "#c5000c",
        linkHoverColor: "black"
    });
    
    $("footer a").anchor3D({
        linkHoverBg: "#c5000c",
        linkHoverColor: "#ccc",
        enableReminder: true
    });
});
