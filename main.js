let scores = [10, 15, 20, 18, 17];

function operation() {
  let sum = 0;
  let amount = scores.length;
  scores.forEach((item) => {
    return (sum += item);
  });
  let avg = sum / amount;
  console.log(avg);
}
operation();

const operate = function () {
    let total = 0
    let verity = scores.length
    for (let i = 0; i < scores.length; i++) {
        const element = scores[i];
        total = element+total
        average = total /verity
    }
    console.log(average);

}
operate()