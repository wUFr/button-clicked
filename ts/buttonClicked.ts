/*

	BUTTON - CLICKED
	author: Jiří Bělský (wUFr)

	Tiny library that updates button status after its clicked.
	Can be used to prevent double-submit on forms and show user a form is being sent, if request is slow

*/


export default class buttonClicked {

	buttonClass:    string
	buttonElements: HTMLCollection
	debug:          boolean


	constructor(
		buttonClass = "js-button-click-watch",
		debug = false
	){
		this.buttonClass    = buttonClass
		this.buttonElements = document.getElementsByClassName(this.buttonClass)
		this.debug          = debug
	}

	initButtons(){

		// CHECK IF THERE ARE ANY ELEMENTS
		if(!this.buttonElements.length){
			if(this.debug){
				console.log("buttonsClicked: No elements found, try checking your classnames (used classname: ." +this.buttonClass+")")
			}
			return
		}

		if(this.debug){
			console.log("buttonsClicked: Found elements", this.buttonElements)
		}

		// ADD EVEN ON EACH OF THEM (IF NOT ALREADY INITIALIZED)
		for (const button of this.buttonElements as any){
			if(button.classList.contains("-js-button-click-init")){
				return
			}

			button.classList.add("-js-button-click-init")

			button.addEventListener("click", () => {
				button.classList.add("js-button-click-active")
				const customClass: string|null = button.getAttribute("data-active-class")
				if(customClass){
					button.classList.add(customClass)
				}

				const ariaState: string|null = button.getAttribute("aria-pressed")
				if(ariaState){
					button.setAttribute("aria-pressed","true")
				}
			})
		}
	}
}
