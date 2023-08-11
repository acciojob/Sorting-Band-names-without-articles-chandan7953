//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let mp = {};
var newarr = []

touristSpots.forEach((str) => {
	let ans = "";
	let arr = str.split(" ");
	for(let key of arr){
		let curr = key.toLowerCase();
		if(curr != "the" && curr != "a" && curr != "an"){
            ans += key + " ";
        }
	}
    mp[ans] = str;
    newarr.push(ans);
});

newarr.sort();
for (let i = 0; i < newarr.length; i++) {
    let str = mp[newarr[i]];
    touristSpots[i] = str;
}


let ele = document.getElementById("band");
for(let key of touristSpots){
	let item = document.createElement("li");
    item.textContent = key;
    ele.appendChild(item);
}