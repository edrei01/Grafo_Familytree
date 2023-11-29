const   familytree = [
  {
    name: "Rick_Sanchez",
    father: null,
    mother: null,
    spouse: "Diane_Sanchez",
    children: [
      {
        name: "Morty_Smith",
        father: "Jerry_Smith",
        mother: "Beth_Sanchez",
        spouse: "Jessica",
        children: [
          {
            name: "Summer_Smith",
            father: "Morty_Smith",
            mother: "Jessica",
            spouse: null,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Morty_Smith",
    father: "Rick_Sanchez",
    mother: "Beth_Sanchez",
    spouse: "Jessica",
  
      
  },
  {
    name: "Diane_Sanchez",
    father: null,
    mother: null,
    spouse: "Rick_Sanchez",
    children: [
      {
        name: "Beth Sanchez",
        father: "Rick_Sanchez",
        mother: "Diane_Sanchez",
        spouse: "Jerry_Smith",
        children: [
          {
            name: "Morty Smith",
            father: "Jerry_Smith",
            mother: "Beth_Sanchez",
            spouse: "Jessica",
            children: [
              {
                name: "Summer Smith",
                father:"Morty_Smith",
                mother: "Jessica",
                spouse: null,
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Jerry_Smith",
    father: null,
    mother: null,
    spouse: "Beth_Sanchez",
    children: [
      {
        name: "Morty_Smith",
        father: "Jerry_Smith",
        mother: "Beth_Sanchez",
        spouse: "Jessica",
        children: [
          {
            name: "Summer Smith",
            father: "Morty_Smith",
            mother: "Jessica",
            spouse: null,
            children: null,
          },
        ],
      },
    ],
  },
  {
    name: "Summer_Smith",
    father: "Rick_Sanchez",
    mother: "Diane_Sanchez",
    spouse: null,
    children: null,
  },
  {
    name: "Jessica",
    father: null,
    mother: null,
    spouse: "Morty_Smith",
    children: [
      {
        name: "Summer_Smith",
        father: "Morty_Smith",
        mother: "Jessica",
        spouse: null,
        children: null,
      },
    ],
  },
  {
    name: "Birdperson",
    father: null,
    mother: null,
    spouse: "Tammy",
    children: null,
  },
  {
    name: "Tammy",
    father: null,
    mother: null,
    spouse: "Birdperson",
    children: null,
  },
  {
    name: "Zeep Sanchez",
    father: "Rick_Sanchez",
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Doofus Rick",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Evil Morty",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Krombopulus Michael",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Mr. Poopybutthole",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Snuffles",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Scary Terry",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Goldenfold",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Shnurturp",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Blemflarck",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Fart",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Mr. Meeseeks",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Unity",
    father: null,
    mother: null,
    spouse: "Rick_Sanchez",
    children: null,
  },
  {
    name: "Squanchy",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Gearhead",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Floyd",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Betty",
    father: null,
    mother: null,
    spouse: "Rick_Sanchez",
    children: [
      {
        name: "Beth Sanchez",
        father: "Rick_Sanchez",
        mother: "Betty",
        spouse: "Jerry_Smith",
        children: [
          {
            name: "Morty Smith",
            father: "Jerry_Smith",
            mother: "Beth_Sanchez",
            spouse: "Jessica",
            children: [
              {
                name: "Summer Smith",
                father: "Morty_Smith",
                mother: "Jessica",
                spouse: null,
                children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Frank Grimes",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Mr. Goldenfold",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Mr. Poopybutthole",
    father: null,
    mother: null,
    spouse: null,
    children: null,
  },
  {
    name: "Morty Jr.",
    father: "Morty_Smith",
    mother: "Jessica",
    spouse: null,
    children: null,
  },
  {
    name: "Rick Jr.",
    father: "Rick_Sanchez",
    mother: "Diane_Sanchez",
    spouse: null,
    children: null,
  }

]
export default familytree;