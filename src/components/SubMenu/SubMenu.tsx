import {useState} from "react";
import SubCategories from "./SubCategories.tsx";
import {Categorie, SubCategorie} from "./Menu.ts";


function SubMenu() {
    const menuData: Categorie[] =
        [
            {
                "name": "Women",
                "link": "/womens",
                "subCategories": [
                    {
                        "name": "New Arrivals",
                        "link": "/collection/womens-new-arrivals",
                        "section": [
                            {
                                "title": "Featured Collection",
                                "links": [
                                    {
                                        "name": "Shop All New Arrivals",
                                        "link": "/collections/new-arrivals"
                                    },
                                    {
                                        "name": "The Cozy Shop",
                                        "link": "/collections/the-cozy-shop"
                                    },
                                    {
                                        "name": "Workwear",
                                        "link": "/collections/workwear"
                                    },
                                    {
                                        "name": "Trending Colors",
                                        "link": "/collections/trending-colors"
                                    }
                                ]
                            },
                            {
                                "title": "FEATURED CATEGORIES",
                                "links": [
                                    {
                                        "name": "New Dresses",
                                        "link": "/collections/New Dresses"
                                    },
                                    {
                                        "name": "New Tops",
                                        "link": "/collections/New Tops"
                                    },
                                    {
                                        "name": "New Jeans",
                                        "link": "/collections/New Jeans"
                                    },
                                    {
                                        "name": "New Shoes",
                                        "link": "/collections/New Shoes"
                                    },
                                    {
                                        "name": "New Sweaters",
                                        "link": "/collections/New Sweaters"
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        "name": "Best-Sellers",
                        "link": "/collection/womens-best-sellers",
                        "section": [
                            {
                                "title": "BEST-SELLERS",
                                "links": [
                                    {
                                        "name": "Shop All Best-Sellers",
                                        "link": "/collections/Shop All Best-Sellers"
                                    },
                                    {
                                        "name": "Best-Selling Sweaters",
                                        "link": "/collections/Best-Selling Sweaters"
                                    },
                                    {
                                        "name": "Best-Selling Tops",
                                        "link": "/collections/Best-Selling Tops"
                                    },
                                    {
                                        "name": "Best-Selling Jeans & Denim",
                                        "link": "/collections/Best-Selling Jeans & Denim"
                                    },
                                    {
                                        "name": "Best-Selling Pants & Bottoms",
                                        "link": "/collections/Best-Selling Pants & Bottoms"
                                    },
                                    {
                                        "name": "Best-Selling Shoes & Bags",
                                        "link": "/collections/Best-Selling Shoes & Bags"
                                    }
                                ]
                            },
                        ]
                    },

                    {
                        "name": "Clothing",
                        "link": "/collection/womens-Clothing",
                        "section": [
                            {
                                "title": "CLOTHING",
                                "links": [
                                    {
                                        "name": "Shop All Clothing",
                                        "link": "/collections/Shop All Clothing"
                                    },
                                    {
                                        "name": "Sweaters",
                                        "link": "/collections/Sweaters"
                                    },
                                    {
                                        "name": "Jeans & Denim",
                                        "link": "/collections/Jeans & Denim"
                                    },
                                    {
                                        "name": "Pants & Bottoms",
                                        "link": "/collections/Pants & Bottoms"
                                    },
                                    {
                                        "name": " Dresses",
                                        "link": "/collections/ Dresses"
                                    },
                                    {
                                        "name": "Activewear & Loungewear",
                                        "link": "/collections/Activewear & Loungewear"
                                    },
                                    {
                                        "name": "Intimates",
                                        "link": "/collections/Intimates"
                                    },
                                    {
                                        "name": "Swimsuits",
                                        "link": "/collections/Swimsuits"
                                    }
                                ]
                            },
                            {
                                "title": "TOPS",
                                "links": [
                                    {
                                        "name": "Shop All Tops",
                                        "link": "/collections/Shop All Tops"
                                    },
                                    {
                                        "name": "Shirts & Blouses",
                                        "link": "/collections/Shirts & Blouses"
                                    },
                                    {
                                        "name": "T-Shirts & Tank Tops",
                                        "link": "/collections/T-Shirts & Tank Tops"
                                    },
                                    {
                                        "name": "Bodysuits",
                                        "link": "/collections/Bodysuits"
                                    },
                                    {
                                        "name": "Sweatshirts & Hoodies",
                                        "link": "/collections/Sweatshirts & Hoodies"
                                    }
                                ]
                            },
                            {
                                "title": "PANTS & BOTTOMS",
                                "links": [
                                    {
                                        "name": "Shop All Pants & Bottoms",
                                        "link": "/collections/Shop All Pants & Bottoms"
                                    },
                                    {
                                        "name": "Pants & Trousers",
                                        "link": "/collections/Pants & Trousers"
                                    },
                                    {
                                        "name": "Jeans & Denim",
                                        "link": "/collections/Jeans & Denim"
                                    },
                                    {
                                        "name": "Skirts",
                                        "link": "/collections/Skirts"
                                    },
                                    {
                                        "name": "Shorts",
                                        "link": "/collections/Shorts"
                                    },]
                            },
                            {
                                "title": "COATS & BLAZERS",
                                "links": [
                                    {
                                        "name": "Shop All Coats & Blazers",
                                        "link": "/collections/Shop All Coats & Blazers"
                                    },
                                    {
                                        "name": "Coats & Jackets",
                                        "link": "/collections/Coats & Jackets"
                                    },
                                    {
                                        "name": "Puffers & Quilted Jackets",
                                        "link": "/collections/Puffers & Quilted Jackets"
                                    },
                                    {
                                        "name": "Blazers",
                                        "link": "/collections/Blazers"
                                    },

                                ]
                            },
                        ]

                    },
                    {"name": "Sweaters"},
                    {"name": "Jeans & Denim"},
                    {"name": "Dresses"},
                    {"name": "Shoes, Bags, & Accessories"},
                    {"name": "Sale"}

                ]
            }

            ,
            {
                "name":
                    "Men"
            }
            ,
            {
                "name":
                    "About"
            }
            ,
            {
                "name":
                    "Everworld Stories"
            }
            ,
        ];
    const [currentSubCategories, setCurrentSubCategories] = useState<SubCategorie[]>([]);

    return (
        <div className="SubMenu">
            <div className="w-full justify-center items-center flex flex-col">
                {menuData.map((category:Categorie) => (
                    <button
                        className="cursor-pointer"
                        key={category.name}
                        onClick={() =>
                            setCurrentSubCategories(category.subCategories ? category.subCategories : [])
                        }
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            {currentSubCategories.length > 0 && <SubCategories data={currentSubCategories}/>}
        </div>
    );
}

export default SubMenu;
