
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
estateCode: faker.lorem.sentence(1),
estateName: faker.lorem.sentence(1),
companyName: faker.lorem.sentence(1),
addressOne: faker.lorem.sentence(1),
addressTwo: faker.lorem.sentence(1),
addressThree: faker.lorem.sentence(1),
telephone: faker.lorem.sentence(1),
fax: faker.lorem.sentence(1),
remark: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
