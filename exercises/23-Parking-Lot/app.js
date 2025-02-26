let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]

// Your code here
function getParkingLotState(arr){
  let state= {
    totalslots: 0,
    AvailableSlots: 0,
    OccupiedSlots: 0,
  }
  for (let i = 0; i < arr.length; i++) {
    for (let k = 0; k < arr[i].length; k++) {
      if (arr[i][k] === 2) {
        state.AvailableSlots = state.AvailableSlots + 1
        state.totalslots = state.totalslots + 1
      }
      else if(arr[i][k] === 1){
        state.OccupiedSlots= state.OccupiedSlots + 1
        state.totalslots= state.totalslots+1
      }
      }
    }
    return state
  }



console.log(getParkingLotState(parkingState))
