const { readFileSync } = require("fs");
const input = readFileSync("/dev/stdin", "utf8").split("\n");

// convert a string to an integer
const toInt = value => Number.parseInt(value, 10);

// loop through the input lines & processing each test case
for (let idx = 0, cityIdx = 1; idx < input.length; idx++) {
    // read the number of houses for the current city
    const housesList = toInt(input[idx]);
    
    // if the number of houses is 0, end the input processing
    if (housesList === 0) break;

    // initialize arrays to store consumption data and a list for resident counts
    const consumedList = [], residentsList = [];
    
    // initialize total consumption and total residents counters
    let totalConsumed = 0, totalResidents = 0;

    // loop through each house's data in the current city
    for (let i = 0; i < housesList; i++, idx++) {
        const [residents, consumed] = input[idx + 1].split(" ").map(toInt);
        
        // calculate the consumption per resident, rounding down
        const consumedPerResident = Math.floor(consumed / residents);
        
        // update the total number of residents and total consumption
        totalResidents += residents;
        totalConsumed += consumed;

        // find the index of the current consumption per resident in the list
        const pos = consumedList.indexOf(consumedPerResident);
     
        pos >= 0 ? residentsList[pos] += residents : (consumedList.push(consumedPerResident), residentsList.push(residents));
    }

    // calculate the average consumption per resident
    const avgConsumption = (totalConsumed / totalResidents).toFixed(4).slice(0, -2);
    
    // prepare the consumption data for output, sorted by consumption per resident
    const consumptionData = consumedList.map((val, i) => `${residentsList[i]}-${val}`)
                                        .sort((a, b) => parseInt(a.split('-')[1]) - parseInt(b.split('-')[1]))
                                        .join(" ");

    // print the formatted output for the current city
    console.log(`Cidade# ${cityIdx++}:\n${consumptionData}\nConsumo medio: ${avgConsumption} m3.`);
}
