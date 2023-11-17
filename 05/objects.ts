// : number
// : string
// : number[]

type User = {
    name: string;
    email: string;
    age?: number;
    newsletter: boolean;
    setNewsletter: (value: boolean) => void;
    profile: {
        avatarColor: string;
        description: string;
        level: number
    }
}

let user1: User = {
    name: 'Jeff',
    email: 'example.com',
    newsletter: false,
    setNewsletter: function setUserNewsletter(value: boolean) {
        this.newsletter = value
    },
    profile: {
        level: 14,
        avatarColor: 'blue',
        description: 'example description',
    }
}

// console.log(user1.profile);

// create type Monitor
// create function createMonitorObject
// arg1: model
// arg2: price
// return { model, price }

type Monitor = {
    model: string;
    price: number;
}

function createMonitorObject(model, price): Monitor {
    return { model, price }
}

const monitor1 = createMonitorObject('ABC', 120);

// create function sendWelsomeMessage()
// arg1: User
// return: 'Welcome Jeff, nice to see you :)'
function sendWelcomeMessage(user: User) {
    return `Welcome ${user.name}, nice to see you :)`
}

console.log(sendWelcomeMessage(user1));
