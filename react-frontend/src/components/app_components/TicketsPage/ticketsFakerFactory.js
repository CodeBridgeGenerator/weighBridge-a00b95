
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ticketNumber: faker.lorem.sentence(1),
block: faker.lorem.sentence(1),
division: faker.lorem.sentence(1),
yop: faker.lorem.sentence(1),
loader: faker.lorem.sentence(1),
bunch: faker.lorem.sentence(1),
netWeight: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
