

const joke = document.getElementById('joke');
const btn = document.getElementById('button');


const generatejokes = async () => {

	joke.innerHTML = 'Loading....'

	try{
		const setHeader = {

			headers: {
				Accept: 'application/json'
			}
		};
	
		const res = await fetch('https://v2.jokeapi.dev/joke/Programming', setHeader)

		const data = await res.json();

		if(data.joke == undefined)
			joke.innerHTML = `${data.setup} <br> <br> ${data.delivery}`;
		else
			joke.innerHTML = data.joke;
	}
	
	catch(error){
		console.log(`The error is ${error}`);
	}
}


btn.addEventListener('click', generatejokes);
generatejokes();

