var map = function(){
	emit(this.job, 1)
}

var reduce = function(){}


db.people.mapReduce(
	map, 
	reduce, 
	{
		out: "zad3MR"
	}
	);


printjson(db.zad3MR.find().toArray());