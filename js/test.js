$(function () {
    $("a.test1, a.test3").anchor3D({
        linkHoverBg: "blue",
        linkHoverColor: 'yellow',
        effect: 'moveToLeft'
    });

    $("a.test2").anchor3D({
        linkHoverBg: "#ccc",
        linkHoverColor: '#000',
        enableReminder: true
    });
});