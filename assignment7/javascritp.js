const arr = [];

function data(){
	let data1 = document.getElementById("rollno").value;
	let data2 = document.getElementById("fname").value;
	let data3 = document.getElementById("lname").value;
	let data4 = document.getElementById("dept").value;
	let data5 = document.getElementById("subject").value;
	let data6 = document.getElementById("country").value;

	if(arr.includes(document.getElementById("rollno").value))
	{
		alert("Rollno Exists");
	}
	else
	{
		arr.push(document.getElementById("rollno").value);
		let row = document.createElement('tr');

	let row1= row.appendChild(document.createElement('td'));
	let row2= row.appendChild(document.createElement('td'));
	let row3= row.appendChild(document.createElement('td'));
	let row4= row.appendChild(document.createElement('td'));
	let row5= row.appendChild(document.createElement('td'));
	let row6= row.appendChild(document.createElement('td'));

	row1.innerHTML=data1;
	row2.innerHTML=data2;
	row3.innerHTML=data3;
	row4.innerHTML=data4;
	row5.innerHTML=data5;
	row6.innerHTML=data6;

	document.getElementById("table1").appendChild(row);
	}
}
