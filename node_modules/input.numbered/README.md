# Numbered Vanila v1.0.5

Plugin for create an input mask of numbers

```javascript
new Numbered(el, options);
```
## Default options
```javascript
{
    mask: '+7 (###) ### - ## - ##', // Mask for input value
    numbered: '#',                  // Masking definition
    empty: '_',                     // Empty masking definition char (or space)
    placeholder: false              // Enable  placeholder to mask
}
```

## NPM
### https://www.npmjs.com/package/input.numbered

## Initialize
```javascript
var numberedFromId = new Numbered('#numbered');
```
or
```javascript
var numberedFromClass = new Numbered('.numbered', {
	mask: '#### - #### - #### - ####',
	empty: 'X',
	placeholder: true
});
```
or
```javascript
var numberedFromTag = new Numbered('input');
```
or
```javascript
var numberedFromSelector = new Numbered('form input.numbered');
```
or if jQuery included
```javascript
var $numbered = $('#numbered');
var numberedFromJQuery = new Numbered($numbered);
```

## setVal
```javascript
var example3 = new Numbered('#example3', {
	mask: '## / ## / ####',
	empty: '-'
});
$('.set').on('click', function (event) {
	example3.setVal('30 / 12 / 2015');
});
$('.clear').on('click', function (event) {
	example3.setVal('');
});
```
## getVal(raw = false)
```javascript
var example1 = new Numbered('#example1');
$('.get').on('click', function (event) {
	alert('Value: ' + example1.getVal());
});
$('.get-raw').on('click', function (event) {
	alert('Raw value: ' +example1.getVal(true));
});
```
## reInit
```javascript
var example1 = new Numbered('#example1');
$('.set').on('click', function (event) {
    $('#example1').val('30 / 12 / 2015');
    example1.reInit();
});
```

## Validate
Validate method returns `1` - is valid, `0` - is empty, `-1`, is invalid. The result can be `Integer` or `Array` depending on the number of elements. You can listen to your desired events and to validate out at any time.
```
var $numbered = $('#numbered');
var numbered = new Numbered($numbered);
$numbered.on('change blur input focusin', function () {
	var validate = numbered.validate();
	$numbered
		.toggleClass('error', validate < 0)
		.toggleClass('empty', validate === 0)
		.toggleClass('valid', validate > 0);
});
```

## Destroy

```javascript
var numbered = new Numbered('#numbered');
numbered.destroy();
```
