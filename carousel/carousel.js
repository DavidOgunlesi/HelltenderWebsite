const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;

const getActiveIndex = () => {
    const $active = $g("[data-active]");
    return getSlideIndex($active);
}

const getSlideIndex = ($slide) => {
    return [...$q(".carousel__item")].indexOf( $slide );
}

const prevSlide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $last = $slides[$slides.length-1];
    $last.remove();
    $list.prepend($last);
    activateSlide( $q(".carousel__item")[index] );
}
const nextSlide = () => {
    const index = getActiveIndex();
    const $slides = $q(".carousel__item");
    const $first = $slides[0];
    $first.remove();
    $list.append($first);
    activateSlide( $q(".carousel__item")[index] );
}

const chooseSlide = (e) => {
    const $slide = e.target.closest( ".carousel__item" );
    const index = getSlideIndex( $slide );
    if ( index < 3 || index > 8 ) return;
    if ( index === 8 ) nextSlide();
    if ( index === 3 ) prevSlide();
    activateSlide($slide);
}

const activateSlide = ($slide) => {
    if (!$slide) return;
    const $slides = $q(".carousel__item");
    $slides.forEach(el => el.removeAttribute('data-active'));
    $slide.setAttribute( 'data-active', true );
}

const autoSlide = () => {
    nextSlide();
}

const pauseAuto = () => {
    clearInterval( auto );
    clearTimeout( pauser );
    pauser = setTimeout( startAuto , 5000 );
}

const handleNextClick = (e) => {
    pauseAuto();
    nextSlide(e);
}
const handlePrevClick = (e) => {
    pauseAuto();
    prevSlide(e);
}
const handleSlideClick = (e) => {
    pauseAuto();
    chooseSlide(e);
}

// $next.addEventListener( "click", handleNextClick );
// $prev.addEventListener( "click", handlePrevClick );
$list.addEventListener( "click", handleSlideClick );

const startAuto = () => {
    auto = setInterval( autoSlide, 3000 );
}


startAuto();