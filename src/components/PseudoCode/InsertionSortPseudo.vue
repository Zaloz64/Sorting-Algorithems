<template>
  <code>
    i ← 1
    while i &lt; length(A) <br>
    &nbsp; x ← A[i] <br>
    &nbsp; j ← i - 1 <br>
    &nbsp; while j >= 0 and A[j] > x <br>
    &nbsp; &nbsp; A[j+1] ← A[j] <br>
    &nbsp; &nbsp; j ← j - 1 <br>
    &nbsp; end while <br>
    &nbsp; A[j+1] ← x[3] <br>
    &nbsp; i ← i + 1 <br>
  end while <br>
  </code>

</template>