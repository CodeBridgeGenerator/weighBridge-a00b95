
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
estateName: faker.lorem.sentence(1),
productType: faker.lorem.sentence(1),
productName: faker.lorem.sentence(1),
productDescription: faker.lorem.sentence(1),
block: faker.lorem.sentence(1),
division: faker.lorem.sentence(1),
yop: faker.lorem.sentence(1),
weight: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
