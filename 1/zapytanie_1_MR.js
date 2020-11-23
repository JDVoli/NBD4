var mapFunction1 = function() {
	var value = {
		count: 1,
		weight: parseFloat(this.weight),
		height: parseFloat(this.height)
	}
	emit(this.sex, value);
};


var reduceFunction1 = function(keySKU, countObjVals) {
	reducedVal = { count: 0, weight: 0, height: 0 };

	for (var idx = 0; idx < countObjVals.length; idx++) {

	reducedVal.count += countObjVals[idx].count;
	reducedVal.weight += countObjVals[idx].weight;
	reducedVal.height += countObjVals[idx].height;
	}
	return reducedVal;
};

var finalizeFunction1 = function (key, reducedVal) {
reducedVal.avg_height = reducedVal.height/reducedVal.count;
reducedVal.avg_weight = reducedVal.weight/reducedVal.count;

return reducedVal;
};
       db.people.mapReduce( mapFunction1, reduceFunction1,
                {
                       out: { merge: "zad1MR" },
                       finalize: finalizeFunction1
                     }
                   )

printjson(db.zad1MR.find().toArray())
