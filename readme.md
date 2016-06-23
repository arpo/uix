uix a nice UI
====================

Usage
-------

Include on page

	<link href='https://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css'>
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" href="css/UIx.css">

Add a wrapper for you UI:

	<div id="myUi" class="uix max600">
		<section>
	        <button href="javascript:">Click</button>
	    </section>
	</div>

Or add with scripts:

	<script type="text/javascript">

		UIX.target = '#myUi';
		UIX.addRange({id: 'r1', value: 50, 'label': 'Slide1', onChange: function (val, e) { console.log(val); } });
		UIX.addButton({id: 'b1','label': 'Go', onClick: function (e) { console.log('Clicked'); } });
		UIX.addHr();

	</script>

See more in index.html on how to implement.
