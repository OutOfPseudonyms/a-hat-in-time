let sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat commodi dicta ipsum modi eligendi porro sapiente rem autem sit. Unde esse aspernatur suscipit consequatur labore deleniti ea animi itaque nihil!"

let array = sentence.split(" ")
for (let i = 0; i < 30; i += 1) {
  let string = array[i].toUpperCase()
  let array3 = string.split("")
  console.log(array3)
}