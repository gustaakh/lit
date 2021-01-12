var url = "https://www.literotica.com/s/listening-to-my-wife-getting-fucked";

getText(url);

async function getText(url) {
await fetch('https://cors-anywhere.herokuapp.com/'+url).then(function (response) {
	// The API call was successful!
	return response.text();
}).then(function (html) {
	// This is the HTML from our response as a text string
	document.body.innerHTML=html;
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});
  var text = document.querySelector('.b-story-body-x').innerText;
var next = document.querySelector('.b-pager-next').href;
}