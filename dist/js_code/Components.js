
class Navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML =
      `
		<nav class="text-cblue flex justify-between items-center py-3 px-5 bg-cblack " >
			<h3 class="text-4xl font-bold" >
				CalcPx
			</h3>
    <button type="button" id="burger-bar-button" onclick="toggleToolsMenu()" class="font-semibold cursor-pointer lg:hidden" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
      </svg>
    </button>
  	</nav>
		`
  }

}

class NavbarTools extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      `
		<div id='tools-menu' class="hidden fixed text-cwhite  w-10/12 max-w-[400px] bg-cblack h-full right-0 top-0 p-7 overflow-y-scroll" >

    <div class="flex justify-between items-start">
      <h3 class="text-cblue font-bold text-3xl mb-7" >Tools</h3>
      <button onclick="toggleToolsMenu()" class="text-cred" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff3636" class="w-8 h-8">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
        </svg>                     
      </button>
    </div>

    <section class="mb-5">
      <h5 class="font-semibold text-xl" >Line Draw ALgo. Solver</h5>
      <section class="flex flex-col px-3 py-2">
        <a href="line_draw_dda_solver.html" class="hover:text-cblue" >DDA Line Draw</a>
        <a href="line_draw_bresenham_solver.html" class="hover:text-cblue">Bresenham's line Draw</a>
      </section>
    </section>

    <section class="mb-5">
      <h5 class="font-semibold text-xl" >Circle Draw ALgo. Solver</h5>
      <section class="flex flex-col px-3 py-2">
        <a href="#" class="hover:text-cblue">Mid Point Circle Draw </a>
        <a href="#" class="hover:text-cblue">Bresenham's Circle Draw </a>
      </section>
    </section>

    <section class="mb-5">
      <h5 class="font-semibold text-xl" >2D - Transformation's</h5>
      <section class="flex flex-col px-3 py-2">
        <a href="#" class="hover:text-cblue">Translation</a>
        <a href="#" class="hover:text-cblue">Scaling</a>
        <a href="#" class="hover:text-cblue">Rotation</a>
        <a href="#" class="hover:text-cblue">Reflection</a>
        <a href="#" class="hover:text-cblue">Shearing</a>
      </section>
    </section>

    <section class="mb-5">
      <h5 class="font-semibold text-xl" >3D - Transformation's</h5>
      <section class="flex flex-col px-3 py-2">
        <a href="#" class="hover:text-cblue">Translation</a>
        <a href="#" class="hover:text-cblue">Scaling</a>
        <a href="#" class="hover:text-cblue">Rotation</a>
        <a href="#" class="hover:text-cblue">Reflection</a>
        <a href="#" class="hover:text-cblue">Shearing</a>
      </section>
    </section>

  </div>
		`
  }


}

class FooterLinks extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      `
    <footer class="hidden lg:block bg-cwhite bg-opacity-glass mt-5 text-center  py-8 md:py-12 text-cwhite" >
    <h5 class=" font-bold text-2xl" >Other Tools > </h5>
    <p class="inline-block md:w-6/12">
      <a href="line_draw_dda_solver.html" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >dda line draw algo. solver</a>
      <a href="line_draw_bresenham_solver.html" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >Bresenham's line Draw</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >Mid Point Circle Draw</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >Bresenham's Circle Draw</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >2d-Translation</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >2d-Scaling</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >2d-Rotation</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >2d-Reflection</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >2d-Shearing</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >3d-Translation</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >3d-Scaling</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >3d-Rotation</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >3d-Reflection</a>
      <a href="#" class="text-sm text-clessopacitywhite hover:text-cwhite hover:bg-cblack inline-block px-2 " >3d-Shearing</a>
    </p>
  </footer>
  `

  }
}

class ResultContainer extends HTMLElement {
  constructor() {
    super();

    //this line is added due to fix style issue's
    this.classList.add("w-full")

    this.innerHTML =
      `
    <div class="bg-cwhite p-4 bg-opacity-glass rounded-xl  my-5 min-h-52 max-h-[420px]  overflow-y-auto md:mx-3 md:my-0 md:min-h-[500px] md:max-h-[550px] ">

    <h3 class="text-cblue font-semibold text-2xl sm:text-3xl">Result.</h3>
    <p id="result-cont" class="my-2 font-normal text-cwhite">
      <span class="inline-block px-2 py-1 rounded-md m-1 text-cwhite/20 "> [Your result here].</span>
    </p>
    </div>
    `
  }
}

