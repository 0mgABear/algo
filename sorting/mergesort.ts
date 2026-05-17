function mergeSort(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) return;

  const mid = Math.floor((lo + hi) / 2);
  mergeSort(arr, lo, mid);
  mergeSort(arr, mid + 1, hi);
  merge(arr, lo, mid, hi);
}

function merge(arr: number[], lo: number, mid: number, hi: number): void {
  const tmp: number[] = [];
  let i = lo;
  let j = mid + 1;

  // compare and merge
  while (i <= mid && j <= hi) {
    if (arr[i] <= arr[j]) {
      tmp.push(arr[i++]);
    } else {
      tmp.push(arr[j++]);
    }
  }

  // leftover from left side
  while (i <= mid) tmp.push(arr[i++]);

  // leftover from right side
  while (j <= hi) tmp.push(arr[j++]);

  // copy back into original array
  for (let k = 0; k < tmp.length; k++) {
    arr[lo + k] = tmp[k];
  }
}

export default function merge_sort(arr: number[]): void {
  mergeSort(arr, 0, arr.length - 1);
}
