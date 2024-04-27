function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function showElements() {
    var elements = document.querySelectorAll('.animated');
    elements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showElements);

showElements();
