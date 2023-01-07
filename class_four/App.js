import React from "react";
import ReactDOM from "react-dom/client";
// import '/class_four/index'
/**
       * Header
          - Logo
          - Nav items(right side)
          - Cart
        Body
          - Search bar
          - RestaurantCardl
              - Image
              - Name
              - Rating
              - Cusines
        Footer 
          - Links
          - Copyrights
       */
const resturantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "549334",
      name: "Punjabi Angithi",
      uuid: "3f580e02-b84d-43f8-a2e7-d29c395ccf68",
      city: "10459",
      area: "Sector 72",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "blj0wgwbliwovpk85vcm",
      cuisines: ["North Indian", "Punjabi", "Chinese", "Thalis"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 30,
      minDeliveryTime: 30,
      maxDeliveryTime: 30,
      slaString: "30 MINS",
      lastMileTravel: 2.9000000953674316,
      slugs: {
        restaurant: "punjabi-angithi-sector-18-sector-18-2",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Shop 5, Village- Sarfabad, Sector 72, Noida, ear royal avenue, next to Just Desi",
      locality: "near royal avenue lane",
      parentId: 4464,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5687245~p=1~eid=00000185-8b5c-3f94-0f4e-b16b0031011b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "549334",
        deliveryTime: 30,
        minDeliveryTime: 30,
        maxDeliveryTime: 30,
        lastMileTravel: 2.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "555911",
      name: "Gopala",
      uuid: "9775597c-229a-4a52-9316-1154666864d2",
      city: "10459",
      area: "Sector 50",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "gjdklaytow9yc3db4myv",
      cuisines: ["Sweets", "Desserts", "Bakery", "Snacks"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 20,
      minDeliveryTime: 20,
      maxDeliveryTime: 20,
      slaString: "20 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "gopala-sector-50-sector-50-3",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "B - 1/7 central market sector 50 noida, NOIDA CITY ZONE-4, Gautam Buddha Nagar , Uttar Pradesh-201301",
      locality: "Central Market",
      parentId: 281052,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "555911",
        deliveryTime: 20,
        minDeliveryTime: 20,
        maxDeliveryTime: 20,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.6",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "244228",
      name: "Annapurna Kitchen",
      uuid: "12c9015a-1d40-458c-9824-cd3e795c7a97",
      city: "10459",
      area: "Sector 62",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "o4qyfbp3npswfswxopen",
      cuisines: ["North Indian", "Thalis", "Combo"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 0.5,
      slugs: {
        restaurant: "annapurna-kitchen-sector-64-sector-64",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Chauhan Hotel, Captain Shashi Kant Marg, Hoshiyarpur, JJ Colony, Sector 52, Noida, Uttar Pradesh 201301",
      locality: "Sector 64",
      parentId: 13881,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "244228",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 0.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "591764",
      name: "Imperfecto",
      uuid: "8d8e8927-d813-4ed6-94bb-38b6aa2c2109",
      city: "10459",
      area: "Near Noida City Center Metro",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "pmby7ghk7ituecpxgwyv",
      cuisines: ["North Indian", "Biryani", "Chinese"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 1.399999976158142,
      slugs: {
        restaurant: "ruin-pub-golf-course-golf-course",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "Logix City Center Noida. Plot No. BW-58, Sector 32, Near Noida City Center Metro, Noida,Uttar Pradesh 201301.",
      locality: "Sector 32",
      parentId: 239216,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5618094~p=4~eid=00000185-8b5c-3f94-0f4e-b16c0031042e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "591764",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 1.399999976158142,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "154755",
      name: "Mr. Brown",
      uuid: "6909c51d-b213-406d-89ba-792525dcfb2f",
      city: "10459",
      area: "Gautam Buddha Nagar",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "etzvbwop5vt9npwn79xd",
      cuisines: ["Desserts", "Beverages", "Bakery"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 23,
      minDeliveryTime: 23,
      maxDeliveryTime: 23,
      slaString: "23 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "mr-brown-raj-nagar",
        city: "noida-1",
      },
      cityState: "10459",
      address:
        "3D-18M, Marigold Court, HSSC, Wave City,Center, Plot No. CC001, Sector 32, Noida,NOIDA CITY ZONE-3, Gautam Buddha Nagar,Uttar Pradesh-201307",
      locality: "NOIDA CITY ZONE-3,Sector 32",
      parentId: 2262,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "154755",
        deliveryTime: 23,
        minDeliveryTime: 23,
        maxDeliveryTime: 23,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
];
const Title = () => (
  <a href="/">
    <img
      className="logo"
      src={
        "data:image/jpeg;base64,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"
      }
      alt="logo image"
    />
  </a>
);
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const ResturantCard = ({ name, lastMileTravelString, cloudinaryImageId, cuisines }) => {
  // console.log("hello", resturant);
  return (
    <div className="card">
      <img
        src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{lastMileTravelString}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="resturant-list">
      {resturantList.map((resturant) => {
        return <ResturantCard {...resturant.data} />;
      })}
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
