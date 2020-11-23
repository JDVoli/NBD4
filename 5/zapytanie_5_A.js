printjson(
	db.people.aggregate(
	[
		{ $match: { $and: [{nationality: "Poland"}, {sex: "Female"} ] } },
		{$unwind: "$credit"},
		{$addFields: {curr: "$credit.currency", summ: {$toDouble: "$credit.balance"}}},
		{$group: {_id: "$curr", sum_bal: { $sum: "$summ"}, avg_bal: {$avg: "$summ"}}},
		{$addFields: {curr_name: "$_id" }},
		{$project: {_id: 0}}		
	]
).toArray())

