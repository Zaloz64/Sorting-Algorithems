<template>
  <code>
    for i in 1 to length(A) do: <br>
    &nbsp; for j in length(A) downto i + 1 do: <br>
    &nbsp; &nbsp; if A[ j-1 ] > A[ j ] then <br>
    &nbsp; &nbsp; &nbsp; swap(A[ j-1 ], A[ j ]) <br>
    &nbsp; &nbsp; end if <br>
    &nbsp; end for <br>
    end for <br>
  </code>
</template>