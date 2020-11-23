printjson(
	db.people.aggregate(
	[
		{ $addFields: { bmi: { $round:[{$multiply: [{$divide: [{$toDouble:"$weight"}, {$multiply:[{$toDouble:"$height"},{$toDouble:"$height"}]}]},10000]},2]} }},
		{ $group: {_id:"$nationality", min_bmi: {$min:"$bmi"}, max_bmi: {$max:"$bmi"}, avg_bmi: {$avg:"$bmi"}}}
	]
).toArray())