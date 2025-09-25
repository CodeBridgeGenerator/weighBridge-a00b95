
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
supplierCode: faker.lorem.sentence(1),
supplierName: faker.lorem.sentence(1),
company: faker.lorem.sentence(1),
addressOne: faker.lorem.sentence(1),
addressTwo: faker.lorem.sentence(1),
addressThree: faker.lorem.sentence(1),
postcode: faker.lorem.sentence(1),
telephone: faker.lorem.sentence(1),
fax: faker.lorem.sentence(1),
mpobCertificateNumber: faker.lorem.sentence(1),
certificateName: faker.lorem.sentence(1),
expiryDate: faker.lorem.sentence(1),
plantedHa: faker.lorem.sentence(1),
yop: faker.lorem.sentence(1),
uploadCertificate: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
