# button-clicked
Tiny typescript lib that changes button state after its clicked.


Usage:

```html
<script src="../js/buttonClicked.min.js" defer></script>
<script src="../js/buttonClicked.init.min.js" defer></script>
```

or

```html
<script src="../js/buttonClicked.min.js" defer></script>
<script>
	import buttonClicked from './buttonClicked';
	const initButtonsClicked = new buttonClicked();
	initButtonsClicked.initButtons();
</script>
```


By default, it will try to find elements with `.js-button-click-watch`, you can change that by passing it via parameters, which you can also use to enable simple "debug" mode.

```js
new buttonClicked(buttonClass, debug);

// default values:
buttonClass = "js-button-click-watch",
debug = true
```

You can specify custom classname, which you want to add after click, via `data-active-class` attribute. Then its all just matter of simple CSS. If `aria-pressed` attribute is set, it will be updated to `true` after click as well.

```html

<button type="button" class="js-button-click-watch" data-active-class="clicked" aria-pressed="false">
	<span class="default">Click me</span>
	<span class="active">You clicked me!</span>
</button>
```

```css
button .active {
	display: none;
}

button.clicked .default {
	display: none;
}

button.clicked .active {
	display: block;
}
```