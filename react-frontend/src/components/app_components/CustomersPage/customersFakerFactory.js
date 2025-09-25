
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
customerCode: faker.lorem.sentence(1),
customerName: faker.lorem.sentence(1),
address1: faker.lorem.sentence(1),
address2: faker.lorem.sentence(1),
address3: faker.lorem.sentence(1),
npwpNumber: faker.lorem.sentence(1),
telephone: faker.lorem.sentence(1),
fax: faker.lorem.sentence(1),
estate: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
