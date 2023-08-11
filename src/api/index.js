import Chance from "chance";    

const chance = Chance();

 export const fackUSerData = () => {
     return (chance.name({ middle: true }));
};

fackUSerData();




