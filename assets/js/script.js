const list = document.querySelector('ul');

const team = [
    {
        firstName: 'Wayne',
        lastName: 'Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }
]

console.log(team);
// console.log(team[1].firstName);

// milestone 1
for (let key in team) {
    const property = team[key]

    console.log('firstname -->', property.firstName);
    console.log('lastname -->', property.lastName);
    console.log('role -->', property.role);
    console.log('image -->', property.image);
    // console.log('property -->', property);

    list.innerHTML += `
    <li>
    <img src="assets/img/${property.image}"><br>
    <span>${property.firstName} ${property.lastName}</span> <br>
    ${property.role} <br>
    </li>
    `
}

// for (const el of team) {

//         console.log('el', el);
// }
//////////////////////////////////////////////
// for (let i = 0; i < team.length; i++) {
//     const element = team[i];
    
//     console.log(element);
// }