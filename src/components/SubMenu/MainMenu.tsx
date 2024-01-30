import {useState} from "react";
import SubCategories from "./SubCategories.tsx";
import {Categorie, LinkType, SubCategorie} from "./Menu.ts";
import {twMerge} from "tailwind-merge";


function MainMenu() {
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
                                    },

                                ]
                            },
                            {
                                "title": "newarrivals01",
                                "type": LinkType.IMG,
                                "image": "women.newarrivals1.png"
                            },
                            {
                                "title": "newarrivals02",
                                "type": LinkType.IMG,
                                "image": "women.newarrivals2.png"
                            }
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
                            {
                                "title": "bestsellers1",
                                "type": LinkType.IMG,
                                "image": "women.bestsellers1.png"
                            },
                            {
                                "title": "bestsellers2",
                                "type": LinkType.IMG,
                                "image": "women.bestsellers2.png"
                            },
                            {
                                "title": "bestsellers3",
                                "type": LinkType.IMG,
                                "image": "women.bestsellers3.png"
                            }
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
                    {
                        "name": "Sweaters",
                        "link": "/collection/womens-Sweaters",
                        "section": [

                            {
                                "title": "SILHOUETTE",
                                "links": [
                                    {
                                        "name": "Shop All Sweaters",
                                        "link": "/collections/Shop All Sweaters"
                                    },
                                    {
                                        "name": "Crew Sweaters",
                                        "link": "/collections/Crew Sweaters"
                                    },
                                    {
                                        "name": "V-Neck Sweaters",
                                        "link": "/collections/V-Neck Sweaters"
                                    },
                                    {
                                        "name": "Turtleneck Sweaters",
                                        "link": "/collections/Turtleneck Sweaters"
                                    },
                                    {
                                        "name": " Cardigans",
                                        "link": "/collections/ Cardigans"
                                    }
                                ]
                            },
                            {
                                "title": "FABRIC",
                                "links": [
                                    {
                                        "name": "Alpaca Sweaters",
                                        "link": "/collections/Alpaca Sweaters"
                                    },
                                    {
                                        "name": "Wool Sweaters",
                                        "link": "/collections/Wool Sweaters"
                                    },
                                    {
                                        "name": "Cashmere Sweaters",
                                        "link": "/collections/Cashmere Sweaters"
                                    },
                                    {
                                        "name": "Cotton Sweaters",
                                        "link": "/collections/Cotton Sweaters"
                                    },

                                ]
                            },
                            {
                                "title": "FIT",
                                "links": [
                                    {
                                        "name": "Cropped Sweaters",
                                        "link": "/collections/Cropped Sweaters"
                                    },
                                    {
                                        "name": "Oversized Sweaters",
                                        "link": "/collections/Oversized Sweaters"
                                    },
                                    {
                                        "name": "Fitted Sweaters",
                                        "link": "/collections/Fitted Sweaters"
                                    },

                                ]
                            },
                            {
                                "title": "FEATURED SHOPS",
                                "links": [
                                    {
                                        "name": "New Sweaters",
                                        "link": "/collections/New Sweaters"
                                    },
                                    {
                                        "name": "Best-Selling Sweaters",
                                        "link": "/collections/Best-Selling Sweaters"
                                    },
                                ]
                            }

                        ]

                    },
                    {
                        "name": "Jeans & Denim",
                        "link": "/collection/womens-Jeans & Denim",
                        "section": [
                            {
                                "title": "BY FIT",
                                "links": [
                                    {
                                        "name": "Shop All Jeans & Denim",
                                        "link": "/collections/Shop All Jeans & Denim"
                                    },
                                    {
                                        "name": "Straight Jeans",
                                        "link": "/collections/Straight Jeans"
                                    },
                                    {
                                        "name": "Wide-Leg & Flared Jeans",
                                        "link": "/collections/Wide-Leg & Flared Jeans"
                                    },
                                    {
                                        "name": "Relaxed & Baggy Jeans",
                                        "link": "/collections/Relaxed & Baggy Jeans"
                                    },
                                    {
                                        "name": "  Curvy Jeans",
                                        "link": "/collections/  Curvy Jeans"
                                    },
                                    {
                                        "name": "  Skinny Jeans",
                                        "link": "/collections/  Skinny Jeans"
                                    }
                                ]
                            },
                            {
                                "title": "BY INSEAM",
                                "links": [
                                    {
                                        "name": "Cropped Jeans",
                                        "link": "/collections/Cropped Jeans"
                                    },
                                    {
                                        "name": "Standard Jeans",
                                        "link": "/collections/Standard Jeans"
                                    },
                                    {
                                        "name": "Tall Jeans",
                                        "link": "/collections/Tall Jeans"
                                    },
                                ]
                            },
                            {
                                "title": "FEATURED SHOPS",
                                "links": [
                                    {
                                        "name": "New Jeans",
                                        "link": "/collections/New Jeans"
                                    },
                                    {
                                        "name": "Best-Selling Jeans",
                                        "link": "/collections/Best-Selling Jeans"
                                    },
                                    {
                                        "name": "Denim Shirts & Jackets",
                                        "link": "/collections/Denim Shirts & Jackets"
                                    },
                                    {
                                        "name": "Dark Wash Jeans",
                                        "link": "/collections/Dark Wash Jeans"
                                    },
                                    {
                                        "name": "Black Jeans",
                                        "link": "/collections/Black Jeans"
                                    },
                                    {
                                        "name": "The Denim Guide",
                                        "link": "/collections/The Denim Guide"
                                    },

                                ]
                            },
                            {
                                "title": "jeans&denim",
                                "type": LinkType.IMG,
                                "image": "women.jeans&denim1.png"
                            }

                        ]

                    },
                    {
                        "name": "Dresses",
                        "link": "/collection/womens-Dresses",
                        "section": [
                            {
                                "title": "SILHOUETTE",
                                "links": [
                                    {
                                        "name": "Shop All Dresses",
                                        "link": "/collections/Shop All Dresses"
                                    },
                                    {
                                        "name": "Midi & Maxi Dresses",
                                        "link": "/collections/Midi & Maxi Dresses"
                                    },
                                    {
                                        "name": "Mini Dresses",
                                        "link": "/collections/Mini Dresses"
                                    },

                                ]
                            },
                            {
                                "title": "STYLE",
                                "links": [
                                    {
                                        "name": "Casual Dresses",
                                        "link": "/collections/Casual Dresses"
                                    },
                                    {
                                        "name": "Occasion Dresses",
                                        "link": "/collections/Occasion Dresses"
                                    },
                                    {
                                        "name": " Workwear Dresses",
                                        "link": "/collections/ Workwear Dresses"
                                    },

                                ]
                            },
                            {
                                "title": "dresses1",
                                "type": LinkType.IMG,
                                "image": "women.dresses1.png"
                            },
                            {
                                "title": "dresses2",
                                "type": LinkType.IMG,
                                "image": "women.dresses2.png"
                            }

                        ]
                    },
                    {
                        "name": "Shoes, Bags, & Accessories",
                        "link": "/collection/womens-Shoes, Bags, & Accessories",
                        "section": [
                            {
                                "title": "SHOES",
                                "links": [
                                    {
                                        "name": "Shop All Shoes",
                                        "link": "/collections/Shop All Shoes"
                                    },
                                    {
                                        "name": "Flats & Loafers",
                                        "link": "/collections/Flats & Loafers"
                                    },
                                    {
                                        "name": " Boots",
                                        "link": "/collections/ Boots"
                                    },
                                    {
                                        "name": "Heels",
                                        "link": "/collections/Heels"
                                    },
                                    {
                                        "name": "Sneakers & Tennis Shoes",
                                        "link": "/collections/ Sneakers & Tennis Shoes"
                                    },
                                    {
                                        "name": "Sandals",
                                        "link": "/collections/Sandals"
                                    }
                                ]
                            },
                            {
                                "title": "BAGS, BACKPACKS, & ACCESSORIES",
                                "links": [
                                    {
                                        "name": "Shop All Bags",
                                        "link": "/collections/Shop All Bags"
                                    },
                                    {
                                        "name": "Totes",
                                        "link": "/collections/Totes"
                                    },
                                    {
                                        "name": "Backpacks & Travel Bags",
                                        "link": "/collections/Backpacks & Travel Bags"
                                    },
                                    {
                                        "name": " Crossbody Bags",
                                        "link": "/collections/ Crossbody Bags"
                                    },
                                    {
                                        "name": "Accessories",
                                        "link": "/collections/Accessories"
                                    },
                                ]
                            },
                            {
                                "title": "FEATURED SHOPS",
                                "links": [
                                    {
                                        "name": "Cold Weather Accessories",
                                        "link": "/collections/Cold Weather Accessories"
                                    },
                                    {
                                        "name": "Best-Sellers",
                                        "link": "/collections/Best-Sellers"
                                    },
                                    {
                                        "name": "The Boots Shop",
                                        "link": "/collections/The Boots Shop"
                                    },
                                    {
                                        "name": "The Leather Day Family Shop",
                                        "link": "/collections/The Leather Day Family Shop"
                                    },
                                    {
                                        "name": "ReNew Transit Travel Bags",
                                        "link": "/collections/ReNew Transit Travel Bags"
                                    },


                                ]
                            },
                            {
                                "title": "shoes",
                                "type": LinkType.IMG,
                                "image": "women.shoes1.png"
                            },

                        ]

                    },
                    {
                        "name": "Sale",
                        "link": "/collection/womens-Sale",
                        "section": [
                            {
                                "title": "CATEGORIES",
                                "links": [
                                    {
                                        "name": "Shop All Sale",
                                        "link": "/collections/Shop All Sale"
                                    },
                                    {
                                        "name": "Jeans & Bottoms On Sale",
                                        "link": "/collections/Jeans & Bottoms On Sale"
                                    },
                                    {
                                        "name": "Tops & T-Shirts On Sale",
                                        "link": "/collections/Tops & T-Shirts On Sale"
                                    },
                                    {
                                        "name": "Dresses & Jumpsuits On Sale",
                                        "link": "/collections/Dresses & Jumpsuits On Sale"
                                    },
                                    {
                                        "name": "Sweaters On Sale",
                                        "link": "/collections/Sweaters On Sale"
                                    },
                                    {
                                        "name": "Jackets & Coats On Sale",
                                        "link": "/collections/Jackets & Coats On Sale"
                                    }
                                ]
                            },
                            {
                                "title": "FEATURED",
                                "links": [
                                    {
                                        "name": "New To Sale",
                                        "link": "/collections/New To Sale"
                                    },
                                    {
                                        "name": "Last Chance",
                                        "link": "/collections/Last Chance"
                                    },
                                    {
                                        "name": "Deepest Discounts",
                                        "link": "/collections/Deepest Discounts"
                                    },

                                ]
                            },
                            {
                                "title": "sale1",
                                "type": LinkType.IMG,
                                "image": "women.sale1.png"
                            },
                            {
                                "title": "sale2",
                                "type": LinkType.IMG,
                                "image": "women.sale2.png"
                            },
                        ]
                    },

                ]
            },
            {
                "name": "Men",
                "link": "/Men",
                "subCategories": [
                    {
                        "name": "New Arrivals",
                        "link": "/collection/Men-new-arrivals",
                        "section": [
                            {
                                "title": "HIGHLIGHTS",
                                "links": [
                                    {
                                        "name": "Shop All New Arrivals",
                                        "link": "/collections/Shop All New Arrivals"
                                    },
                                    {
                                        "name": "New Bottoms",
                                        "link": "/collections/New Bottoms"
                                    },
                                    {
                                        "name": "New Tops",
                                        "link": "/collections/New Tops"
                                    },
                                    {
                                        "name": "T-Shirt Bundles",
                                        "link": "/collections/T-Shirt Bundles"
                                    },
                                    {
                                        "name": "Under $100",
                                        "link": "/collections/Under $100"
                                    }
                                ]
                            },
                            {
                                "title": "FEATURED SHOPS",
                                "links": [
                                    {
                                        "name": "Uniform & Capsule Staples",
                                        "link": "/collections/Uniform & Capsule Staples"
                                    },
                                    {
                                        "name": "The Performance Chino Shop",
                                        "link": "/collections/The Performance Chino Shop"
                                    },
                                    {
                                        "name": "Top Rated Men's Clothing",
                                        "link": "/collections/Top Rated Men's Clothing"
                                    }

                                ]
                            },
                            {
                                "title": "arrivals1",
                                "type": LinkType.IMG,
                                "image": "men.newarrivals1.png"
                            },
                            {
                                "title": "arrivals2",
                                "type": LinkType.IMG,
                                "image": "men.newarrivals2.png"
                            },
                        ]
                    },
                    {
                        "name": "Best-Sellers",
                        "link": "/collection/Men-best-sellers",
                        "section": [
                            {
                                "title": "BEST-SELLERS",
                                "links": [
                                    {
                                        "name": "Shop All Best-Sellers",
                                        "link": "/collections/Shop All Best-Sellers"
                                    },
                                    {
                                        "name": "Best-Selling Shirts",
                                        "link": "/collections/Best-Selling Shirts"
                                    },
                                    {
                                        "name": "Best-Selling Bottoms",
                                        "link": "/collections/Best-Selling Bottoms"
                                    },
                                    {
                                        "name": "Best-Selling T-Shirts",
                                        "link": "/collections/Best-Selling T-Shirts"
                                    },
                                    {
                                        "name": "Best-Selling Sweaters",
                                        "link": "/collections/Best-Selling Sweaters"
                                    }

                                ]
                            },
                            {
                                "title": "sellers1",
                                "type": LinkType.IMG,
                                "image": "men.bestsellers1.png"
                            },
                            {
                                "title": "sellers2",
                                "type": LinkType.IMG,
                                "image": "men.bestsellers2.png"
                            },
                            {
                                "title": "sellers3",
                                "type": LinkType.IMG,
                                "image": "men.bestsellers3.png"
                            },
                        ]
                    },
                    {
                        "name": "Clothing",
                        "link": "/collection/Men-Clothing",
                        "section": [
                            {
                                "title": "CLOTHING",
                                "links": [
                                    {
                                        "name": "Shop All Men's Clothing",
                                        "link": "/collections/Shop All Men's Clothing"
                                    },
                                    {
                                        "name": "Tops",
                                        "link": "/collections/Tops"
                                    },
                                    {
                                        "name": "Sweaters",
                                        "link": "/collections/Sweaters"
                                    },
                                    {
                                        "name": "Pants & Bottoms",
                                        "link": "/collections/Pants & Bottoms"
                                    },
                                    {
                                        "name": "Jeans & Denim",
                                        "link": "/collections/ Jeans & Denim"
                                    },
                                    {
                                        "name": "Outerwear & Jackets",
                                        "link": "/collections/Outerwear & Jackets"
                                    },
                                    {
                                        "name": "Underwear",
                                        "link": "/collections/Underwear"
                                    }
                                ]
                            },
                            {
                                "title": "clothing1",
                                "type": LinkType.IMG,
                                "image": "men.clothing1.png"
                            },
                            {
                                "title": "clothing2",
                                "type": LinkType.IMG,
                                "image": "men.clothing2.png"
                            },
                            {
                                "title": "clothing3",
                                "type": LinkType.IMG,
                                "image": "men.clothing3.png"
                            },
                        ]
                    },
                    {
                        "name": "Tops & Sweaters",
                        "link": "/collection/men-Tops & Sweaters",
                        "section": [
                            {
                                "title": "TOPS",
                                "links": [
                                    {
                                        "name": "Shop All Men's Tops",
                                        "link": "/collections/Shop All Men's Tops"
                                    },
                                    {
                                        "name": "T-Shirts",
                                        "link": "/collections/T-Shirts"
                                    },
                                    {
                                        "name": "Sweaters",
                                        "link": "/collections/Sweaters"
                                    },
                                    {
                                        "name": "Casual Shirts & Button Downs",
                                        "link": "/collections/Casual Shirts & Button Downs"
                                    },
                                    {
                                        "name": " Hoodies & Sweatshirts",
                                        "link": "/collections/Hoodies & Sweatshirts"
                                    },
                                    {
                                        "name": "Polos",
                                        "link": "/collections/Polos"
                                    },
                                    {
                                        "name": "Shirt Jackets",
                                        "link": "/collections/Shirt Jackets"
                                    }
                                ]
                            },
                            {
                                "title": "tops1",
                                "type": LinkType.IMG,
                                "image": "men.tops1.png"
                            },
                            {
                                "title": "tops2",
                                "type": LinkType.IMG,
                                "image": "men.tops2.png"
                            },
                            {
                                "title": "tops3",
                                "type": LinkType.IMG,
                                "image": "men.tops3.png"
                            },


                        ]

                    },
                    {
                        "name": "Pants & Jeans",
                        "link": "/collection/men-Pants & Jeans",
                        "section": [
                            {
                                "title": "PANTS & JEANS",
                                "links": [
                                    {
                                        "name": "Shop All Men's Pants & Jeans",
                                        "link": "/collections/Shop All Men's Pants & Jeans"
                                    },
                                    {
                                        "name": "Pants & Chinos",
                                        "link": "/collections/Pants & Chinos"
                                    },
                                    {
                                        "name": "Jeans & Denim",
                                        "link": "/collections/Jeans & Denim"
                                    },
                                    {
                                        "name": "Sweatpants & Lounge",
                                        "link": "/collections/Sweatpants & Lounge"
                                    },
                                    {
                                        "name": "Shorts",
                                        "link": "/collections/Shorts"
                                    },
                                    {
                                        "name": "The Performance Chino Shop",
                                        "link": "/collections/The Performance Chino Shop"
                                    }
                                ]
                            },
                            {
                                "title": "pants1",
                                "type": LinkType.IMG,
                                "image": "men.pants1.png"
                            },
                            {
                                "title": "pants2",
                                "type": LinkType.IMG,
                                "image": "men.pants2.png"
                            },{
                                "title": "pants3",
                                "type": LinkType.IMG,
                                "image": "men.pants3.png"
                            },


                        ]
                    },
                    {
                        "name": "Outerwear",
                        "link": "/collection/men-Outerwear",
                        "section": [
                            {
                                "title": "OUTERWEAR & JACKETS",
                                "links": [
                                    {
                                        "name": "Shop All Men's Outerwear",
                                        "link": "/collections/Shop All Men's Outerwear"
                                    },
                                    {
                                        "name": "Jackets & Coats",
                                        "link": "/collections/Jackets & Coats"
                                    },
                                    {
                                        "name": "Puffers & Parkas",
                                        "link": "/collections/Puffers & Parkas"
                                    },
                                    {
                                        "name": "Hoodies & Sweatshirts",
                                        "link": "/collections/Hoodies & Sweatshirts"
                                    },
                                    {
                                        "name": "Blazers",
                                        "link": "/collections/Blazers"
                                    }

                                ]
                            },
                            {
                                "title": "outerwear1",
                                "type": LinkType.IMG,
                                "image": "men.outerwear1.png"
                            },
                            {
                                "title": "outerwear2",
                                "type": LinkType.IMG,
                                "image": "men.outerwear2.png"
                            },
                            {
                                "title": "outerwear3",
                                "type": LinkType.IMG,
                                "image": "men.outerwear3.png"
                            },
                        ]
                    },
                    {
                        "name": "Shoes & Bags",
                        "link": "/collection/men-Shoes & Bags",
                        "section": [
                            {
                                "title": "SHOES & BAGS",
                                "links": [
                                    {
                                        "name": "Shop All Men's Shoes & Bags",
                                        "link": "/collections/Shop All Men's Shoes & Bags"
                                    },
                                    {
                                        "name": "Cold Weather Accessories",
                                        "link": "/collections/Cold Weather Accessories"
                                    },
                                    {
                                        "name": "Sneakers",
                                        "link": "/collections/Sneakers"
                                    },
                                    {
                                        "name": " Backpacks & Weekenders",
                                        "link": "/collections/ Backpacks & Weekenders"
                                    },
                                    {
                                        "name": "Accessories",
                                        "link": "/collections/Accessories"
                                    },
                                    {
                                        "name": "ReNew Transit Travel Bags",
                                        "link": "/collections/ReNew Transit Travel Bags"
                                    }
                                ]
                            },
                            {
                                "title": "shoes1",
                                "type": LinkType.IMG,
                                "image": "men.shoes1.png"
                            },
                            {
                                "title": "shoes2",
                                "type": LinkType.IMG,
                                "image": "men.shoes2.png"
                            },
                            {
                                "title": "shoes3",
                                "type": LinkType.IMG,
                                "image": "men.shoes3.png"
                            },


                        ]
                    },
                    {
                        "name": "Sale",
                        "link": "/collection/men-Sale",
                        "section": [
                            {
                                "title": "CATEGORIES",
                                "links": [
                                    {
                                        "name": "Shop All Men's Sale",
                                        "link": "/collections/Shop All Men's Sale"
                                    },
                                    {
                                        "name": "Tops & T-Shirts On Sale",
                                        "link": "/collections/Tops & T-Shirts On Sale"
                                    },
                                    {
                                        "name": "Sweaters On Sale",
                                        "link": "/collections/Sweaters On Sale"
                                    },
                                    {
                                        "name": "Outerwear On Sale",
                                        "link": "/collections/Outerwear On Sale"
                                    },
                                    {
                                        "name": "Pants & Shorts On Sale",
                                        "link": "/collections/Pants & Shorts On Sale"
                                    },
                                    {
                                        "name": "Jeans On Sale",
                                        "link": "/collections/Jeans On Sale"
                                    }
                                ]
                            },
                            {

                                "title": "FEATURED",
                                "links": [
                                    {
                                        "name": "New To Sale",
                                        "link": "/collections/New To Sale"
                                    },
                                    {
                                        "name": "Last Chance",
                                        "link": "/collections/Last Chance"
                                    },
                                    {
                                        "name": "Deepest Discounts",
                                        "link": "/collections/Deepest Discounts"
                                    },

                                ]
                            },
                            {
                                "title": "sale1",
                                "type": LinkType.IMG,
                                "image": "men.sale1.png"
                            },
                            {
                                "title": "sale2",
                                "type": LinkType.IMG,
                                "image": "men.sale2.png"
                            },
                        ]
                    },
                ]
            },
            {
                "name": "About",
                "link": "/About",
                "subCategories": [
                    {"name": "About"},
                    {
                        "name": "Sustainability",
                        "link": "/collection/About-About",
                        "section":[
                            {
                                "title": "Sustainability",
                                "links":[
                                    {
                                        "name":"Sustainability Approach",
                                        "link":"/collections/Sustainability Approach"
                                    },
                                    {
                                        "name":"Sustainability Pillars",
                                        "link":"/collections/Sustainability Pillars"
                                    },
                                    {
                                        "name":"Social Responsibility",
                                        "link":"/collections/Social Responsibility"
                                    },
                                    {
                                        "name":"Climate Commitment",
                                        "link":"/collections/Climate Commitment"
                                    },
                                    {
                                        "name":"Materials Matter",
                                        "link":"/collections/Materials Matter"
                                    },
                                    {
                                        "name":"Cleaner Fashion",
                                        "link":"/collections/Cleaner Fashion"
                                    },
                                    {
                                        "name":"Factories",
                                        "link":"/collections/Factories"
                                    },
                                    {
                                        "name":"Certifications & Awards",
                                        "link":"/collections/Certifications & Awards"
                                    },

                                ]
                            },
                            {
                                "title": "Sustainability1",
                                "type": LinkType.IMG,
                                "image": "about.Sustainability1.png"
                            },
                            {
                                "title": "Sustainability2",
                                "type": LinkType.IMG,
                                "image": "about.Sustainability2.png"
                            },
                            {
                                "title": "Sustainability3",
                                "type": LinkType.IMG,
                                "image": "about.Sustainability3.png"
                            },

                        ]
                    },
                    {"name": "Impact Report"},
                    {"name": "Stores"},

                ]

            },
            {"name": "Everworld Stories"},
        ];
    const [currentSubCategories, setCurrentSubCategories] = useState<SubCategorie[]>([]);
    const [selectedItem, setSelectedItem] = useState<Categorie | undefined>(undefined)

    const selectHandler = (selected: Categorie) => {
        setCurrentSubCategories(selected.subCategories ?? []);
        setSelectedItem(selected)
    }
    return (
        <>
            <div className="flex gap-1">

                {menuData.map((category: Categorie) => (
                    <button
                        className={twMerge("p-3 border-b-2 border-transparent", selectedItem?.name === category.name ? ' border-black' : '')}
                        key={category.name}
                        onClick={() => selectHandler(category)
                        }
                    >
                        {category.name}
                    </button>
                ))}

            </div>
            {currentSubCategories.length > 0 && <SubCategories data={currentSubCategories}/>}
        </>
    );
}

export default MainMenu;
