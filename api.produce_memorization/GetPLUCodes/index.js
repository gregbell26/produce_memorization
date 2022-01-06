// This should get the current JSON of codes from cosmos
let codes = {
    availableCodes : [
        {
            name: "Garlic",
            code: "4608",
            image: "https://sage.blob.core.windows.net/media/56dc1363a8ced3110066fcb7.jpg"
        },
        {
            name: "Roma Tomatoes",
            code: "4087",
            image: "https://www.lovemysalad.com/sites/default/files/styles/home_carousel_item_768/public/4071.jpg?itok=zAih1xkJ"
        },
        {
            name: "Lime",
            code: "4048",
            image: "https://universityhealthnews.com/media/benefits-of-lime.jpg"
        },
        {
            name: "Zucchini",
            code: "4067",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmCUrFdQ2n_fYre7MjECYELjBt5SV-JQkqkg&usqp=CAU"
        },
        {
            name: "Green Beans",
            code: "4066",
            image: "https://thefamilydinnerproject.org/wp-content/uploads/2013/09/Green-bean-lime-633x326.jpg"
        },
        {
            name: "Cucumbers",
            code: "4062",
            image: "https://www.naturefresh.ca/wp-content/uploads/NFF-Cucumber-19-March-2018-2.jpg"
        },
        {
            name: "Parsley",
            code: "3338380125",
            image: "https://images-na.ssl-images-amazon.com/images/I/81eX3Xo4lLL._AC_SL1500_.jpg"
        },
        {
            name: "Cilantro",
            code: "3338380104",
            image: "https://geturbanleaf.com/wp-content/uploads/2020/02/cilantro-hero.jpeg"
        },
        {
            name: "Broccoli",
            code: "3082",
            image: "https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/broccoli_commodity-page.png"
        },
        {
            name: "Celery",
            code: "4070",
            image: "https://chicagohealthonline.com/wp-content/uploads/2019/12/celery-3410302_1280.png"
        },
        {
            name: "Serrano Pepper",
            code: "4709",
            image: "https://www.thespruceeats.com/thmb/coNZtAc6pCXgzOs0H-chD-FbZ24=/1500x844/smart/filters:no_upscale()/GettyImages-930279012-e1d17f3f2e14473db877437ce57b8f5f.jpg"
        },
        {
            name: "Jalapeno Pepper",
            code: "4693",
            image: "https://images-na.ssl-images-amazon.com/images/I/61vImVMrhRL._SL1100_.jpg"
        },
        {
            name: "Green Bell Pepper",
            code: "4065",
            image: "https://i5.walmartimages.com/asr/f9eb0b85-a672-4d3c-9646-b83a4a675d98_1.f3f235f3bca9274f66b4f589647c50d3.jpeg"
        },
        {
            name: "Red Bell Pepper",
            code: "4088",
            image: "https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0000000040880_CL_hyvee1_default_large.png"
        },
        {
            name: "Yellow Bell Pepper",
            code: "4680",
            image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_0f74dc4b-9cdf-4fa3-8994-2682e77189c3.jpg"
        },
        {
            name: "Orange Bell Pepper",
            code: "4682",
            image: "https://images.heb.com/is/image/HEBGrocery/000318693"
        },
        {
            name: "Pasilla/Poblano Pepper",
            code: "4701",
            image: "https://www.pepperscale.com/wp-content/uploads/2017/04/Poblano-Pepper-Nutrition-1024x683.jpeg"
        },
        {
            name: "Beets Bulk",
            code: "4540",
            image: "https://theforkedspoon.com/wp-content/uploads/2017/04/How-to-Cook-Beets-2.jpg"
        },
        {
            name: "Fennel",
            code: "4515",
            image: "https://www.gourmetsleuth.com/images/default-source/food/fennel_300-jpg.jpg?sfvrsn=4"
        },
        {
            name: "Brussels Sprouts",
            code: "4550",
            image: "https://www.meijer.com/content/dam/meijer/product/0003/33/8370/15/0003338370154_1_A1C1_1200.png"
        },
        {
            name: "Russet Potatoes",
            code: "4072",
            image: "https://i5.walmartimages.ca/images/Enlarge/094/507/6000200094507.jpg"
        },
        {
            name: "Green Asparagus",
            code: "4521",
            image: "https://cdn11.bigcommerce.com/s-q1qpuo8ch5/images/stencil/2048x2048/products/889/479/asparagus__73046.1553261909.jpg?c=2"
        },
        {
            name: "Ginger Root",
            code: "4612",
            image: "https://cdn.shopify.com/s/files/1/1655/2891/products/Ginger-PNG-Image1-1_1024x1024.png?v=1568941130"
        },
        {
            name: "Shallots",
            code: "4662",
            image: "https://images.heb.com/is/image/HEBGrocery/000374935"
        },
        {
            name: "Green Cabbage",
            code: "4069",
            image: "https://images-na.ssl-images-amazon.com/images/I/61awtjWicTL._SL1024_.jpg"
        },
        {
            name: "Green Onion",
            code: "4068",
            image: "https://specialtyproduce.com/sppics/2223.png"
        },
        {
            name: "Bok Choy",
            code: "4545",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQeUDRfHtEavPBs1dZjeCE8Yu6hVvSjXQ2cXg&usqp=CAU"
        },
        {
            name: "Yams/ Sweet Potatoes",
            code: "4816",
            image: "https://cdn0.wideopeneats.com/wp-content/uploads/2017/01/yams-vs-sweet-potatoes-720x405.jpg"
        },
        {
            name: "Carrots Bulk",
            code: "4562",
            image: "https://www.carotene.org/wp-content/uploads/2017/09/Retinol-Equivalents.png"
        },
        {
            name: "Six Pack Beer",
            code: "20814",
            image: "https://www.homebrewing.org/assets/images/cardboard_six_pack_holder.jpg"
        },
        {
            name: "Single Beer",
            code: "2787",
            image: "https://shop.greatfermentations.com/images/large/5224_beer_bottles_12_oz_brown.jpg"
        },
        {
            name: "Single Water",
            code: "20353",
            image: "https://www.thesun.co.uk/wp-content/uploads/2016/12/screw-top-gettyimages-85210965.jpg?w=907&strip=all"
        },
        {
            name: "Ten Pound Ice",
            code: "20501",
            image: "https://target.scene7.com/is/image/Target/GUEST_fb6f04ca-7418-4605-ad68-667b6e596e72?wid=488&hei=488&fmt=pjpeg"
        },
        {
            name: "Twenty Pound Ice",
            code: "20503",
            image: "https://www.reddyice.com/theme/frontend/images/products/products-traditional-cubed-ice.png"
        },
        {
            name: "J4U Price Correction",
            code: "10325",
            image: "https://trademarks.justia.com/media/image.php?serial=76701047"
        },
        // {
        //     name: "Club Card Price Correction",
        //     code: "10326",
        //     image: "https://i.pinimg.com/474x/3b/f3/6a/3bf36a12dfbf30c949e8117766dd1f47.jpg"
        // },
        {
            name: "Water Machine Gallon Refill",
            code: "20306",
            image: "https://www.truck-drivers-money-saving-tips.com/image-files/water-vending-machines-dsc01594-250x486.jpg"
        },
        {
            name: "Book of Stamps",
            code: "22050",
            image: "https://www.usps.com/ecp/asset/images/SUBS-L0.jpg"
        },


    ],
    arr_length : 0


};
module.exports = async function (context, req) {
    codes.arr_length = codes.availableCodes.length;
    context.log('Sent ' + codes.arr_length + ' codes');

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: codes
    };
}