
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
driverId: faker.lorem.sentence(1),
driverName: faker.lorem.sentence(1),
icNumber: faker.lorem.sentence(1),
licenseNumber: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
