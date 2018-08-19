var connection = require("./connection.js");

function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip  properties
    if (Object.hasOwnProperty.call(ob, key)) {
     
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to string
  return arr.toString();
}

var orm = {
selectAll: function(tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function(err, result){
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	},
	insertOne: function(tableInput, valOfCol, valOfOtherCol, cb) {
		var queryString = "INSERT INTO " + tableInput;
		queryString += " (";
		queryString += valOfCol.toString();
		queryString += ") "
		queryString += "VALUES (";
		queryString += "?"
		queryString += ") ";

		console.log(queryString);

		connection.query(queryString, [valOfOtherCol], function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	},
	updateOne: function(tableInput, columnInput, condition, cb) {
		var queryString = "UPDATE " + tableInput;
		queryString += " SET " + objToSql(columnInput);
		queryString += " WHERE ";
		queryString += condition;


		console.log(queryString);

		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			console.log(result);
			cb(result);
		});
	}
};

// export this file
module.exports = orm;