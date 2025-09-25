
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
ticketNumber: faker.lorem.sentence(1),
unripeBunch: faker.lorem.sentence(1),
longStalk: faker.lorem.sentence(1),
rottenBunch: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
