
class Navbar extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = 
    `
		<nav class="text-cblue flex justify-between items-center py-3 px-5 bg-cblack " >
			<h3 class="text-4xl font-bold" >
				CalcPx
			</h3>
    <button class="font-semibold cursor-pointer lg:hidden" onclick="toggleToolsMenu()" >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
        <path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
      </svg>
    </button>
  	</nav>
		`
  }

}

class NavbarTools extends HTMLElement {
  constructor(){
    super();
    this.innerHTML = 
		`
		<div id='tools-menu' class="hidden fixed text-cwhite  w-10/12 bg-cblack h-full right-0 top-0 p-7 overflow-y-scroll" >

    <div class="flex justify-between items-start">
      <h3 class="text-cblue font-bold text-3xl mb-7" >Tools</h3>
      <button onclick="toggleToolsMenu()" class="text-cred" >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ff0000" class="w-8 h-8">
          <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clip-rule="evenodd" />
        </svg>     
                                
      </button>
    </div>

    <section class="mb-5">
      <h5 class="font-semibold text-xl" >Line Draw ALgo. Solver</h5>
      <section class="flex flex-col px-3 py-2">
        <a href="line_draw_dda_solver.html" class="hover:text-cblue" >DDA Line Draw</a>
        <a href="#" class="hover:text-cblue">Bresenham's line Draw</a>
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

customElements.define("nav-bar", Navbar)
customElements.define("nav-bar-menu" , NavbarTools)