class LineDrawForm extends HTMLElement {
  constructor() {
    super();
    
    const title = this.getAttribute("form_title").trim()
    const mode = this.getAttribute("algo_mode").trim()
    console.log(title)
    console.log(mode) 

    this.innerHTML =
      `
      <form class="bg-cwhite p-4 bg-opacity-glass rounded-xl max-w-[550px] md:min-w-[550px] max-h-fit" method="dialog" >

        <h3 class="text-cblue font-semibold text-2xl sm:text-3xl"> ${title} </h3>
        
        <div class="my-6">

          <div>
            <h5 class="text-cwhite font-medium text-xl my-2">Start Co-ordinate</h5>
            <div class="flex justify-around">
              <span class="text-cwhite font-bold text-sm text-left w-full"> X: &nbsp; 
                <input type="text" name="start-x-coordinate" autocomplete="off" id="startXCoOrdinate" placeholder="start X" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
              </span>
              <span class="text-cwhite font-bold text-sm text-right w-full"> Y: &nbsp; 
                <input type="text" name="start-y-coordinate" autocomplete="off" id="startYCoOrdinate" placeholder="start Y" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
              </span>
            </div>
          </div>

          <div class="my-7">
            <h5 class="text-cwhite font-medium text-xl my-2">End Co-ordinate</h5>
            <div class="flex justify-around">
              <span class="text-cwhite font-bold text-sm text-left w-full"> X: &nbsp; 
                <input type="text" name="start-x-coordinate" autocomplete="off" id="endXCoOrdinate" placeholder="end X" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
              </span>
              <span class="text-cwhite font-bold text-sm text-right w-full"> Y: &nbsp; 
                <input type="text" name="start-y-coordinate" autocomplete="off" id="endYCoOrdinate" placeholder="end Y" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
              </span>
            </div>
          </div>
        </div>

        <div id="err-msg-log"  class="hidden text-cred font-semibold bg-cblack p-3 text-xs rounded-xl border-cred border-2">
          error message!
        </div>

        <div class="flex justify-end my-3">
          <button class="text-cwhite font-bold text-sm border-2 border-cwhite rounded-lg py-2 px-5 hover:text-cred hover:border-cred mr-5" onclick="resetInputs()" type="button" >Reset</button>
          <button class="text-cwhite text-sm bg-cblue font-bold rounded-lg py-2 px-5 hover:bg-cdarkblue" type="submit"  onclick="line_draw_main('${mode}')" >Calculate</button>
        </div>
          
    </form>
    `
  }
}

class CircleDrawForm extends HTMLElement{

  constructor(){
    super()

    const title = this.getAttribute("title").trim()
    const mode = this.getAttribute("algo_mode").trim()
    
    this.innerHTML = 
    `
    <form class="bg-cwhite p-4 bg-opacity-glass rounded-xl max-w-[550px] md:min-w-[550px] max-h-fit" method="dialog">

    <h3 class="text-cblue font-semibold text-2xl sm:text-3xl">${title}</h3>

    <div class="my-6">

      <div>
        <h5 class="text-cwhite font-medium text-xl my-2">Center Co-ord</h5>
        <div class="flex justify-around">
          <span class="text-cwhite font-bold text-sm text-left w-full"> X: &nbsp;
            <input type="text" name="center-x-coordinate" autocomplete="off" id="centerXCoOrdinate" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
          </span>
          <span class="text-cwhite font-bold text-sm text-right w-full"> Y: &nbsp;
            <input type="text" name="center-y-coordinate" autocomplete="off" id="centerYCoOrdinate" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 w-2/4 focus:outline-1 focus:outline-cblue outline-none">
          </span>
        </div>
      </div>

      <div class="my-7 w-full">
        <h5 class="text-cwhite font-medium text-xl my-2">Radius</h5>
        <div class="flex justify-around">
          <span class="text-cwhite font-bold text-sm text-left w-full"> R: &nbsp;
            <input type="text" name="circle-radius" autocomplete="off" id="radius" class="cordinate-inputs bg-cblack rounded-md py-1 px-2 focus:outline-1 focus:outline-cblue outline-none">
          </span>
        </div>			
      </div>
    </div>

    <div id="err-msg-log" class="hidden text-cred font-semibold bg-cblack p-3 text-xs rounded-xl border-cred border-2">
      error message!
    </div>

    <div class="flex justify-end my-3">
      <button	class="text-cwhite font-bold text-sm border-2 border-cwhite rounded-lg py-2 px-5 hover:text-cred hover:border-cred mr-5" onclick="resetInputs()" type="button">Reset</button>
      <button class="text-cwhite text-sm bg-cblue font-bold rounded-lg py-2 px-5 hover:bg-cdarkblue" type="submit" onclick="circle_draw_main( '${mode}' )" >Calculate</button>
    </div>

    </form>
    `
  }

}

class PxLoader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
    `
    <div id="pxloader" class="hidden fixed right-0 top-0 w-full h-screen z-10 justify-center items-center bg-cblack bg-opacity-90 backdrop-blur-sm ">
      <div class="loader"></div> 
    </div>
    `
  }
}

customElements.define("nav-bar", Navbar)
customElements.define("nav-bar-menu", NavbarTools)
customElements.define("footer-links", FooterLinks)
customElements.define("result-container", ResultContainer)
customElements.define("line-draw-form", LineDrawForm)
customElements.define("circle-draw-form", CircleDrawForm)
customElements.define("px-loader" , PxLoader)


