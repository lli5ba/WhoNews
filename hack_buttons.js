document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#up").addEventListener("click", upVote);
	document.querySelector("#down").addEventListener("click", downVote);

	var vote = 0;
	function upVote() {
		vote = vote + 1;
		document.querySelector("#vote").innerHTML = vote;
	}
	function downVote() {
		vote = vote - 1;
		document.querySelector("#vote").innerHTML = vote;
	}

});