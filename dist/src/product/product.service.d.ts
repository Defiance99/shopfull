import { Repository } from "typeorm";
import { CreateProductDto } from "./dto/create-product.dto";
import { Product } from "./entity/product.entity";
export declare class ProductService {
    private productRepository;
    constructor(productRepository: Repository<Product>);
    create(images: string[], previewImg: string, productDto: CreateProductDto, userId: number): Promise<CreateProductDto & Product>;
    getAll(): Promise<Product[]>;
    getProducts(limit: number): Promise<Product[]>;
    findByFilters(category: string, day: string): Promise<Product[]>;
    findById(id: string): Promise<Product>;
}
