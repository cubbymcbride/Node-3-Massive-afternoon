UPDATE product
SET name = ${name},
    description = ${description},
    price = ${price},
    image_url = ${image_url}
WHERE id= ${id};

SELECT * FROM product;
