
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
january: faker.lorem.sentence(1),
february: faker.lorem.sentence(1),
march: faker.lorem.sentence(1),
april: faker.lorem.sentence(1),
may: faker.lorem.sentence(1),
june: faker.lorem.sentence(1),
july: faker.lorem.sentence(1),
august: faker.lorem.sentence(1),
september: faker.lorem.sentence(1),
october: faker.lorem.sentence(1),
november: faker.lorem.sentence(1),
december: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
