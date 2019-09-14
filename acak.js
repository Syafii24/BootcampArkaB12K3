function generateSerialNumber(abjadUnique){
  //var abjadUnique = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var lengthSerial = 33
  var str = ''
  var arr = []
  var result = []
  var serial = ''

  for(var a = 0; a < lengthSerial; a++){
    var hasil = Math.floor(Math.random() * abjadUnique.length)
    str += abjadUnique.substring(hasil, hasil+1)
  }

  for(var a = 0; a < str.length; a++){
    arr.push(str[a])
    if(arr.length === 33){
      for(var b = 0; b < arr.length; b++){
        serial += arr[b]
      }
      serial += ''
      arr = []
    }
  }

  return serial.slice(0, serial.length-1)

  

}
console.log(generateSerialNumber("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"))
console.log(generateSerialNumber("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"))
console.log(generateSerialNumber("0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"))
