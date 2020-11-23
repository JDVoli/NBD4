var map = function(){
	height = parseFloat(this.height);
	bmi = (parseFloat(this.weight)/(height*height))*10000;
	emit(this.nationality, bmi);
}


var reduce = function(nationality, values){
	return {
		"min_bmi": +Math.min(...values).toFixed(2),
		"max_bmi": +Math.max(...values).toFixed(2),
		"avg_bmi": Array.sum(values)/values.length
	}
}



db.people.mapReduce(
	map,
	reduce,
	{
		out: "zad4MR"
	}
);

printjson(db.zad4MR.find().toArray());