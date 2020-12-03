interface RocketModule {
  mass: number;
  fuelRequirement: number;
  totalFuelRequirement: number;
}

interface RocketModuleData {
  data: RocketModule[];
  sumFuel: number;
  sumTotalFuel: number;
}

const calculateFuelRequirement = (mass: number): number => {
  return Math.max(0, Math.floor(mass / 3) - 2);
}

const calculateTotalFuelRequirement = (mass: number): number => {
  let ret: number = 0;
  while (mass > 0) {
    mass = calculateFuelRequirement(mass);
    ret += mass;
  }

  return ret;
}

export default (dataSet: number[]) => {
  let expandedDataSet: RocketModuleData = {
    data: [],
    sumFuel: 0,
    sumTotalFuel: 0
  };

  dataSet.forEach((mass: number) => {
    let rocketModule: RocketModule = {
      mass: mass,
      fuelRequirement: calculateFuelRequirement(mass),
      totalFuelRequirement: calculateTotalFuelRequirement(mass),
    };

    expandedDataSet.data.push(rocketModule);
  });

  expandedDataSet.data.forEach((module: RocketModule) => {
    expandedDataSet.sumFuel += module.fuelRequirement;
    expandedDataSet.sumTotalFuel += module.totalFuelRequirement;
  });

  return expandedDataSet;
};
