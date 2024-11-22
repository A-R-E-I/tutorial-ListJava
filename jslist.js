window.addEventListener("load",Initialize);

function Initialize()
{
	let carlst = ["Ford","GMC","BMW"];
	let listelement = document.getElementById("lstorderlist");
	let listnum = document.getElementById("lstnumberlist");
	let listcap = document.getElementById("lstcaplist");
	let listlow = document.getElementById("lstlowlist");
	let listcaproman = document.getElementById("lstUpRomanlist");
	let listlowroman = document.getElementById("lstlowRomanlist");
	let listlength = carlst.length;
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listelement.appendChild(li);	
	}
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listnum.appendChild(li);	
	}
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listcap.appendChild(li);	
	}
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listlow.appendChild(li);	
	}
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listcaproman.appendChild(li);	
	}
	
	for(let i=0; i<listlength; i++)
	{
		let li = document.createElement("li");
		li.innerText = carlst[i];
		listlowroman.appendChild(li);	
	}
}
