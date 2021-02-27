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

    public firstName(): string{
        return faker.name.firstName();
    }

    public lastName(): string{
        return faker.name.lastName();
    }

    public address(): string{
        return faker.address.cardinalDirection()
    }

    public country(): string{
        return faker.address.country();
    }

    public image(): string{
        return faker.random.image();
    }

}