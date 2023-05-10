import images from "./images";

const featuredProperties = [
    {
        imgUrl: images.apartment1,
        buildingType: 'Apartment',
        condition: 'Renovated Apartment',
        price: '$13,000 /mo',
        location: '1421 Chester Street Hamilton, New Zealand',
        type: 'For Rent',
        beds: '4',
        baths: '2',
        code: '5486',
    },
    {
        imgUrl: images.apartment2,
        buildingType: 'Apartment',
        condition: 'Renovated Apartment',
        price: '217,920',
        location: '1421 Chester Street Hamilton, New Zealand',
        type: 'For Sale',
        beds: '4',
        baths: '2',
        code: '5487',
    },
    {
        imgUrl: images.apartment3,
        buildingType: 'House',
        condition: 'Renovated House',
        price: '$13,000 /mo',
        location: '1421 Chester Street Hamilton, New Zealand',
        type: 'For Rent',
        beds: '4',
        baths: '2',
        code: '5488',
    },
];

const popularPlaces = [
    {
        imgUrl: images.house1,
        location: 'Auckland, New Zeland',
        properties: '21'
    },
  
    {
        imgUrl: images.house2,
        location: 'Hamilton, New Zeland',
        properties: '18'
    },
    {
        imgUrl: images.house3,
        location: 'Wellington, New Zeland',
        properties: '16'
    },
    {
        imgUrl: images.house4,
        location: 'Napier, New Zeland',
        properties: '14'
    },
    {
        imgUrl: images.house5,
        location: 'Hamilton, New Zeland',
        properties: '13'
    },
    {
        imgUrl: images.house6,
        location: 'Nelson, New Zeland',
        properties: '17'
    },
];

const agents =[
    {
        imgUrl: images.agent1,
        name: "Ian Anderson",
        position: "Creative Director"

    },
    {
        imgUrl: images.agent2,
        name: "Noah Hughes",
        position: "Real Estate Agent"

    },
    {
        imgUrl: images.agent3,
        name: "Oliver Collins",
        position: "Real Estate Manager"

    },
    {
        imgUrl: images.agent4,
        name: "Ethan Thompson",
        position: "Assistant Director"

    }
];

const testimonial =[
    {
        imgUrl: images.person1,
        title: 'The results given are very satisfying',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        name: 'Matthew Parker',
        position:'Product Manager',
    },
    {
        imgUrl: images.person2,
        title: 'A Real Estate Success Story',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        name: 'Samuel  Collins',
        position:'Product Manager',
    },
    {
        imgUrl: images.person3,
        title: ' A Stellar Real Estate Experience',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        name: 'Sophia Carter',
        position:'Product Manager',
    },
    {
        imgUrl: images.person4,
        title: 'My Remarkable Real Estate Journey',
        desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.',
        name: 'Amelia Murphy',
        position:'Product Manager',
    },
];
const blog = [
    {
        imgUrl: images.blog1,
        title: "Exploring the Best Areas to Live",
        name: "William Rivera",
        date: "May 2, 2023"
    },
    {
        imgUrl: images.blog2,
        title: "Stay Informed, Make Smart Choices",
        name: "Ava Mitchell",
        date: "May 3, 2023"
    },
    {
        imgUrl: images.blog3,
        title: "A Real Estate Success Story",
        name: "Mia Cooper",
        date: "May 4, 2023"
    },
    {
        imgUrl: images.blog4,
        title: "A Testimonial Reflecting Real Estate Mastery",
        name: "Alexander Price",
        date: "May 5, 2023"
    },
    {
        imgUrl: images.blog5,
        title: "A Testimonial of Excellence in Real Estate",
        name: "Charlotte Bennett",
        date: "May 7, 2023"
    },
    {
        imgUrl: images.blog6,
        title: "My Remarkable Real Estate Journey",
        name: "Harper Turner",
        date: "May 9, 2023"
    },
];
export default { featuredProperties, popularPlaces, agents, testimonial, blog};