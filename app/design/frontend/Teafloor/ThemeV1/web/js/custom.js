require(['jquery', 'jquery/ui'], function($j){ 
    var selectedClass = "";
    $j(".fil-cat").click(function () {
        selectedClass = $j(this).attr("data-rel");
        $j("#portfolio").fadeTo(100, 0.1);
        $j("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $j("." + selectedClass).fadeIn().addClass('scale-anm');
            $j("#portfolio").fadeTo(300, 1);
        }, 300);

    });
});

require(['jquery','js/jquery.fancybox.min'],function(jQuery){


        jQuery('[data-fancybox="images"]').fancybox({
            buttons : [
              'share',
              'thumbs',
              'close'
            ]
          });

});

function toggleSearch(id){
    var e = document.getElementById(id);
    if (e.style.display == 'block' || e.style.display=='')
    {
        e.style.display = 'none';
    }
    else 
    {
        e.style.display = 'block';
    }
}

function incDec(id,action){
    var textBox = document.getElementById(id);
    if(action == '-'){
        if(textBox != '0'){
            textBox.value--;
        }
    }else{
        textBox.value++;
    }
    
}