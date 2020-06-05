//toggle dropdown menu open/close
var toClose = false;

function toggle(e) {
    e.stopPropagation();
    var dropdownToggle = this;
    var dropdownMenu = dropdownToggle.nextSibling;

    while(dropdownMenu && dropdownMenu.nodeType !== 1) {
        dropdownMenu = dropdownMenu.nextSibling;
    }

    if(!dropdownMenu) {
        return;
    }

    if (!dropdownToggle.classList.contains('mrx-dropdown--show')) {
        dropdownToggle.classList.add('mrx-dropdown--show');

        if(toClose) {
            toClose.classList.remove('mrx-dropdown--show');
        }

        toClose = dropdownToggle;

    }  else {
        dropdownToggle.classList.remove('mrx-dropdown--show');
        toClose = false;
        console.log(toClose);
    }
}

function closeAll() {
    toClose.classList.remove('mrx-dropdown--show');
    toClose = false;
}

window.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('.mrx-js-dropdown__toggle').forEach(function(btn){
        btn.addEventListener('click', toggle, true);
    });
});

window.onclick = function(event){
    if (toClose){
        closeAll.call(event.target);
    }
};
