/*

	BUTTON - CLICKED
	author: Jiří Bělský (wUFr)

	Tiny library that updates button status after its clicked.
	Can be used to prevent double-submit on forms and show user a form is being sent, if request is slow

*/


import buttonClicked from './buttonClicked';

const initButtonsClicked = new buttonClicked();
initButtonsClicked.initButtons();
initButtonsClicked.initResetButtons();