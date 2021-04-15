import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private productService;
    constructor(productService: ProductService);
    uploadedMultipleFile(createProductDto: CreateProductDto, req: any, images: any): Promise<void>;
    getAll(): Promise<import("./entity/product.entity").Product[]>;
    getProducts(query: any): Promise<import("./entity/product.entity").Product[]>;
    getByFilters(query: any): Promise<import("./entity/product.entity").Product[]>;
    findImage(imagename: string, res: any): Promise<any>;
    getById(id: string): Promise<import("./entity/product.entity").Product>;
}
