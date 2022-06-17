import TagManager from 'react-gtm-module';

const tagManagerArgs = {
    gtmId: 'testIdNeedsReplace'
};

export const Tracking = () => {
    function findCreative(creative) {
        switch (creative) {
            case 'hero_banner':
                return 'Hero Top';
            case 'banner_text':
                return 'banner';
            case 'content_grid':
                return '3 Cards Mid';
            default:
                return 'promotion';
        }
    }

    function initialize() {
        // if( process.env.NODE_ENV === 'development') {return}

        TagManager.initialize(tagManagerArgs);
    }

    function pageView(pageType, isLoggedIn) {
        //console.log("WILL SEND PAGE VIEW FOR: ",pageType )

        TagManager.dataLayer({
            dataLayer: {
                // Custom Dimensions outside EEC and with pageview
                event: 'page_view', // GTM trigger to pull data from dataLayer
                PageType: pageType, // Values: Homepage | Category | Product | Cart | Checkout | Purchase | Stores | Help | About | 404 | Other (Values based on page type)
                IsLoggedIn: isLoggedIn || 'False',
                IsCustomer: isLoggedIn || 'False'
            }
        });
    }

    function searchWithTerm(text) {
        TagManager.dataLayer({
            dataLayer: {
                event: 'search',
                search_term: text
            }
        });
    }

    function selectPromotion(title, creative, order) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                event: 'select_promotion',
                ecommerce: {
                    currencyCode: 'EUR',
                    promoClick: {
                        promotions: [
                            {
                                id: title,
                                name: title,
                                creative: creative,
                                position: `slot${order}`
                            }
                        ]
                    }
                }
            }
        });
    }

    function viewPromotion(promotions) {
        const promotionsArray = [];

        promotions?.map(({ data, creative }, index) => {
            if (creative === 'content_grid') {
                return;
            } else {
                promotionsArray.push({
                    id: data?.title,
                    name: data?.title,
                    creative: findCreative(creative),
                    position: `slot${index}`
                });
            }
        });

        for (let i = 0; i < promotions.length; i++) {
            if (promotions[i].creative === 'content_grid') {
                for (let x = 0; x < promotions[i]?.data.length; x++) {
                    const accessor = promotions[i]?.data[x].data;

                    promotionsArray.push({
                        id: accessor?.title,
                        name: accessor?.title,
                        creative: findCreative(promotions[i].creative),
                        position: `slot${x}`
                    });
                }
            }
        }

        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                event: 'view_promotion',
                ecommerce: {
                    currencyCode: 'EUR',
                    promoView: {
                        promotions: promotionsArray
                    }
                }
            }
        });
    }

    function selectItem(title, id, price, path, category) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });
        TagManager.dataLayer({
            dataLayer: {
                event: 'select_item',
                total_items_value: price,
                ecommerce: {
                    currencyCode: 'EUR',
                    click: {
                        actionField: {
                            list: path
                        },
                        products: [
                            {
                                id: id,
                                name: title,
                                price: price,
                                brand: '', // Brand name
                                category: category,
                                variant: '',
                                coupon: '',
                                position: 1,
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        });
    }
    function viewItem(id, title, price, category, path, varId, descr, productMedia, product_id, url) {
        window.omnisend = window.omnisend || [];

        window.omnisend.push([
            'track',
            '$productViewed',
            {
                $productID: product_id,
                $variantID: varId.toString(),
                $currency: 'Euro',
                $tags: [],
                $price: price * 100,
                // $oldPrice: “old price in cents”,
                $title: title,
                $description: descr,
                $imageUrl: productMedia[0]?.url,
                $productUrl: url,
                $vendor: 'Anna Maria Mazaraki'
            }
        ]);

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: [
                    {
                        id: id,
                        title: title,
                        item_price: price,
                        category: category?.name,
                        brand: '',
                        quantity: 1,
                        list: path
                    }
                ],
                custom_event_name: 'view_item',
                total_items_value: price,
                items: [
                    {
                        id: id,
                        google_business_vertical: 'retail'
                    }
                ],
                event: 'view_item',
                ecommerce: {
                    currencyCode: 'EUR',
                    detail: {
                        actionField: {
                            list: path
                        },

                        products: [
                            {
                                id: id,
                                name: title,
                                price: price,
                                brand: '',
                                category: category?.name,
                                variant: '',
                                coupon: '',
                                position: 1,
                                dimension1: '',
                                quantity: 1
                            }
                        ]
                    }
                }
            }
        });
    }

    function viewItemList(items, allItems) {
        const totalPrice = items?.reduce((a, b) => +a + +b?.price, 0);

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });
        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        title: item?.title,
                        item_price: item?.price,
                        category: item?.category,
                        brand: '',
                        quantity: '',
                        list: item.path //ask for LIST
                    };
                }),
                custom_event_name: 'view_item_list',
                total_items_value: totalPrice,
                items: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        google_business_vertical: 'retail'
                    };
                }),
                event: 'view_item_list',
                ecommerce: {
                    currencyCode: 'EUR',
                    impressions: allItems?.map((item, index) => {
                        return {
                            id: item?.mastersku,
                            name: item?.title,
                            price: item?.price,
                            category: item?.category,
                            brand: '',
                            quantity: '',
                            variant: '',
                            coupon: '',
                            position: index,
                            dimension1: '',
                            list: item?.path
                        };
                    })
                }
            }
        });
    }
    function viewSearchResults(items, allItems) {
        const totalPrice = items?.reduce((a, b) => +a + +b?.price, 0);

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });
        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        title: item?.title,
                        item_price: item?.price,
                        category: item?.category,
                        brand: '',
                        quantity: '',
                        list: item.path //ask for LIST
                    };
                }),
                custom_event_name: 'view_search_results',
                total_items_value: totalPrice,
                items: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        google_business_vertical: 'retail'
                    };
                }),
                event: 'view_item_list',
                ecommerce: {
                    currencyCode: 'EUR',
                    impressions: allItems?.map((item, index) => {
                        return {
                            id: item?.mastersku,
                            name: item?.title,
                            price: item?.price,
                            category: item?.category,
                            brand: '',
                            quantity: '',
                            variant: '',
                            coupon: '',
                            position: index,
                            dimension1: '',
                            list: item?.path
                        };
                    })
                }
            }
        });
    }

    function viewItemListRelativeItems(items) {
        const totalPrice = items?.reduce((a, b) => +a + +b?.price, 0);

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        title: item?.title,
                        item_price: item?.price,
                        category: item?.category,
                        brand: '',
                        quantity: '',
                        list: item.path //ask for LIST
                    };
                }),
                custom_event_name: 'view_item_list',
                total_items_value: totalPrice,
                items: items.map((item) => {
                    return {
                        id: item?.mastersku,
                        google_business_vertical: 'retail'
                    };
                }),
                event: 'view_item_list',
                ecommerce: {
                    currencyCode: 'EUR',
                    impressions: items?.map((item, index) => {
                        return {
                            id: item?.mastersku,
                            name: item?.title,
                            price: item?.price,
                            category: item?.category,
                            brand: '',
                            quantity: '',
                            variant: '',
                            coupon: '',
                            position: index,
                            dimension1: '',
                            list: item?.path
                        };
                    })
                }
            }
        });
    }

    function addToCart(items, totalPrice) {
        if (!items) return;

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: items.map((item) => {
                    return {
                        id: item?.sku,
                        title: item?.product_title,
                        item_price: item?.price,
                        category: item?.category,
                        brand: '',
                        quantity: item?.quantity,
                        list: item.path //ask for LIST
                    };
                }),
                custom_event_name: 'add_to_cart',
                total_items_value: totalPrice,
                items: items.map((item) => {
                    return {
                        id: item?.sku,
                        google_business_vertical: 'retail'
                    };
                }),
                event: 'add_to_cart',
                ecommerce: {
                    currencyCode: 'EUR',
                    add: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path
                        },
                        products: items.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutBegin(items, totalPrice) {
        if (!items) return;

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'begin_checkout',
                FB_product_contents_array: items?.map((item) => {
                    return {
                        id: item?.sku,
                        title: item?.product_title,
                        item_price: item?.price / item?.quantity,
                        category: item?.category,
                        brand: '',
                        quantity: item?.quantity,
                        list: item.path //ask for LIST
                    };
                }),

                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path,
                            step: 1
                        },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutShippingAddress(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout',

                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path,
                            step: 2
                        },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutBilling(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path,
                            step: 3
                        },

                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutBillingOption(items, totalPrice, isInvoice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout_option',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout_option: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path,
                            step: 3,
                            option: isInvoice ? 'Invoice' : 'Receipt'
                        },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutShippingMethod(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: { list: items?.length >= 0 && items[0]?.path, step: 4 },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function checkoutShippingMethodOption(items, totalPrice, pickUpType) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'add_shipping_info',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout_option: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path,
                            step: '4',
                            option: pickUpType === 'pickup' ? '' : 'ACS Courier'
                        },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function paymentMethod(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: { list: items?.length >= 0 && items[0]?.path, step: 5 },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function paymentMethodOption(items, totalPrice, option) {
        if (!items) return;

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'add_payment_info',

                FB_product_contents_array: items?.map((item) => {
                    return {
                        id: item?.sku,
                        title: item?.product_title,
                        item_price: item?.price / item?.quantity,
                        category: item?.category,
                        brand: '',
                        quantity: item?.quantity,
                        list: item.path //ask for LIST
                    };
                }),

                ecommerce: {
                    currencyCode: 'EUR',
                    checkout_option: {
                        actionField: { list: items?.length >= 0 && items[0]?.path, step: 5, option: option },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function overviewMethod(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'checkout',
                ecommerce: {
                    currencyCode: 'EUR',
                    checkout: {
                        actionField: { list: items?.length >= 0 && items[0]?.path, step: 6 },
                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function successfullOrder(items, totalPrice, orderId, makeAwish) {
        if (!items) return;

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                items: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                total_num_items: items.length + 1,
                event: 'purchase',

                FB_product_contents_array: items?.map((item) => {
                    return {
                        id: item?.sku,
                        title: item?.product_title,
                        item_price: item?.price / item?.quantity,
                        category: item?.category,
                        brand: '',
                        quantity: item?.quantity,
                        list: item.path //ask for LIST
                    };
                }),

                items: items.map((item) => {
                    return {
                        id: item?.sku,
                        google_business_vertical: 'retail'
                    };
                }),

                ecommerce: {
                    currencyCode: 'EUR',
                    purchase: {
                        actionField: {
                            id: orderId,
                            affiliation: 'Online Store',
                            revenue: totalPrice,
                            MakeAWish: makeAwish ? 'Yes' : 'No',
                            tax: '',
                            shipping: '',
                            coupon: '',
                            list: items?.length >= 0 && items[0]?.path
                        },

                        products: items?.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }

    function removeFromCart(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'remove_from_cart',
                ecommerce: {
                    currencyCode: 'EUR',
                    remove: {
                        actionField: {
                            list: items?.length >= 0 && items[0]?.path
                        },
                        products: items.map((item, index) => {
                            return {
                                id: item?.sku,
                                name: item?.product_title,
                                price: item?.price / item?.quantity,
                                category: item?.category,
                                brand: '',
                                quantity: item?.quantity,
                                variant: '',
                                coupon: '',
                                position: index,
                                dimension1: ''
                            };
                        })
                    }
                }
            }
        });
    }
    function addToWishlist(items) {
        if (!items) return;
        const totalPrice = items?.map((item) => item.product).reduce((a, b) => +a + +b.price, 0);

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: null,
                ecommerce: null
            }
        });

        TagManager.dataLayer({
            dataLayer: {
                FB_product_contents_array: items.map((item) => {
                    return {
                        id: item?.sku,
                        title: item?.product_title,
                        item_price: item?.price,
                        category: item?.category,
                        brand: '',
                        quantity: item?.quantity,
                        list: item.path //ask for LIST
                    };
                }),
                total_items_value: totalPrice ? totalPrice : null,
                event: 'add_to_wishlist',
                ecommerce: {
                    currencyCode: 'EUR',
                    items: items.map((item, index) => {
                        return {
                            id: item?.sku,
                            name: item?.product_title,
                            price: item?.price,
                            category: item?.category,
                            brand: '',
                            quantity: item?.quantity,
                            variant: '',
                            coupon: '',
                            position: index,
                            dimension1: '',
                            item_list_name: items?.path
                        };
                    })
                }
            }
        });
    }

    function viewCart(items, totalPrice) {
        TagManager.dataLayer({
            dataLayer: {
                ecommerce: null
            }
        });
        TagManager.dataLayer({
            dataLayer: {
                total_items_value: totalPrice,
                event: 'view_cart',
                ecommerce: {
                    currencyCode: 'EUR',
                    items: items?.map((item) => {
                        return {
                            item_id: item?.sku,
                            item_name: item?.product_title,
                            price: item?.price / item?.quantity,
                            item_category: item?.category,
                            item_brand: '',
                            quantity: item?.quantity,
                            item_variant: '',
                            item_coupon: '',
                            index: 1,
                            dimension1: '',
                            item_list_name: item[0]?.path
                        };
                    })
                }
            }
        });
    }

    return {
        initialize,
        pageView,
        searchWithTerm,
        checkoutBegin,
        viewPromotion,
        selectPromotion,
        viewItemList,
        viewSearchResults,
        selectItem,
        viewItem,
        addToCart,
        removeFromCart,
        addToWishlist,
        viewCart,
        checkoutShippingAddress,
        checkoutBilling,
        checkoutBillingOption,
        checkoutShippingMethod,
        checkoutShippingMethodOption,
        paymentMethod,
        paymentMethodOption,
        overviewMethod,
        successfullOrder,
        viewItemListRelativeItems
    };
};

export default Tracking();
