printjson(
	db.people.aggregate(
	[
		{$unwind: "$credit"},
		{$addFields: {curr: "$credit.currency", summ: {$toDouble: "$credit.balance"}}},
		{$group:{ _id: "$curr", sum_bal: { $sum: "$summ"}}},
		{$addFields: {curr_name: "$_id" }},
		{$project: {_id: 0}}		
	])	
.toArray())