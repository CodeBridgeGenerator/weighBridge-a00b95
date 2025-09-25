
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
estateWbTicketNumber: faker.lorem.sentence(1),
estateName: faker.lorem.sentence(1),
estateDoNumber: faker.lorem.sentence(1),
millTicketNumber: faker.lorem.sentence(1),
millReceivedTime: faker.lorem.sentence(1),
millDespatchTime: faker.lorem.sentence(1),
estateWeight: faker.lorem.sentence(1),
millWeight: faker.lorem.sentence(1),
millRejectedWeight: faker.lorem.sentence(1),
penalty: faker.lorem.sentence(1),
oer: faker.lorem.sentence(1),
cropHarvestedBy: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
