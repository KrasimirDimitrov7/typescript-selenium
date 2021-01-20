import * as faker from 'faker';



export class Faker {
    constructor() {
    }

    public fakeEmail(): string{
        return faker.internet.email();
    }

    public fakePass(): string{
        return faker.internet.password();
    }
}