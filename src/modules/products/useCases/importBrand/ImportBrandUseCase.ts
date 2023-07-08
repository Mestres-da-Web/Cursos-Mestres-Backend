import fs from "fs"
import {parse} from "csv-parse"
import { IBrandsRepository } from "../../repositories/IBrandsRepository";


interface IImportBrand{
  name:string
}

class ImportBrandUseCase {
  constructor(private brandsRepository: IBrandsRepository) {}
  loadBrands(file: Express.Multer.File): Promise<IImportBrand[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const brands: IImportBrand[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);
      parseFile
        .on('data', async (line) => {
          const [name] = line;
          brands.push({ name });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(brands);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const brands = await this.loadBrands(file);

    brands.map(async (brand) => {
      const { name } = brand;

      const existBrand = this.brandsRepository.findByName({name});
      if (!existBrand) {
        this.brandsRepository.create({ name });
      }
    });
    console.log(brands);
  }
}

export { ImportBrandUseCase };