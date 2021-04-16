/*

	BUTTON - CLICKED
	author: Jiří Bělský (wUFr)

	Tiny library that updates button status after its clicked.
	Can be used to prevent double-submit on forms and show user a form is being sent, if request is slow

*/


export default class buttonClicked {

	buttonClass:         string
	buttonResetClass:    string
	buttonElements:      HTMLCollection
	buttonResetElements: HTMLCollection
	debug:               boolean


	constructor(
		buttonClass      = "js-button-click-watch",
		buttonResetClass = "js-button-click-reset",
		debug            = false
	){
		this.buttonClass    = buttonClass
		this.buttonElements = document.getElementsByClassName(this.buttonClass)

		this.buttonResetClass    = buttonResetClass
		this.buttonResetElements = document.getElementsByClassName(this.buttonResetClass)

		this.debug          = debug
	}

	initButtons(){

		// CHECK IF THERE ARE ANY ELEMENTS
		if(!this.buttonElements.length){
			if(this.debug){
				console.log("buttonClicked - initButtons(): No elements found, try checking your classnames (used classname: ." +this.buttonClass+")")
			}
			return
		}

		if(this.debug){
			console.log("buttonClicked - initButtons(): Found elements", this.buttonElements)
		}

		// ADD EVEN ON EACH OF THEM (IF NOT ALREADY INITIALIZED)
		for (const button of this.buttonElements as any){
			// PREVENT DOUBLE-INIT WHICH WOULD RESULT IN CALLING THIS CODE TWICE OR MORE
			if(button.classList.contains("-js-button-click-init")){
				continue
			}

			button.classList.add("-js-button-click-init")

			if(this.debug){
				console.log("buttonClicked - initButtons(): init", button)
			}

			button.addEventListener("click", () => {
				// SET DEFAULT STATE CLASS
				button.classList.add("js-button-click-active")

				// SET CUSTOM CLASS IF SET
				const customClass: string|null = button.getAttribute("data-active-class")
				if(customClass){
					button.classList.add(customClass)
				}

				// SET ARIA ATTRIBUTE IF SET
				const ariaState: string|null = button.getAttribute("aria-pressed")
				if(ariaState){
					button.setAttribute("aria-pressed","true")
				}


				if(this.debug){
					console.log("buttonClicked - set ACTIVE ", button)
				}
			})
		}
	}

	// REMOVES "ACTIVE" CLASS AND SETS ARIA-PRESSED TO "FALSE"
	initResetButtons(){
		if(!this.buttonResetElements.length){
			if(this.debug){
				console.log("buttonClicked - resetState(): No elements found, try checking your classnames (used classname: ." +this.buttonResetElements+")")
			}
			return
		}

		if(this.debug){
			console.log("buttonClicked  - resetState(): Found elements", this.buttonResetElements)
		}

		for (const resetButton of this.buttonResetElements as any){
			// PREVENT DOUBLE-INIT WHICH WOULD RESULT IN CALLING THIS CODE TWICE OR MORE
			if(resetButton.classList.contains("-js-button-click-init")){
				continue
			}

			resetButton.classList.add("-js-button-click-init")

			if(this.debug){
				console.log("buttonClicked - resetState(): init reset", resetButton)
			}

			resetButton.addEventListener("click", () => {
				if(this.buttonElements.length){
					for (const button of this.buttonElements as any){
						if(!button.classList.contains("js-button-click-active")){
							continue
						}

						// RESET DEFAULT STATE CLASS
						button.classList.remove("js-button-click-active")

						// RESET CUSTOM CLASS, IF ANY IS SET
						const customClass: string|null = button.getAttribute("data-active-class")
						if(customClass){
							button.classList.remove(customClass)
						}

						// RESET ARIA ATTRIBUTE IF SET
						const ariaState: string|null = button.getAttribute("aria-pressed")
						if(ariaState){
							button.setAttribute("aria-pressed","false")
						}

						if(this.debug){
							console.log("buttonClicked - set DEFAULT ", button)
						}
					}
				}
				else {
					if(this.debug){
						console.log("buttonClicked  - resetState(): No buttons to reset found")
					}
				}
			})
		}
	}
}