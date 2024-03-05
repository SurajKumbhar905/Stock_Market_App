import {ImageProps} from 'react-native';
const data=[ {value:50}, {value:-80}, {value:100}, {value:10} ,{value:50}, {value:-80}, {value:100}, {value:10}]
export type StockDataBaseProps = {
  id: number;
  companyName: string;
  stockName: string;
  logo: ImageProps;
  persentage: number;
  price: number;
  data : {value : number}[]
};

export const StockDataBase: StockDataBaseProps[] = [
  {
    id: 1,
    companyName: 'IBM',
    persentage: 2.5824,
    price: 193.06,
    stockName: 'IBM',
    logo: require('../../assets/Icons/brandLogos/IBM.png'),
    data : [ {value:193.0600}, {value:185.0300}, {value:183.6600}, {value:163.5500} ,{value:158.5600}, {value:144.6400}, {value:140.3000}, {value:146.8300} , {value:144.1800} ,  {value:133.8100} ,  {value:128.5900}]
  },
  {
    id: 2,
    companyName: 'Netflix',
    persentage: -0.5667,
    price: 615.83,
    stockName: 'NFLX',
    logo: require('../../assets/Icons/brandLogos/netflix.png'),
    data : [ {value:615.8300}, {value:602.9200}, {value:564.1100}, {value:486.8800} ,{value:473.9700}, {value:411.6900}, {value:377.6000}, {value:433.6800} , {value:438.9700}, {value:440.4900}, {value:395.2300} ]
  },
  {
    id: 3,
    companyName: 'Apple',
    persentage: -2.5381,
    price: 175.1,
    stockName: 'AAPL',
    logo: require('../../assets/Icons/brandLogos/apple.png'),
    data : [ {value:175.1000}, {value:180.7500}, {value:184.4000}, {value:192.5300} ,{value:189.9500}, {value:170.7700}, {value:171.2100}, {value:187.8700} , {value:196.4500}, {value:193.9700}, {value:177.2500} ]
  },
  {
    id: 4,
    companyName: 'FaceBook',
    persentage: -0.8182,
    price: 498.19,
    stockName: 'META',
    logo: require('../../assets/Icons/brandLogos/f.png'),
    data : [ {value:498.1900}, {value:490.1300}, {value:390.1400}, {value:353.9600} ,{value:327.1500}, {value:301.2700}, {value:300.2100}, {value:295.8900} , {value:318.6000}, {value:286.9800}, {value:264.7200} ]
  },
  {
    id: 5,
    companyName: 'Amazon',
    persentage: 2.5824,
    price: 177.58,
    stockName: 'AMZN',
    logo: require('../../assets/Icons/brandLogos/amazon.png'),
    data : [ {value:177.5800}, {value:176.7600}, {value:155.2000}, {value:151.9400} ,{value:146.0900}, {value:133.0900}, {value:127.1200}, {value:138.0100} , {value:133.6800}, {value:130.3600}, {value:120.5800} ]
  },
  {
    id: 6,
    companyName: 'WallMart',
    persentage: 0.919,
    price: 59.3,
    stockName: 'WMT',
    logo: require('../../assets/Icons/brandLogos/WallMart.png'),
    data : [ {value:193.0600}, {value:185.0300}, {value:183.6600}, {value:163.5500} ,{value:158.5600}, {value:144.6400}, {value:140.3000}, {value:146.8300} , {value:144.1800} ,  {value:133.8100} ,  {value:128.5900}]
  },
  {
    id: 7,
    companyName: 'Coco cola',
    persentage: 0.4704,
    price: 59.81,
    stockName: 'KO',
    logo: require('../../assets/Icons/brandLogos/CoCoCola.png'),
    data : [ {value:193.0600}, {value:185.0300}, {value:183.6600}, {value:163.5500} ,{value:158.5600}, {value:144.6400}, {value:140.3000}, {value:146.8300} , {value:144.1800} ,  {value:133.8100} ,  {value:128.5900}]
  },
  {
    id: 8,
    companyName: 'Intel',
    persentage: 4.0849,
    price: 45.61,
    stockName: 'INTC',
    logo: require('../../assets/Icons/brandLogos/Intel.png'),
    data : [ {value:175.1000}, {value:180.7500}, {value:184.4000}, {value:192.5300} ,{value:189.9500}, {value:170.7700}, {value:171.2100}, {value:187.8700} , {value:196.4500}, {value:193.9700}, {value:177.2500} ]
  },

  {
    id: 9,
    companyName: 'P&G',
    persentage: 0.447,
    price: 159.56,
    stockName: 'PG',
    logo: require('../../assets/Icons/brandLogos/P&G.png'),
    data : [ {value:175.1000}, {value:180.7500}, {value:184.4000}, {value:192.5300} ,{value:189.9500}, {value:170.7700}, {value:171.2100}, {value:187.8700} , {value:196.4500}, {value:193.9700}, {value:177.2500} ]
  },

  {
    id: 10,
    companyName: 'Boeing',
    persentage: 0.27,
    price: 200.54,
    stockName: 'BA',
    logo: require('../../assets/Icons/brandLogos/Boeing.png'),
    data : [ {value:200.5400}, {value:203.7200}, {value:211.0400}, {value:260.6600} ,{value:231.6300}, {value:186.8200}, {value:171.2100}, {value:191.6800} , {value:224.0300}, {value:238.8500}, {value:211.1600} ]
  },

  {
    id: 11,
    companyName: 'Caterpillar',
    persentage: 0.5792,
    price: 338.65,
    stockName: 'CAT',
    logo: require('../../assets/Icons/brandLogos/Caterpillar.png'),
    data : [ {value:338.6500}, {value:333.9600}, {value:300.3100}, {value:295.6700} ,{value:250.7200}, {value:226.0500}, {value:273.0000}, {value:281.1300} , {value:265.1700}, {value:246.0500}, {value:205.7500} ]
  },

  {
    id: 12,
    companyName: "McDonald's",
    persentage: 0.0722,
    price: 290.94,
    stockName: 'MCD',
    logo: require('../../assets/Icons/brandLogos/McDonald.png'),
    data : [ {value:193.0600}, {value:185.0300}, {value:183.6600}, {value:163.5500} ,{value:158.5600}, {value:144.6400}, {value:140.3000}, {value:146.8300} , {value:144.1800} ,  {value:133.8100} ,  {value:128.5900}]
  },
  {
    id: 13,
    companyName: 'Goldman Sachs',
    persentage: 1.0693,
    price: 392.25,
    stockName: 'GS',
    logo: require('../../assets/Icons/brandLogos/Goldman.png'),
    data : [ {value:615.8300}, {value:602.9200}, {value:564.1100}, {value:486.8800} ,{value:473.9700}, {value:411.6900}, {value:377.6000}, {value:433.6800} , {value:438.9700}, {value:440.4900}, {value:395.2300} ]
  },

  {
    id: 14,
    companyName: 'Verizon',
    persentage: 0.2736,
    price: 40.31,
    stockName: 'VZ',
    logo: require('../../assets/Icons/brandLogos/Verizon.png'),
    data : [ {value:498.1900}, {value:490.1300}, {value:390.1400}, {value:353.9600} ,{value:327.1500}, {value:301.2700}, {value:300.2100}, {value:295.8900} , {value:318.6000}, {value:286.9800}, {value:264.7200} ]
  },

  {
    id: 15,
    companyName: 'Honeywell',
    persentage: 0.2869,
    price: 199.24,
    stockName: 'HON',
    logo: require('../../assets/Icons/brandLogos/Honeywell.png'),
    data : [ {value:177.5800}, {value:176.7600}, {value:155.2000}, {value:151.9400} ,{value:146.0900}, {value:133.0900}, {value:127.1200}, {value:138.0100} , {value:133.6800}, {value:130.3600}, {value:120.5800} ]
  },

  {
    id: 16,
    companyName: 'Cisco Systems Inc',
    persentage: 1.5083,
    price: 49.13,
    stockName: 'CISCO',
    logo: require('../../assets/Icons/brandLogos/Cisco.png'),
    data : [ {value:193.0600}, {value:185.0300}, {value:183.6600}, {value:163.5500} ,{value:158.5600}, {value:144.6400}, {value:140.3000}, {value:146.8300} , {value:144.1800} ,  {value:133.8100} ,  {value:128.5900}]
  },
];
