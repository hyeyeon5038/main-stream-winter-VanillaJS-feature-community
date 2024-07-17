$(document).ready(function(){
	//modal
	$('.trigger').click(function() {
        $('.modal-wrap').toggleClass('open');
		$('.dimmed').toggleClass('open');
        return false;
    });
	$('.dimmed').click(function() {
        $('.modal-wrap').removeClass('open');
		$('.dimmed').removeClass('open');
        return false;
    });
	$('.trigger2').click(function() {
        $('.modal-wrap2').toggleClass('open');
		$('.dimmed2').toggleClass('open');
        return false;
    });
	$('.dimmed2').click(function() {
        $('.modal-wrap2').removeClass('open');
		$('.dimmed2').removeClass('open');
        return false;
    });

	//select box
	const selectBoxElements = document.querySelectorAll(".select");

	function toggleSelectBox(selectBox) {
	  selectBox.classList.toggle("active");
	}

	function selectOption(optionElement) {
	  const selectBox = optionElement.closest(".select");
	  const selectedElement = selectBox.querySelector(".selected-value");
	  selectedElement.textContent = optionElement.textContent;
	}

	selectBoxElements.forEach(selectBoxElement => {
	  selectBoxElement.addEventListener("click", function (e) {
		const targetElement = e.target;
		const isOptionElement = targetElement.classList.contains("option");

		if (isOptionElement) {
		  selectOption(targetElement);
		}

		toggleSelectBox(selectBoxElement);
	  });
	});

	document.addEventListener("click", function (e) {
	  const targetElement = e.target;
	  const isSelect = targetElement.classList.contains("select") || targetElement.closest(".select");

	  if (isSelect) {
		return;
	  }

	  const allSelectBoxElements = document.querySelectorAll(".select");

	  allSelectBoxElements.forEach(boxElement => {
		boxElement.classList.remove("active");
	  });
	});


	//leftmenu
	var url = window.location.pathname,
		urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");
	$('.depth-1 a').each(function () {
		if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
			$(this).addClass('active');
		}
	});

	$('.depth-1 > a').click(function(){
		$(this).toggleClass('active');
		$(this).next($('.depth-2')).slideToggle('fast');
		$(this).next($('.depth-2')).toggleClass('active');
	})
	$('.depth-2 > li > a').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('active');
		$(this).next($('.depth-3')).slideToggle('fast');
		$(this).next($('.depth-3')).toggleClass('active');
	})
	$('.depth-3 > li > a').click(function(e){
		e.stopPropagation();
		$(this).toggleClass('active');
	})
});