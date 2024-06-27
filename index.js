//This time slice() has no built-in stepping support, so we use a good old for loop to quickly leap through the array.

//Because end is empty string and Number('') is 0, so we have arr.slice(n, 0) which is always an empty array.
Array.prototype.r = function (str) {
	const [startStr, endStr, stepStr] = str.split(":");
	const start = startStr === "" ? 0 : Number(startStr);
	const step = stepStr === "" ? 1 : Number(stepStr);
	const absStart = start < 0 ? this.length + start : start;
	// 👇 count to start for empty end when step is negative
	const end = endStr === "" ? (step > 0 ? this.length : 0) : Number(endStr);
	const absEnd = end < 0 ? this.length + end : end;
	const [realStart, realEnd] =
		step > 0 ? [absStart, absEnd] : [absEnd, absStart];
	const slice = this.slice(realStart, realEd); // 👈
	if (slice.length === 0) return []; // 👈
	const result = [];
	// 👇
	for (let i = absStart; step > 0 ? i < absEnd : i > absEnd; i += step) {
		result.push(this[i]);
	}
	return result;
};

const decisions = [
	1,
	"Hell yeah",
	"No.",
	"never",
	"are you fr",
	"uh, okay?",
	"never",
	"let me think about it",
];

// console.log(decisions['0'])

// console.log(typeof(decisions[i]));

// console.log(some);

// const some = decisions.myslice('1:4');

// console.log(some);

// const some = decisions.myslice('1:');

// console.log(some);

// const some = decisions.myslice(':4');

// console.log(some);

// const some = decisions.myslice(':-1');

// console.log(some);

// array[start:stop:step]

// const some = decisions.r("1:4:2");

// console.log(some);

// const some = decisions.r("4:1:");
