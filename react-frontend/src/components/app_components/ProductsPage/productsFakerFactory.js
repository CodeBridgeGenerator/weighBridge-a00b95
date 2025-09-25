
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
productCode: faker.lorem.sentence(1),
description: faker.lorem.sentence(1),
estate: faker.lorem.sentence(1),
unit: faker.lorem.sentence(1),
vat: faker.lorem.sentence(1),
type: faker.lorem.sentence(1),
weight: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
