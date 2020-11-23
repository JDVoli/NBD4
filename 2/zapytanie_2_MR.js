var maps = function() {
    for(i = 0; i < this.credit.length; i++) {
        emit(this.credit[i].currency, parseFloat(this.credit[i].balance))
    }
}

var reduces = function(currency, values) {
    return Array.sum(values)
}

db.people.mapReduce(
    maps,
    reduces,
    {
        out: "zad2MR",
    }
    );

printjson(db.zad2MR.find().toArray());