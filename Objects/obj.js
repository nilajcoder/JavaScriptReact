
/*
                    


Nested Object


*/

const twoObject = [
  {
    color: [
      {
        red:[
            {name :"red"}
        ]
      } ,

      {
        blue:[
           {name:"slotz"} ,
           {
            sky:[
                {name:"stone"}
            ]
           }
        ]
      } ,
      {
        yellow:[
            {
                gold:[
                   {name:"Corn"} 
                ]
            },
            {
                wtlor:[
                    {name:"blonde"},
                    {name:"fire"}
                ]
            }  
        ]
      } ,
      {
        black:[
            {
                name:"white"
            }
        ]
      }

    ]
  },
  {
    cars: [
      {
        truck: [
          { name: "Ashoke" },
          { name: "Tata" }
        ]
      },
      {
        passenger: [
          { name: "BMW" },
          { name: "Suzuki" },
          { name: "Honda" },
          {
            tata: [
              { name: "Safari" },
              { name: "Nano" }
            ]
          }
        ]
      },
      {
        auto: {
          name: "Auto"
        }
      }
    ]
  }
];

console.log(twoObject)





 