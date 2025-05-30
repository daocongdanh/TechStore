package nova.tech.com.backend.dtos.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;
import nova.tech.com.backend.models.Brand;
import nova.tech.com.backend.models.Category;
import nova.tech.com.backend.models.Product;
import nova.tech.com.backend.models.ProductAttributeValue;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ProductResponse {

    private Long id;
    private String name;
    private String slug;
    private String thumbnail;
    private Integer oldPrice;
    private Integer newPrice;
    private Integer discount;
    private Integer viewCount;
    private String note;
    private List<ImageResponse> images;
    private String description;
    private Integer quantity;
    private Boolean active;
    private Brand brand;
    private Category category;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<ProductAttributeResponse> attributes;

    public static ProductResponse convertEntityToResponse(Product product, List<ProductAttributeValue> productAttributeValues){

        List<ProductAttributeResponse> list = new ArrayList<>();
        if(productAttributeValues != null){
            list = productAttributeValues.stream()
                    .map(pa -> ProductAttributeResponse.builder()
                            .attributeId(pa.getAttribute().getId())
                            .slug(pa.getAttribute().getSlug())
                            .value(pa.getValue())
                            .label(pa.getAttribute().getLabel())
                            .build())
                    .toList();
        }
        List<ImageResponse> images = product.getImages().stream()
                .map(ImageResponse::convertEntityToResponse)
                .toList();

        return ProductResponse.builder()
                .id(product.getId())
                .name(product.getName())
                .slug(product.getSlug())
                .thumbnail(product.getThumbnail())
                .oldPrice(product.getOldPrice())
                .newPrice(product.getNewPrice())
                .discount(product.getDiscount())
                .viewCount(product.getViewCount())
                .images(images)
                .note(product.getNote())
                .description(product.getDescription())
                .quantity(product.getQuantity())
                .active(product.getActive())
                .brand(product.getBrand())
                .category(product.getCategory())
                .attributes(list)
                .build();
    }
}
