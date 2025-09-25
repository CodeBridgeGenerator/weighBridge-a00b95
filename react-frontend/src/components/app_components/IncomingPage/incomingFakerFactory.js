
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
product: faker.lorem.sentence(1),
estate: faker.lorem.sentence(1),
doNumber: faker.lorem.sentence(1),
trailorNumber: faker.lorem.sentence(1),
remark: faker.lorem.sentence(1),
seal: faker.lorem.sentence(1),
contract: faker.lorem.sentence(1),
vehicleNumber: faker.lorem.sentence(1),
supplier: faker.lorem.sentence(1),
driver: faker.lorem.sentence(1),
transporter: faker.lorem.sentence(1),
firstWeight: faker.lorem.sentence(1),
secondWeight: faker.lorem.sentence(1),
adjustment: faker.lorem.sentence(1),
adjustedWeight: faker.lorem.sentence(1),
netWeight: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
