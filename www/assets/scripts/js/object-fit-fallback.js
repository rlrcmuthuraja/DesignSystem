var getClosest;document.addEventListener("DOMContentLoaded",function(t){if(!Modernizr.objectfit)for(var e,o=document.querySelectorAll(".mrx-objectfit .mrx-objectfit__img"),a=[],c=0;c<o.length;c++)a.push(o[c].getAttribute("data-fallback")),a[c]&&((e=getClosest(o[c],".mrx-objectfit")).style.backgroundImage='url("'+a[c]+'")',e.classList.add("mrx-objectfit--compat"))});
