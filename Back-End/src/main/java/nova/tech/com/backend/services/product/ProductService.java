package nova.tech.com.backend.services.product;

import nova.tech.com.backend.dtos.request.ProductRequest;
import nova.tech.com.backend.dtos.response.PageResponse;
import nova.tech.com.backend.dtos.response.ProductResponse;

import java.util.List;

public interface ProductService {
    PageResponse searchProduct(
            int page, int limit, String brand,String category, String[] search, boolean active,
            String... sort);
    List<ProductResponse> getTop10ProductsByCategory(Long cid);
    ProductResponse getProductById(Long id);
    PageResponse getAllProducts(int page, int limit);
    void createProduct(ProductRequest productRequest);
    void deleteImageProduct(Long productId, Long imageId);
    void addImageProduct(Long productId, String imageUrl);
    void updateProduct(Long id, ProductRequest productRequest);
    List<ProductResponse> getRandom10Products(String slug);
    ProductResponse getProductBySlug(String slug);
    void increaseViewCount(String slug);
}
