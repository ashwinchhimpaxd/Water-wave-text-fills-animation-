const wavePath = document.querySelector("#wave-path"); // this element is invisible and wave will be created here. Actually it is cutting a path for the text
const progressElement = document.querySelector("#loader-progress"); // this element will show the loading percentage


/* =========================================
   SVG / TEXT SETTINGS
========================================= */

const SVG_WIDTH = 1000; // width of the svg
const SVG_HEIGHT = 300; // height of the svg


/*
    Actual visual area of the text.

    Your text:

        y = 215
        font-size = 175

    approx bottom = 215
    approx top    = 40
*/

const TEXT_TOP = 60;
const TEXT_BOTTOM = 215;

const TEXT_HEIGHT = TEXT_BOTTOM - TEXT_TOP;


/* =========================================
   WAVE SETTINGS
========================================= */

const WAVE_AMPLITUDE = 10;
const WAVE_STEP = 10;
const WAVE_FREQUENCY = 0.025;


/*
    Horizontal wave movement.
*/

const WAVE_SPEED = 0.065;

let waveOffset = 0;


/* =========================================
   LOADING
========================================= */

/*
    This is your loading percentage.

    Network loading is not here,
    so we will increase it manually
    for demo.
*/

let progress = 0;


/* =========================================
   CREATE WAVE
========================================= */

function createWave() {

    /*
        Progress ko 0 → 1 convert karo.
    */

    const percentage = progress / 100;


    /*
        IMPORTANT:

        The water level will no longer be calculated
        according to the complete 300px of the SVG.

        The water level will be calculated
        according to the actual area of the TEXT.
    */


    const waterLevel = TEXT_BOTTOM - (TEXT_HEIGHT * percentage);


    /*
        Start wave.
    */

    let path = `M 0 ${waterLevel}`;


    /*
        Create wave across entire SVG.
    */

    for (let x = 0; x <= SVG_WIDTH; x += WAVE_STEP) {

        const wave = Math.sin(x * WAVE_FREQUENCY + waveOffset) * WAVE_AMPLITUDE;

        const y = waterLevel + wave;

        path += ` L ${x} ${y}`;
    }


    /*
        Bottom of clipping area.
    */

    path += ` L ${SVG_WIDTH} ${SVG_HEIGHT}`;

    path += ` L 0 ${SVG_HEIGHT}`;

    path += ` Z`;

    /*
        Update SVG clip path.
    */

    wavePath.setAttribute("d", path);
}

/* =========================================
   SET LOADING
========================================= */

function setProgress(value) {

    /*
        Keep percentage between 0 and 100.
    */

    progress = Math.max(0, Math.min(100, value));


    /*
        Percentage text.
    */

    progressElement.textContent = Math.round(progress);

    /*
        Update text fill immediately.
    */

    createWave();
}


/* =========================================
   ANIMATION LOOP
========================================= */

function animate() {

    /*
        Move the wave horizontally.
    */

    waveOffset += WAVE_SPEED;


    /*
        IMPORTANT:

        Progress is not changing.
        Only wave is moving.

        So if progress is 50%,
        fill will remain 50%.
    */

    createWave();

    requestAnimationFrame(animate);
}


/* =========================================
   DEMO LOADING
========================================= */

function startDemoLoading() {  // remove when you use actaully assets then only progress bar will work this is onyl for demo loading process showing remove when you use acctually loading assets

    let value = 0;

    const interval = setInterval(() => {
        value += 1;

        /*
            This single value controls BOTH:

            percentage
                  +
            text fill
        */

        setProgress(value);

        if (value >= 100) clearInterval(interval);

    }, 100);
}

/* =========================================
   START
========================================= */

setProgress(0);

requestAnimationFrame(animate);

startDemoLoading(); // we don't need this when we use actual assets this is only for demo loading process showing remove when you use acctually loading assets