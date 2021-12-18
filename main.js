burger = document.querySelector('.burger');
navigation = document.querySelector('.navigation');
navlist = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');


burger.addEventListener('click', () => {
	navigation.classList.toggle('h-nav-resp');
	navlist.classList.toggle('v-class-resp');
	// rightNav.classList.toggle('v-class-resp');
})


//*******************************************************/
// User Creation

//*******************************************************/
// User Creation
function saveData() {
	let fname = document.getElementById("fname").value
	let lname = document.getElementById("lname").value
	let email = document.getElementById("email").value
	let country = document.getElementById("country").value
	let subject = document.getElementById("subject").value
	axios.post('http://localhost:3000/user', {
		fname, lname, email, country, subject
	})
		.then(function (response) {
			console.log(response);
			document.getElementById("fname").value = ""

			// getAllUser()

			document.getElementById("alert").innerHTML =
				`<div class="alert alert-success" role="alert">
                    Submit Successfully!
                </div>`

			setTimeout(() => {
				document.getElementById("alert").innerHTML = ""
			}, 3000);

		})

}


