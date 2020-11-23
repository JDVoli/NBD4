printjson(
	db.people.aggregate(
		{$group: {_id: "$job","count": {$sum: 1}}},
		{$addFields:{zawod:"$_id"}},
		{$project:{_id:0,count:0}}
	).toArray())