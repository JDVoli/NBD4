var map = function(){
	for(i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
}


var reduce = function(nationality, values){
	return {
		"sum_bal": Array.sum(values),
		"avg_bal": Array.sum(values)/values.length
	}
}



db.people.mapReduce(
	map,
	reduce,
	{
		query: {nationality: "Poland", sex: "Female"},
		out: "zad5MR"
	}
);

printjson(db.zad5MR.find().toArray());