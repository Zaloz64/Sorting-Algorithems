

class Algorithems {

    static createArray(amount) {
        var numbers = [];
        for (let i = 0; i < amount; i++) {
            numbers.push((Math.floor(Math.random() * 101) + 10) * 2);
        }
        return numbers;
    }

    static timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    static swap(items, leftIndex, rightIndex) {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
}
export default Algorithems;

