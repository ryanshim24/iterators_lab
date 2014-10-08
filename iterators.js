var iterators = {
    max: function (numList) {
      var max = -Infinity;
      for (var i = 0; i < numList.length; i++) {
        if (numList[i] > max) {
          max = numList[i];
        }
      }
      return max;
    },

    min: function (numList){
      var min =Infinity;
      for (var i =0; i <numList.length; i++){
        if (numList[i] < min) {
          min = numList[i];
        }
      }
      return min;
    },


    each: function (names, callback) {
      for (var i=0; i< names.length; i++){
        callback(names[i]);
      }
    },



    map: function (names, callback) {
      var newName = [];
      for (var i=0; i<names.length; i++) {
        newName.push( callback(names[i]) );
      }
      return newName;
    },

    filter: function(num, callback) {
      var newNum = [];
      for (var i=0; i<num.length; i++) {
        if (callback(num[i])) {
          newNum.push(num[i]);
        }
      }
      return newNum;
    },

    reduce: function(num, callback) {
      var newNum=0;
      for (var i=0; i<num.length; i++) {
        newNum =callback(num[i],newNum);
      }
      return newNum;
    },

    reject: function(num, callback) {
      var newNum = [];
      for (var i=0; i<num.length; i++) {
        if ((callback(num[i]))===false) {
          newNum.push(num[i]);
        }
      }
      return newNum;
    }
  };

module.exports = iterators;
