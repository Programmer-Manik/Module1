{
   // type union
//    type FrontDeveloper = 'front' | 'no-Developer';
//    type BackendDeveloper = 'Backend' | 'FrontDeveloper';
//    type FullStareDeveloper = FrontDeveloper | BackendDeveloper;
//    const newDeveloper : FullStareDeveloper = "Backend";

//    type User = {
//      name : string ;
//      gender : "male" | "female" ;
//      bloodGroup : "O+" | "a+" | "AB";
//    }
//    const user : User = {
//     name : "man",
//     gender : 'female',
//     bloodGroup : "O+"
//    }

   // intersection type 

   type FrontDevelopers = {
    skills : string[];
    desigNation1 : "front developer"
   }
   type BackDevelopers = {
    skills : string[];
    desigNation2 : "backend developer"
   }

   type FullstackDeveloper = FrontDevelopers & BackDevelopers;

   const fullStackDeveloper: FullstackDeveloper ={
     skills : ['html',"css"],
     desigNation1 : "front developer",
     desigNation2 : "backend developer"
   }

   

}