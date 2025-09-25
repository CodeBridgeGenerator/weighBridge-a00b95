
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
vehicleNumber: faker.lorem.sentence(1),
vehicleDescription: faker.lorem.sentence(1),
vehicleRegistrationNumber: faker.lorem.sentence(1),
transporter: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
