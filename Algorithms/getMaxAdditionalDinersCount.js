N = 10
K = 1
M = 2
S = [2, 6]

function getMaxAdditionalDinersCount(N, K, M, S) {
  
    sortedArray = S.sort((a,b) => a - b);

    let start = 1;
    let maxAdditionalDiners = 0;

    for (const seat of sortedArray) {

        let gap = seat - start;
        maxAdditionalDiners += Math.max(Math.floor(gap / (K + 1)), 0);
        start = seat + 1 + K;

        console.log(gap, start, maxAdditionalDiners)
    }

    maxAdditionalDiners += Math.max(Math.floor((N - S[M - 1]) / (K + 1)), 0);
    console.log(maxAdditionalDiners);
    return maxAdditionalDiners;
  }

  getMaxAdditionalDinersCount(N, K, M, S);

  /*

  N = number of seats
  K = gap between seats
  M = number of taken seats
  S = index of seats taken

  */