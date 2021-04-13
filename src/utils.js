

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

    static getMergeSortAnimations(array) {
        const animations = [];
        if (array.length <= 1) return array;
        const auxiliaryArray = array.slice();
        this.mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
        return animations;
    }

    static mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
        if (startIdx === endIdx) return;
        const middleIdx = Math.floor((startIdx + endIdx) / 2);
        this.mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
        this.mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
        this.doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
    }

    static doMerge(
        mainArray,
        startIdx,
        middleIdx,
        endIdx,
        auxiliaryArray,
        animations,
    ) {
        let k = startIdx;
        let i = startIdx;
        let j = middleIdx + 1;
        while (i <= middleIdx && j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, j]);
            if (auxiliaryArray[i] <= auxiliaryArray[j]) {
                // We overwrite the value at index k in the original array with the
                // value at index i in the auxiliary array.
                animations.push([k, auxiliaryArray[i]]);
                mainArray[k++] = auxiliaryArray[i++];
            } else {
                // We overwrite the value at index k in the original array with the
                // value at index j in the auxiliary array.
                animations.push([k, auxiliaryArray[j]]);
                mainArray[k++] = auxiliaryArray[j++];
            }
        }
        while (i <= middleIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([i, i]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([i, i]);
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiliary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        }
        while (j <= endIdx) {
            // These are the values that we're comparing; we push them once
            // to change their color.
            animations.push([j, j]);
            // These are the values that we're comparing; we push them a second
            // time to revert their color.
            animations.push([j, j]);
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    static swap(items, leftIndex, rightIndex) {
        var temp = items[leftIndex];
        items[leftIndex] = items[rightIndex];
        items[rightIndex] = temp;
    }
    static partition(items, left, right, animations) {
        var pivot = items[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                animations.push([i, j]);
                animations.push([i, items[j]]);
                animations.push([j, items[i]]);
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    static quickSort(items, left, right, animations) {
        var index;
        if (items.length > 1) {
            index = this.partition(items, left, right, animations); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(items, left, index - 1, animations);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(items, index, right, animations);
            }
        }
        return animations;
    }

    static getQuickSortAnimation(array) {
        var animations = [];
        animations = this.quickSort(array, 0, array.length - 1, animations)
        return animations;
    }

    static heapify(array, n, i, animations) {
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (l < n && array[l] > array[largest])
            largest = l;

        // If right child is larger than largest so far
        if (r < n && array[r] > array[largest])
            largest = r;

        // If largest is not root
        if (largest != i) {
            this.swap(array , i,largest);
            animations.push([i,largest])
            // Recursively heapify the affected sub-tree
            this.heapify(array, n, largest, animations);
        }
    }

    static heapSort(array, n, animations) {
        for (let i = n / 2 - 1; i >= 0; i--)
            this.heapify(array, n, i, animations);

        for (let i = n - 1; i > 0; i--) {
            // Move current root to end
            this.swap(array, 0, i);
            animations.push([0,i]);

            // call max heapify on the reduced heap
            this.heapify(array, i, 0, animations);
        }
    }


    static getHeapSortAnimation(array) {
        var animations = [];
        this.heapSort(array, array.length, animations);
        return animations;
    }



}
export default Algorithems;

// export default timeout;
